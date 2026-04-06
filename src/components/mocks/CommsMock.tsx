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

      {/* Email draft preview */}
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
              Subject: <span className="text-foreground">Clear to close — here&apos;s what happens next</span>
            </div>
          </div>

          {/* Email body */}
          <div className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            <p>Marcus and Elena,</p>
            <p className="mt-2">
              Great news — your file just got the clear to close. Everything checked out with underwriting and we&apos;re ready to schedule your closing on 1204 S Lamar.
            </p>
            <p className="mt-2">
              Here&apos;s what happens between now and the closing table:
            </p>
            <ul className="mt-2 space-y-1 pl-4">
              <li className="list-disc">Final CD comes out tomorrow — you&apos;ll have 3 days to review</li>
              <li className="list-disc">Title company will reach out to schedule signing</li>
              <li className="list-disc">Wire instructions come from the title company only — never from me by email</li>
            </ul>
            <p className="mt-3 text-[10px] italic text-muted-foreground/60">
              Drafted by LoanOS · matches your voice from 47 approved emails
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
