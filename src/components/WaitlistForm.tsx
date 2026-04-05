'use client'

import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// WaitlistForm — client island for the pre-launch waitlist signup
// POSTs to /api/waitlist which handles Mailchimp + Supabase persistence
// ─────────────────────────────────────────────────────────────────────────────

export default function WaitlistForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Try again.')
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-8 text-center card-glow">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-1 text-xl font-bold text-foreground">You&apos;re on the list.</h3>
        <p className="font-mono text-xs text-muted-foreground">
          We&apos;ll reach out when your spot opens up. Launching May 1, 2026.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 card-glow"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="wl-name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Your name
          </label>
          <input
            id="wl-name"
            type="text"
            placeholder="Adam Styer"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={status === 'loading'}
            className="w-full rounded-md border border-[var(--input)] bg-[var(--bg)] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="wl-email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Work email
          </label>
          <input
            id="wl-email"
            type="email"
            placeholder="you@yourbrokerage.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
            className="w-full rounded-md border border-[var(--input)] bg-[var(--bg)] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
          />
        </div>

        {status === 'error' && (
          <p className="font-mono text-xs text-[var(--red)]">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading' || !name || !email}
          className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
        >
          {status === 'loading' ? 'Joining…' : 'Join the waitlist'}
        </button>

        <p className="text-center font-mono text-[11px] text-muted-foreground">
          Launching May 1, 2026 · No spam, no sales calls unless you ask
        </p>
      </div>
    </form>
  )
}
