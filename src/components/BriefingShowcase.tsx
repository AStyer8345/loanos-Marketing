// Daily Briefing + Voice Guide showcase — shows the morning intelligence
// briefing and rate-lock / pipeline alerts that run automatically.

const ALERTS = [
  {
    priority: 'urgent',
    icon: '🔒',
    title: 'Rate lock expiring tomorrow',
    detail: 'Marcus & Elena Reyes — 1204 S Lamar Blvd · Lock expires Apr 18 · Currently in UW Review',
    action: 'Request extension or push for conditional approval today',
  },
  {
    priority: 'urgent',
    icon: '📋',
    title: '3 conditions outstanding',
    detail: 'Sarah Mitchell — 912 E 6th St · UW returned 3 PTD conditions · Borrower hasn\'t responded in 48hrs',
    action: 'Follow up email drafted — review and send',
  },
  {
    priority: 'normal',
    icon: '📞',
    title: 'Realtor follow-up due',
    detail: 'Rachel Martinez — last touchpoint was 18 days ago · 3 active referrals in pipeline',
    action: 'Draft a quick check-in with deal updates',
  },
  {
    priority: 'normal',
    icon: '🎂',
    title: 'Client birthday tomorrow',
    detail: 'Tom Nguyen — closed 2847 Bee Cave Rd, Mar 2025 · Birthday Apr 7',
    action: 'Birthday email drafted and queued for 8am',
  },
]

const BRIEFING_STATS = [
  { label: 'Active pipeline', value: '7 loans', sub: '$3.1M' },
  { label: 'Locks expiring < 7d', value: '2', sub: 'Reyes, Kim' },
  { label: 'Stale follow-ups', value: '3', sub: '> 14 days' },
  { label: 'Auto-actions today', value: '5', sub: 'Emails + texts' },
]

export default function BriefingShowcase() {
  return (
    <div className="space-y-6">
      {/* Briefing header with stats */}
      <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface2)] shadow-xl shadow-black/30">
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground">
              Daily Briefing
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">
              · Saturday, Apr 5, 2026 · 7:30 AM
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--primary)]" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-primary">Auto-generated</span>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 border-b border-[var(--border)] md:grid-cols-4">
          {BRIEFING_STATS.map((s) => (
            <div key={s.label} className="border-r border-[var(--border)] p-3 last:border-r-0">
              <div className="font-mono text-[8px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <div className="mt-0.5 font-mono text-base font-bold text-foreground">{s.value}</div>
              <div className="font-mono text-[9px] text-muted-foreground/60">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Priority alerts */}
        <div className="divide-y divide-[var(--border)]">
          {ALERTS.map((a, i) => (
            <div key={i} className="flex gap-3 px-4 py-3">
              <span className="mt-0.5 shrink-0 text-sm">{a.icon}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-semibold text-foreground">{a.title}</span>
                  {a.priority === 'urgent' && (
                    <span className="rounded-full bg-red-500/15 px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wider text-red-400 border border-red-500/30">
                      Urgent
                    </span>
                  )}
                </div>
                <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">{a.detail}</p>
                <p className="mt-1 font-mono text-[10px] text-primary">{a.action}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-2">
          <span className="font-mono text-[9px] text-muted-foreground/60">
            Generated from your live pipeline · displayed on your dashboard every morning
          </span>
        </div>
      </div>

      {/* Voice guide + compliance callouts */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-primary/20 bg-primary/[0.04] px-5 py-4">
          <div className="flex items-start gap-3">
            <svg
              aria-hidden
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="22" />
            </svg>
            <div>
              <div className="text-sm font-semibold text-foreground">
                Voice guide — your tone, your rules.
              </div>
              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Every email, text, and social post runs through your voice guide before it ships. It knows your sentence length, your preferred sign-offs, the clichés you hate. The briefing speaks in your language, not a template&apos;s.
              </div>
              <div className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-primary/80">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--primary)]" />
                Emails · Texts · Social · Briefing
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.04] px-5 py-4">
          <div className="flex items-start gap-3">
            <svg
              aria-hidden
              className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div>
              <div className="text-sm font-semibold text-foreground">
                Compliance-trained — not an afterthought.
              </div>
              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Every draft is checked against TILA, RESPA, Reg Z, and state-level advertising rules before you see it. Trigger terms auto-flag for disclosure. NMLS and Equal Housing requirements are enforced at generation time — not after a compliance officer reviews it.
              </div>
              <div className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-emerald-400/80">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgb(52_211_153)]" />
                TILA · RESPA · Reg Z · TRID · State
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
