// Animated terminal/log stream for the hero.
// Replaces the generic "fake browser chrome" placeholder with something that
// matches LoanOS's tactical aesthetic. Pure CSS animation — no client JS.

const LOG_LINES: { time: string; tag: string; tone: 'ok' | 'info' | 'warn'; msg: string }[] = [
  { time: '08:14:02', tag: 'arive.sync',        tone: 'ok',   msg: 'webhook → 200 · loan 4471 stage=APPROVED' },
  { time: '08:14:03', tag: 'pipeline.update',   tone: 'info', msg: 'moved JENKINS to "clear to close"' },
  { time: '08:14:05', tag: 'email.draft',       tone: 'info', msg: 'CD letter → jenkins@... queued for review' },
  { time: '08:14:11', tag: 'realtor.touchpoint',tone: 'ok',   msg: 'm.rivera ← 30-day check-in sent' },
  { time: '08:14:14', tag: 'brief.ai',          tone: 'info', msg: 'morning brief rendered · 4 priorities' },
  { time: '08:14:19', tag: 'refi.watch',        tone: 'warn', msg: '2 past clients crossed rate threshold' },
]

const TONE: Record<'ok' | 'info' | 'warn', string> = {
  ok:   'text-[var(--green)]',
  info: 'text-primary',
  warn: 'text-[color:var(--red)]',
}

export default function HeroTerminal() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-2xl bg-primary/[0.06] blur-2xl"
      />

      <div className="relative rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/20">
        {/* Terminal header — stripped of traffic lights */}
        <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2.5">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--green)] shadow-[0_0_6px_var(--green)]" />
            loanos · live pipeline
          </div>
          <div className="font-mono text-[10px] text-muted-foreground/70">tue 08:14 CT</div>
        </div>

        {/* Stream body */}
        <div className="relative h-[320px] overflow-hidden px-4 py-3 font-mono text-[11px] leading-relaxed">
          {LOG_LINES.map((line, i) => (
            <div
              key={i}
              className="log-line flex items-start gap-3 py-1"
              style={{ animationDelay: `${i * 1.3}s` }}
            >
              <span className="shrink-0 text-muted-foreground/60">{line.time}</span>
              <span className={`shrink-0 ${TONE[line.tone]}`}>[{line.tag}]</span>
              <span className="truncate text-foreground/90">{line.msg}</span>
            </div>
          ))}

          {/* Prompt line */}
          <div className="mt-3 flex items-center gap-2 border-t border-[var(--border)] pt-3 text-foreground">
            <span className="text-primary">▸</span>
            <span>loanos</span>
            <span className="text-muted-foreground">//</span>
            <span className="text-muted-foreground">awaiting next event</span>
            <span className="caret-blink ml-0.5 inline-block h-3 w-1.5 bg-primary align-middle" />
          </div>

          {/* Fade out bottom */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--surface)] to-transparent"
          />
        </div>

        {/* Footer stat strip */}
        <div className="grid grid-cols-3 border-t border-[var(--border)] font-mono text-[10px] uppercase tracking-wider">
          <div className="border-r border-[var(--border)] px-4 py-2.5">
            <div className="text-muted-foreground/70">Loans live</div>
            <div className="mt-0.5 text-sm font-bold text-foreground">27</div>
          </div>
          <div className="border-r border-[var(--border)] px-4 py-2.5">
            <div className="text-muted-foreground/70">Actions today</div>
            <div className="mt-0.5 text-sm font-bold text-primary">14</div>
          </div>
          <div className="px-4 py-2.5">
            <div className="text-muted-foreground/70">Auto-drafted</div>
            <div className="mt-0.5 text-sm font-bold text-[var(--green)]">+9</div>
          </div>
        </div>
      </div>
    </div>
  )
}
