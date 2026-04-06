// Security trust section — shows LOs their data is isolated and safe.
// Every claim here is verifiable against the loanos-clone security audit.

const PILLARS = [
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Tenant isolation',
    body: 'Every organization runs in its own data silo. Row-level security on every table. Your loans, contacts, and documents are invisible to every other LO on the platform — no exceptions.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Webhook authentication',
    body: 'Arive data flows through per-org webhook endpoints with hashed secrets and timing-safe verification. No shared keys, no ambient credentials, no cross-org leakage.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
    title: 'Your data, your export',
    body: 'Cancel anytime. You get a full export of contacts, loans, documents, and activity history in standard formats. No hostage tactics, no 90-day lockout, no "we\'ll get back to you."',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Security headers & rate limiting',
    body: 'CSP, HSTS, and strict CORS on every response. Public endpoints are rate-limited per IP. Admin routes require verified org membership — middleware enforced, not just code-level.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
      </svg>
    ),
    title: 'No AI training on your data',
    body: 'LoanOS uses Claude for drafting and chat. Your pipeline data, borrower info, and conversations are never used to train AI models. Anthropic\'s API terms guarantee it.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    title: 'Encrypted document storage',
    body: 'Contracts, rate locks, CDs, and borrower docs are stored in encrypted buckets with scoped access. Only your organization\'s authenticated users can view or download them.',
  },
]

export default function SecuritySection() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                {p.icon}
              </div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                {p.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
