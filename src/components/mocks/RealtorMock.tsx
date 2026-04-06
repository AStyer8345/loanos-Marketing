// Realtor CRM tab mock — contact card with referral stats + activity feed.

const ACTIVITY = [
  { date: 'Mar 28', action: 'Referral closed', detail: 'Reyes — 1204 S Lamar', type: 'deal' },
  { date: 'Mar 15', action: 'Co-branded PA sent', detail: 'Park — 4501 Balcones', type: 'doc' },
  { date: 'Feb 20', action: 'Referral received', detail: 'Kim — 610 W Mary', type: 'referral' },
  { date: 'Jan 8', action: 'Intro email sent', detail: 'Auto-drafted by LoanOS', type: 'email' },
  { date: 'Dec 12', action: 'Referral closed', detail: 'Mitchell — 912 E 6th', type: 'deal' },
]

const TYPE_STYLES: Record<string, string> = {
  deal: 'bg-emerald-500/15 text-emerald-400',
  doc: 'bg-blue-500/15 text-blue-400',
  referral: 'bg-amber-500/15 text-amber-400',
  email: 'bg-purple-500/15 text-purple-400',
}

export default function RealtorMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface2)] shadow-xl shadow-black/30">
      {/* Contact header */}
      <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="font-mono text-sm font-semibold text-foreground">Rachel Martinez</div>
            <div className="mt-0.5 font-mono text-[11px] text-muted-foreground">
              Compass Austin · TREC #724851
            </div>
          </div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-primary">
            Top Partner
          </span>
        </div>

        {/* Stats row */}
        <div className="mt-4 grid grid-cols-4 gap-3">
          {[
            { label: 'Closed', value: '12' },
            { label: 'Pipeline', value: '3' },
            { label: 'Volume', value: '$5.2M' },
            { label: 'Last Deal', value: 'Mar 28' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono text-lg font-bold text-foreground">{s.value}</div>
              <div className="font-mono text-[8px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Referral pipeline — who's sending deals */}
      <div className="border-b border-[var(--border)] px-4 py-3">
        <div className="mb-2 font-mono text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
          Referral Pipeline
        </div>
        <div className="space-y-2">
          {[
            { name: 'Rachel Martinez', referred: 15, closed: 12, pipeline: 3, pct: 80 },
            { name: 'David Chen', referred: 8, closed: 5, pipeline: 2, pct: 63 },
            { name: 'Laura Pham', referred: 6, closed: 4, pipeline: 1, pct: 67 },
            { name: 'Mike Torres', referred: 3, closed: 2, pipeline: 0, pct: 67 },
          ].map((r) => (
            <div key={r.name} className="flex items-center gap-3">
              <span className="w-28 truncate font-mono text-[10px] text-foreground">{r.name}</span>
              <div className="flex flex-1 items-center gap-1">
                <div className="h-1.5 flex-1 rounded-full bg-[var(--border)]">
                  <div
                    className="h-full rounded-full bg-primary/70"
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
              </div>
              <div className="flex gap-3 font-mono text-[9px] text-muted-foreground">
                <span>{r.referred} sent</span>
                <span className="text-emerald-400">{r.closed} closed</span>
                <span className="text-amber-400">{r.pipeline} active</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity feed */}
      <div>
        <div className="border-b border-[var(--border)] bg-[var(--surface2)] px-4 py-2">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Recent Activity
          </span>
        </div>
        {ACTIVITY.map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-2.5 last:border-b-0"
          >
            <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded text-[9px] ${TYPE_STYLES[a.type]}`}>
              {a.type === 'deal' ? '✓' : a.type === 'doc' ? '📄' : a.type === 'referral' ? '→' : '✉'}
            </span>
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[11px] text-foreground">{a.action}</span>
              <span className="ml-2 font-mono text-[10px] text-muted-foreground">{a.detail}</span>
            </div>
            <span className="shrink-0 font-mono text-[9px] text-muted-foreground/60">{a.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
