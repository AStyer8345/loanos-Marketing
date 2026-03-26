'use client'

import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// Landing page — structure only. Design handled by Gemini.
// Sections: nav, hero, problem, features, social-proof, waitlist-form, footer
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
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

  return (
    <>
      {/* ── NAV ────────────────────────────────────────────────────────────── */}
      <header id="nav">
        <nav>
          <span id="nav-logo">LoanOS</span>
          <a href="#waitlist">Join the waitlist</a>
        </nav>
      </header>

      <main>
        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section id="hero">
          <h1>The mortgage CRM built by a loan officer, for loan officers.</h1>
          <p id="hero-sub">
            AI-powered pipeline management, automated borrower communication, and deal tracking —
            built by an LO who was tired of doing it manually.
          </p>
          <a href="#waitlist" id="hero-cta">
            Join the beta waitlist
          </a>
        </section>

        {/* ── PROBLEM ────────────────────────────────────────────────────── */}
        <section id="problem">
          <h2>You're running your pipeline out of spreadsheets and sticky notes.</h2>
          <p>
            Generic CRMs weren't built for mortgage. They don't understand loan stages,
            condition tracking, or realtor relationships. So you cobble together tools
            and spend hours on admin that should take minutes.
          </p>
          <ul id="pain-points">
            <li>Manually tracking loan status across 15 open files</li>
            <li>Copying borrower info between your LOS and your CRM</li>
            <li>Writing the same follow-up emails from scratch every time</li>
            <li>No visibility into which realtors are actually sending deals</li>
          </ul>
        </section>

        {/* ── FEATURES ───────────────────────────────────────────────────── */}
        <section id="features">
          <h2>Everything you need. Nothing you don't.</h2>
          <div id="features-grid">
            <div className="feature-card" id="feature-pipeline">
              <h3>Pipeline Dashboard</h3>
              <p>Every loan, every stage, every next action — in one view.</p>
            </div>
            <div className="feature-card" id="feature-automations">
              <h3>Automated Communication</h3>
              <p>
                Pre-approval emails, CD delivery, referral intros — sent automatically
                when milestones hit.
              </p>
            </div>
            <div className="feature-card" id="feature-ai">
              <h3>AI Assistant</h3>
              <p>Ask it anything about your pipeline. Get answers, drafts, and insights instantly.</p>
            </div>
            <div className="feature-card" id="feature-scenarios">
              <h3>Scenario Builder</h3>
              <p>Build rate/payment comparisons and send branded PDFs in under 60 seconds.</p>
            </div>
            <div className="feature-card" id="feature-contacts">
              <h3>Realtor CRM</h3>
              <p>Track every referral partner, deal history, and follow-up — in one place.</p>
            </div>
            <div className="feature-card" id="feature-reports">
              <h3>Performance Reports</h3>
              <p>See your volume, pull-through rate, and top referral sources at a glance.</p>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ───────────────────────────────────────────────── */}
        <section id="social-proof">
          <h2>Built in the field. Proven on real loans.</h2>
          <p>
            LoanOS was built by an independent mortgage broker in Austin, TX —
            over 1,000 loans closed — who needed a better system and couldn't
            find one. This is the tool that replaced an admin hire.
          </p>
          <ul id="stats">
            <li><strong>1,000+</strong> loans closed using this system</li>
            <li><strong>8</strong> automated workflows running daily</li>
            <li><strong>0</strong> admin staff needed</li>
          </ul>
        </section>

        {/* ── WAITLIST FORM ──────────────────────────────────────────────── */}
        <section id="waitlist">
          <h2>Get early access.</h2>
          <p>
            LoanOS is in private beta. Join the waitlist and be first in line
            when we open to new loan officers.
          </p>

          {status === 'success' ? (
            <div id="success-message">
              <h3>You're on the list.</h3>
              <p>We'll reach out when your spot opens up.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} id="waitlist-form">
              <div id="form-fields">
                <div id="field-name">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Adam Styer"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div id="field-email">
                  <label htmlFor="email">Work email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="adam@yourbrokerage.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>
              {status === 'error' && (
                <p id="form-error">{errorMsg}</p>
              )}
              <button type="submit" id="submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
              </button>
              <p id="form-fine-print">No spam. We'll only email you when your spot is ready.</p>
            </form>
          )}
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer id="footer">
        <p>LoanOS — Built by Adam Styer | Mortgage Solutions LP · NMLS #513013</p>
        <p>Austin, TX</p>
      </footer>
    </>
  )
}
