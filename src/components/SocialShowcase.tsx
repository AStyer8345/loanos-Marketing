// Social showcase — tells the two-mode story for LoanOS's social media system:
//
//   Mode A (left): Carousel Builder — "prompt-to-post"
//     Single textarea prompt → AI generates a multi-slide carousel → user edits inline
//
//   Mode B (right): Brand-voice drafts with approval queue
//     System drafts posts in your voice automatically → you approve / edit / reject
//     Every edit is captured and fed back into the next generation (learning loop)
//
// Footer strip: "It remembers every edit" — the voice_feedback learning loop,
// honestly framed as in-context learning, not ML retraining.

// ─── Mode A — Carousel Builder ──────────────────────────────────────────

const CAROUSEL_SLIDES = [
  {
    n: '01',
    title: 'Rates dropped 0.375%.',
    body: 'If you locked 60 days ago, here\u2019s what a float-down looks like.',
  },
  {
    n: '02',
    title: 'The math on a $450k loan.',
    body: '$2,957/mo → $2,852/mo. $105/mo. $37,800 over 30 years.',
  },
  {
    n: '03',
    title: 'Should you refi now?',
    body: 'Break-even in 14 months if closing costs run $3,200. Worth a conversation.',
  },
  {
    n: '04',
    title: 'DM me \u201cfloat\u201d.',
    body: 'I\u2019ll run your exact numbers in 15 minutes. No pitch.',
  },
]

function CarouselBuilder() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface2)] px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/70" />
          Carousel Builder
        </div>
        <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-primary">
          Prompt → Post
        </span>
      </div>

      {/* Prompt input */}
      <div className="border-b border-[var(--border)] p-4">
        <div className="mb-1.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60">
          Your prompt
        </div>
        <div className="rounded border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-xs leading-relaxed text-foreground">
          Make a 4-slide Instagram carousel about today&apos;s rate drop and a
          float-down offer. Conversational, not salesy.
        </div>
        <div className="mt-2 flex items-center justify-end gap-1.5 font-mono text-[10px]">
          <span className="text-muted-foreground/70">↳</span>
          <span className="text-primary">Generating 4 slides…</span>
        </div>
      </div>

      {/* Slide thumbnails */}
      <div className="flex-1 p-4">
        <div className="mb-3 font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60">
          Drafted slides · click any to edit
        </div>
        <div className="grid grid-cols-2 gap-2">
          {CAROUSEL_SLIDES.map((slide) => (
            <div
              key={slide.n}
              className="group rounded border border-[var(--border)] bg-[var(--surface2)] p-2.5 transition-colors hover:border-primary/50"
            >
              <div className="mb-1 flex items-center justify-between font-mono text-[8px] uppercase tracking-wider">
                <span className="text-primary">Slide {slide.n}</span>
                <span className="text-muted-foreground/60">Edit</span>
              </div>
              <div className="mb-0.5 line-clamp-1 text-[11px] font-bold text-foreground">
                {slide.title}
              </div>
              <div className="line-clamp-2 text-[10px] leading-snug text-muted-foreground">
                {slide.body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer action */}
      <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--surface2)] px-4 py-2.5">
        <div className="font-mono text-[10px] text-muted-foreground/70">
          4 slides · voice: Adam
        </div>
        <span className="rounded bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
          Push to queue
        </span>
      </div>
    </div>
  )
}

// ─── Mode B — Approval Queue ────────────────────────────────────────────

type QueueItem = {
  platform: 'Instagram' | 'LinkedIn' | 'Facebook' | 'GBP'
  title: string
  snippet: string
  status: 'awaiting' | 'edited' | 'approved'
}

