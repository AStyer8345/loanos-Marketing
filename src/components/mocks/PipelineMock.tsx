// Pipeline tab mock — uses the same lo-table classes as the real LoanOS product.
// Data is entirely synthetic. Status chip colors match the real product's palette.

const STATUS_STYLES: Record<string, string> = {
  'Pre-Approval': 'bg-sky-500/15 text-sky-400 border-sky-500/30',
  'Contract Rcvd': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  'Processing': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  'UW Review': 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  'CTC': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'Funded': 'bg-primary/15 text-primary border-primary/30',
}

type Row = {
  borrower: string
  address: string
  status: string
  lockExp: string
  amount: string
}

const ROWS: Row[] = [
  { borrower: 'Jessica Thompson', address: '2847 Bee Cave Rd', status: 'CTC', lockExp: 'Apr 12', amount: '$485,000' },
  { borrower: 'Marcus & Elena Reyes', address: '1204 S Lamar Blvd', status: 'UW Review', lockExp: 'Apr 18', amount: '$612,000' },
  { borrower: 'David Park', address: '4501 Balcones Dr', status: 'Contract Rcvd', lockExp: '—', amount: '$389,000' },
  { borrower: 'Sarah Mitchell', address: '912 E 6th St #304', status: 'Processing', lockExp: 'Apr 22', amount: '$275,000' },
  { borrower: 'Camilla Davis', address: '3301 Steck Ave', status: 'Pre-Approval', lockExp: '—', amount: '$425,000' },
  { borrower: 'James Okonkwo', address: '7788 McNeil Dr', status: 'Funded', lockExp: '—', amount: '$550,000' },
  { borrower: 'Rachel Kim', address: '610 W Mary St', status: 'UW Review', lockExp: 'Apr 20', amount: '$338,000' },
]

export default function PipelineMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface2)] shadow-xl shadow-black/30">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground">
            Loans in Process
          </span>
          <span className="rounded-full bg-primary/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">
            {ROWS.length}
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="lo-table w-full">
          <thead>
            <tr>
              <th className="text-left">Borrower</th>
              <th className="text-left">Property</th>
              <th className="text-left">Status</th>
              <th className="text-left">Lock Exp</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.borrower}>
                <td className="whitespace-nowrap font-medium text-foreground">{r.borrower}</td>
                <td className="whitespace-nowrap text-muted-foreground">{r.address}</td>
                <td>
                  <span
                    className={`inline-block whitespace-nowrap rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${STATUS_STYLES[r.status] ?? ''}`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className={`whitespace-nowrap ${r.lockExp === '—' ? 'text-muted-foreground/50' : 'text-foreground'}`}>
                  {r.lockExp}
                </td>
                <td className="whitespace-nowrap text-right font-medium text-foreground">{r.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
