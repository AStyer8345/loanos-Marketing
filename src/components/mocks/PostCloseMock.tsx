// Post-close tab mock — dashboard metric cards + recent automated actions.

const METRICS = [
  { label: 'YTD Closed', value: '$4.8M', sub: '14 loans' },
  { label: 'Active Pipeline', value: '$3.1M', sub: '7 loans' },
  { label: 'Avg Days to Close', value: '28', sub: '↓ 3 from last quarter' },
  { label: 'Post-Close Touches', value: '47', sub: 'This month' },
]

const AUTOMATIONS = [
  { time: '2h ago', action: 'Birthday email sent', target: 'Tom & Lisa Nguyen', icon: '🎂' },
  { time: '5h ago', action: 'Rate drop alert queued', target: 'Davis — locked at 7.25%, now 6.875%', icon: '📉' },
  { time: 'Yesterday', action: 'Review request sent', target: 'Okonkwo — funded Mar 28', icon: '⭐' },
  { time: 'Yesterday', action: 'Closing anniversary', target: 'Patel — 2 years at 8801 Shoal Creek', icon: '🏠' },
  { time: '3 days ago', action: 'Equity check-in sent', target: 'Franklin — est. $62k gained', icon: '📊' },
]

export default function PostCloseMock() {
  return (
    <div className="space-y-4">
      {/* Metric cards */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3 shadow-lg shadow-black/20"
          >
            <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
            <div className="mt-1 font-mono text-xl font-bold text-foreground">{m.value}</div>
            <div className="mt-0.5 font-mono text-[9px] text-muted-foreground/60">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Recent automated actions */}
      <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface2)] shadow-xl shadow-black/30">
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2.5">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground">
            Recent Automated Actions
          </span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgb(16,185,129)]" />
            <span className="font-mono text-[9px] text-emerald-400">Running</span>
          </div>
        </div>
        {AUTOMATIONS.map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-2.5 last:border-b-0"
          >
            <span className="shrink-0 text-sm">{a.icon}</span>
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[11px] font-medium text-foreground">{a.action}</span>
              <span className="ml-2 font-mono text-[10px] text-muted-foreground">{a.target}</span>
            </div>
            <span className="shrink-0 font-mono text-[9px] text-muted-foreground/60">{a.time}</span>
          </div>
        ))}

        {/* Footer */}
        <div className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-2">
          <span className="font-mono text-[9px] text-muted-foreground/60">
            47 automated touches this month · 0 manual effort
          </span>
        </div>
      </div>
    </div>
  )
}
