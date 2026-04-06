// Client Comms tab mock — milestone timeline + AI-drafted email preview.
// Shows how LoanOS auto-drafts milestone emails in the LO's voice.

const MILESTONES = [
  { label: 'Application', done: true },
  { label: 'Pre-Approval', done: true },
  { label: 'Contract', done: true },
  { label: 'UW Submit', done: true },
  { label: 'CTC', active: true },
  { label: 'Funding', done: false },
]

export default function CommsMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface2)] shadow-xl shadow-black/30">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2.5">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground">
          Marcus & Elena Reyes — Milestone Comms
        </span>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-400 border border-emerald-500/30">
          Auto-draft
        </span>
      </div>

      {/* Milestone progress bar */}
      <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
        <div className="flex items-center gap-1">
          {MILESTONES.map((m, i) => (
            <div key={m.label} className="flex items-center gap-1">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold ${
                    m.done
                      ? 'bg-primary/20 text-primary'
                      : 'active' in m
                        ? 'bg-primary text-primary-foreground shadow-[0_0_8px_var(--primary)]'
                        : 'bg-[var(--border)] text-muted-foreground/50'
                  }`}
                >
                  {m.done ? '✓' : i + 1}
                </div>
                <span className={`mt-1 text-[8px] uppercase tracking-wider ${
                  m.done || 'active' in m ? 'text-foreground' : 'text-muted-foreground/50'
                }`}>
                  {m.label}
                </span>
              </div>
              {i < MILESTONES.length - 1 && (
                <div className={`mx-0.5 mt-[-12px] h-px w-6 lg:w-8 ${m.done ? 'bg-primary/40' : 'bg-[var(--border)]'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Party actions strip */}
      <div className="flex flex-wrap gap-2 border-b border-[var(--border)] bg-[var(--surface2)] px-4 py-2.5">
        {[
          { label: 'Email all parties', icon: '✉' },
          { label: 'Text borrower', icon: '💬' },
          { label: 'Text realtor', icon: '💬' },
          { label: 'Email title co', icon: '✉' },
        ].map((a) => (
          <span
            key={a.label}
            className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] bg-[var(--bg)] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground"
          >
            <span className="text-[11px]">{a.icon}</span>
            {a.label}
          </span>
        ))}
      </div>

      {/* CD email preview */}
      <div className="p-4">
        <div className="rounded-md border border-[var(--border)] bg-[var(--bg)]">
          {/* Email header */}
          <div className="border-b border-[var(--border)] px-4 py-2.5 font-mono text-[11px]">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">
                To: <span className="text-foreground">marcus.reyes@email.com</span>
              </span>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-primary">
                AI Draft
              </span>
            </div>
            <div className="mt-1 text-muted-foreground">
              Subject: <span className="text-foreground">Closing Disclosure — everything you need for Thursday</span>
            </div>
          </div>

          {/* Email body */}
          <div className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            <p>Hi Marcus and Elena,</p>
            <p className="mt-2">
              Great news — your Closing Disclosure is finalized. Here&apos;s everything you need to know before your closing on Thursday, April 17, 2026.
            </p>

            {/* Final numbers */}
            <div className="mt-3 border-t border-b border-[var(--border)] py-2">
              <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground">Final Numbers</div>
              <div className="space-y-0.5 font-mono text-[11px]">
                <div>Cash to Close: <span className="font-semibold text-foreground">$28,415.00</span></div>
                <div>Closing Date: <span className="font-semibold text-foreground">Thursday, April 17, 2026</span></div>
                <div>First Payment Due: <span className="font-semibold text-foreground">June 1, 2026</span></div>
                <div>Monthly Payment (P&amp;I): <span className="font-semibold text-foreground">$3,842.16</span></div>
              </div>
            </div>

            {/* Wire instructions */}
            <div className="mt-3 border-b border-[var(--border)] pb-2">
              <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground">Wire Instructions — Read This</div>
              <p className="text-[11px]">
                Funds must be sent via wire transfer. Wire is strongly preferred by the title company and ensures same-day funding. If wire is not possible, a cashier&apos;s check made payable to the title company is acceptable — contact us first.
              </p>
              {/* Wire fraud warning */}
              <div className="mt-2 rounded border-l-2 border-amber-500 bg-amber-500/10 px-3 py-2 text-[10px]">
                <span className="font-semibold text-amber-400">⚠ WIRE FRAUD WARNING:</span>{' '}
                <span className="text-muted-foreground">
                  Wire fraud is common in real estate transactions. Before sending any wire, call the title company directly to verbally confirm the instructions. Do not rely solely on emailed wire instructions — even if they appear to come from us or the title company.
                </span>
              </div>
            </div>

            {/* Title company info */}
            <div className="mt-2 font-mono text-[10px]">
              <div>Title Company: <span className="font-semibold text-foreground">Capital Title</span></div>
              <div>Contact: <span className="text-foreground">Sarah Jensen</span></div>
              <div>Phone: <span className="text-foreground">(512) 555-0142</span></div>
            </div>

            <p className="mt-3 text-[10px] italic text-muted-foreground/60">
              Drafted by LoanOS · matches your voice from 47 approved emails
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
