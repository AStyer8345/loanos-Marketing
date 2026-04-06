import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/waitlist
// 1. Validates name + email
// 2. Subscribes to Mailchimp "LoanOS Beta Waitlist" audience
// 3. Inserts record into LoanOS Supabase waitlist_signups table
// ─────────────────────────────────────────────────────────────────────────────

// Simple in-memory rate limiter — 5 requests per IP per 60 seconds
const rateMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60_000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT
}

export async function POST(req: NextRequest) {
  // Rate limit by IP
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a minute.' },
      { status: 429 }
    )
  }

  let body: { name?: string; email?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = body.name?.trim()
  const email = body.email?.trim().toLowerCase()

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  const apiKey = process.env.MAILCHIMP_API_KEY
  const server = process.env.MAILCHIMP_SERVER
  const listId = process.env.MAILCHIMP_LIST_ID
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!apiKey || !server || !listId || !supabaseUrl || !supabaseKey) {
    console.error('Missing env vars — check .env.local against .env.local.example')
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  // ── 1. Mailchimp subscribe ──────────────────────────────────────────────
  let mailchimpStatus: 'subscribed' | 'error' = 'subscribed'

  try {
    const mcRes = await fetch(
      `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: { FNAME: name.split(' ')[0], LNAME: name.split(' ').slice(1).join(' ') },
          tags: ['loanos-beta-waitlist'],
        }),
      }
    )

    const mcData = await mcRes.json()

    // 400 with "Member Exists" = already subscribed, treat as success
    if (!mcRes.ok && mcData.title !== 'Member Exists') {
      console.error('Mailchimp error:', mcData)
      mailchimpStatus = 'error'
    }
  } catch (err) {
    console.error('Mailchimp fetch failed:', err)
    mailchimpStatus = 'error'
  }

  // ── 2. Supabase insert ──────────────────────────────────────────────────
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { error: dbError } = await supabase
    .from('waitlist_signups')
    .upsert(
      { name, email, source: 'marketing-site', mailchimp_status: mailchimpStatus },
      { onConflict: 'email' }
    )

  if (dbError) {
    console.error('Supabase insert error:', dbError)
    // Still return success if Mailchimp worked — don't fail the user
    if (mailchimpStatus === 'error') {
      return NextResponse.json(
        { error: 'Could not add you to the list. Please try again.' },
        { status: 500 }
      )
    }
  }

  return NextResponse.json({ ok: true })
}
