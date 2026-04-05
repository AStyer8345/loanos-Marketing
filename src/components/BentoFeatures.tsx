// Asymmetric bento grid for the "Why LoanOS" section.
// Replaces the 4 identical numbered cards with 5 different card types:
//  - One hero card with a mini bar chart
//  - One stat card with a large number
//  - One quote/identity card
//  - Two standard narrow cards
// All cards share border + surface but differ in content density + layout.

export default function BentoFeatures() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-6 md:grid-rows-[auto_auto]">
      {/* 1 — Hero card with mini chart (spans 4 cols / 2 rows on md+) */}
      <div className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 md:col-span-4 md:row-span-2">
        <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-primary">
          <span className="inline-block h-1 w-6 bg-primary" />
          Core
        </div>
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
          Built in the field.
        </h3>
        <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground">
          Every feature came from a live file — pre-approvals chased at 9pm,
          CDs rushed, realtors ghosted, follow-ups forgotten. LoanOS is the
          software I wrote for the job I still do.
        </p>

        {/* Mini "loans closed" trend — pure CSS bars */}
        <div className="mt-6 border-t border-[var(--border)] pt-5">
          <div className="mb-2 flex items-end justify-between">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Loans shipped · author&apos;s pipeline
            </div>
            <div className="font-mono text-sm font-bold text-foreground">
              1,000<span className="text-primary">+</span>
            </div>
          </div>
          <div className="flex h-16 items-end gap-1.5">
            {[35, 48, 42, 61, 55, 72, 68, 81, 74, 89, 92, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-primary/50 transition-all group-hover:bg-primary"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-1.5 flex justify-between font-mono text-[9px] text-muted-foreground/60">
            <span>2017</span>
            <span>TODAY</span>
          </div>
        </div>
      </div>

      {/* 2 — Big stat card */}
      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 md:col-span-2 md:row-span-1">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Admin replaced
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-sans text-5xl font-bold tracking-tight text-primary">$5k</span>
          <span className="font-mono text-xs text-muted-foreground">/mo</span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Replaces the part-time admin you were about to hire. AI drafts the
          emails, chases the docs, runs the brief.
        </p>
      </div>

      {/* 3 — Quote / identity card */}
      <div className="rounded-lg border border-primary/30 bg-primary/[0.04] p-6 md:col-span-2 md:row-span-1">
        <svg
          aria-hidden
          className="mb-3 h-6 w-6 text-primary/60"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9.5 7A4.5 4.5 0 005 11.5v6h6v-6H7.5a2 2 0 012-2V7zm9 0A4.5 4.5 0 0014 11.5v6h6v-6h-3.5a2 2 0 012-2V7z" />
        </svg>
        <p className="mb-3 text-sm font-semibold leading-snug text-foreground">
          Built by an LO. For LOs.
        </p>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Not interviewed. Not guessed at. Written by someone still closing
          loans every week.
        </p>
      </div>

      {/* 4 — Stack replacement card */}
      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 md:col-span-3">
        <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-primary">
          <span className="inline-block h-1 w-6 bg-primary" />
          Consolidation
        </div>
        <h3 className="mb-2 text-lg font-bold text-foreground">
          Replaces your stack.
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          One system for the six tools that don&apos;t talk to each other.
        </p>
        <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
          {['Jungo', 'Sticky notes', 'Excel', 'Bonzo', 'Surefire', 'Google Sheets'].map((t) => (
            <span
              key={t}
              className="rounded border border-[var(--border)] bg-[var(--surface2)] px-2 py-0.5 text-muted-foreground line-through decoration-[var(--red)]/70 decoration-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 5 — Compounding card */}
      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 md:col-span-3">
        <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-primary">
          <span className="inline-block h-1 w-6 bg-primary" />
          Compounds
        </div>
        <h3 className="mb-2 text-lg font-bold text-foreground">
          Gets smarter the more you use it.
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          LoanOS learns your pipeline, your realtors, your voice. The longer
          you run it, the less you have to.
        </p>
        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
          <span>Day 1</span>
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--border)] via-primary/60 to-primary" />
          <span className="text-primary">Month 6</span>
        </div>
      </div>
    </div>
  )
}