const QUEUE_ITEMS: QueueItem[] = [
  {
    platform: 'LinkedIn',
    title: 'Rates dropped. Here\u2019s who should care.',
    snippet: 'Three borrower profiles who can save $100+/mo by refinancing right now. If you\u2019re in group two, the math is wild...',
    status: 'awaiting',
  },
  {
    platform: 'Instagram',
    title: 'The hardest part of buying isn\u2019t the down payment.',
    snippet: 'It\u2019s the 47 other decisions no one warns you about. Here are the 5 that actually matter...',
    status: 'edited',
  },
  {
    platform: 'GBP',
    title: 'Just closed in Austin — congrats to the Martinez family!',
    snippet: 'First home, 5.875% fixed, closed on time despite the appraisal gap. This is why you hire a broker who knows the market...',
    status: 'approved',
  },
]

const PLATFORM_COLORS: Record<QueueItem['platform'], string> = {
  Instagram: 'text-pink-400',
  LinkedIn: 'text-sky-400',
  Facebook: 'text-blue-400',
  GBP: 'text-emerald-400',
}

const STATUS_STYLES: Record<QueueItem['status'], { label: string; cls: string }> = {
  awaiting: {
    label: 'Awaiting',
    cls: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
  },
  edited: {
    label: 'Edited',
    cls: 'border-primary/40 bg-primary/10 text-primary',
  },
  approved: {
    label: 'Approved',
    cls: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
  },
}

function ApprovalQueue() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface2)] px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/70" />
          Approval Queue
        </div>
        <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-primary">
          Voice → Draft
        </span>
      </div>

      {/* Auto-drafted context strip */}
      <div className="border-b border-[var(--border)] bg-[var(--surface2)]/60 px-4 py-2.5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-muted-foreground/80">
            Auto-drafted from your voice guide · 3 posts ready
          </span>
          <span className="text-primary">Today 06:00</span>
        </div>
      </div>

      {/* Queue list */}
      <div className="flex-1 divide-y divide-[var(--border)]">
        {QUEUE_ITEMS.map((item, i) => {
          const status = STATUS_STYLES[item.status]
          return (
            <div key={i} className="px-4 py-3">
              <div className="mb-1.5 flex items-center justify-between">
                <div className={`font-mono text-[9px] font-semibold uppercase tracking-wider ${PLATFORM_COLORS[item.platform]}`}>
                  {item.platform}
                </div>
                <span className={`rounded border px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wider ${status.cls}`}>
                  {status.label}
                </span>
              </div>
              <div className="mb-0.5 text-[12px] font-bold leading-tight text-foreground">
                {item.title}
              </div>
              <div className="line-clamp-2 text-[11px] leading-snug text-muted-foreground">
                {item.snippet}
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer action */}
      <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--surface2)] px-4 py-2.5">
        <div className="font-mono text-[10px] text-muted-foreground/70">
          Publer · 4 platforms
        </div>
        <div className="flex gap-1.5">
          <span className="rounded border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-[10px] font-semibold text-foreground">
            Edit
          </span>
          <span className="rounded bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
            Approve all
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── Main ───────────────────────────────────────────────────────────────

export default function SocialShowcase() {
  return (
    <div>
      {/* Two modes side-by-side */}
      <div className="grid gap-4 md:grid-cols-2">
        <CarouselBuilder />
        <ApprovalQueue />
      </div>

      {/* Learning loop footer strip */}
      <div className="mt-6 rounded-lg border border-primary/20 bg-primary/[0.04] px-5 py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
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
              <path d="M12 2v4" />
              <path d="M12 18v4" />
              <path d="M4.93 4.93l2.83 2.83" />
              <path d="M16.24 16.24l2.83 2.83" />
              <path d="M2 12h4" />
              <path d="M18 12h4" />
              <path d="M4.93 19.07l2.83-2.83" />
              <path d="M16.24 7.76l2.83-2.83" />
            </svg>
            <div>
              <div className="text-sm font-semibold text-foreground">
                It remembers every edit.
              </div>
              <div className="text-xs text-muted-foreground">
                Every time you rewrite an opening line or cut a cliché, the system captures the change and feeds it into the next draft. Not fine-tuning — in-context learning that compounds.
              </div>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-primary/80 md:self-center">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--primary)]" />
            Voice · Edits · Reposts
          </div>
        </div>
      </div>
    </div>
  )
}
