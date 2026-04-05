// Final CTA band — grid-pattern background with radial fade mask for depth
// instead of the flat primary/5 wash. Single focused CTA pair.

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      {/* Grid pattern with radial fade mask */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-pattern mask-radial-fade opacity-60"
      />
      {/* Subtle gold wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-gradient-radial from-primary/10 via-transparent to-transparent"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(164,133,30,0.10), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 py-28 text-center md:px-6">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
          Launching May 1, 2026
        </div>

        <h2 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
          Stop managing your pipeline
          <br />
          <span className="text-primary">in five tabs.</span>
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-base text-muted-foreground md:text-lg">
          Join the LoanOS waitlist. Founding-member pricing. Direct line to the
          builder. No sales calls unless you ask.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
          >
            Join the waitlist
          </a>
          <a
            href="https://calendly.com/adamstyer/15minutes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)]/60 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
          >
            Book a demo →
          </a>
        </div>
      </div>
    </section>
  )
}
