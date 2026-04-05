// Scenarios showcase — mocks up the public /share/[token] page the borrower sees.
// Three option cards side-by-side (30yr / 7-1 ARM / Buydown), each with payment,
// 5-year interest, cash to close, and a subtle gold accent on the highlighted card.
// Below: a strip showing "this link lives at loanos.com/share/<token> — no login".
//
// This is intentionally NOT a fake browser chrome (we stripped those in v2).
// Instead it's a polished card surface that reads like the real product output.

type Option = {
  name: string
  subtitle: string
  rate: string
  apr: string
  payment: string
  fiveYrInterest: string
  cashToClose: string
  highlight?: boolean
  badge?: string
}

const OPTIONS: Option[] = [
  {
    name: '30-Year Fixed',
    subtitle: 'Conventional',
    rate: '6.875%',
    apr: '6.981%',
    payment: '$2,957',
    fiveYrInterest: '$148,420',
    cashToClose: '$52,100',
  },
  {
    name: '30-Year Fixed',
    subtitle: '2-1 Temporary Buydown',
    rate: '4.875%',
    apr: '6.981%',
    payment: '$2,338',
    fiveYrInterest: '$132,980',
    cashToClose: '$52,100',
    highlight: true,
    badge: 'Lowest 5-yr cost',
  },
  {
    name: '7/1 ARM',
    subtitle: 'Conforming',
    rate: '6.375%',
    apr: '6.712%',
    payment: '$2,806',
    fiveYrInterest: '$139,615',
    cashToClose: '$52,100',
  },
]

function OptionTile({ option }: { option: Option }) {
  const border = option.highlight
    ? 'border-primary/60 shadow-[0_0_0_1px_var(--primary)] bg-gradient-to-b from-primary/[0.06] to-transparent'
    : 'border-[var(--border)] bg-[var(--surface)]'

  return (
    <div className={`relative flex flex-col rounded-lg border p-5 ${border}`}>
      {option.badge && (
        <div className="absolute -top-2.5 left-4 rounded border border-primary/50 bg-[var(--bg)] px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-primary">
          {option.badge}
        </div>
      )}

      <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {option.subtitle}
      </div>
      <div className="mb-4 text-base font-bold text-foreground">
        {option.name}
      </div>

      <div className="mb-4 flex items-baseline gap-1.5">
        <span className="font-sans text-3xl font-bold tracking-tight text-foreground">
          {option.payment}
        </span>
        <span className="font-mono text-xs text-muted-foreground">/mo</span>
      </div>

      <div className="space-y-2 border-t border-[var(--border)] pt-3 font-mono text-[11px]">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Rate</span>
          <span className="font-semibold text-foreground">{option.rate}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">APR</span>
          <span className="text-foreground">{option.apr}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">5-yr interest</span>
          <span className="text-foreground">{option.fiveYrInterest}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Cash to close</span>
          <span className="text-foreground">{option.cashToClose}</span>
        </div>
      </div>
    </div>
  )
}

export default function ScenariosShowcase() {
  return (
    <div>
      {/* Fake URL bar — tactical, not a browser chrome */}
      <div className="mb-4 flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 font-mono text-[11px]">
        <svg
          aria-hidden
          className="h-3.5 w-3.5 shrink-0 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span className="text-muted-foreground">loanos.com/share/</span>
        <span className="text-foreground">b7c2f4a9e1</span>
        <span className="ml-auto rounded border border-primary/40 bg-primary/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-primary">
          Public · No login
        </span>
      </div>

      {/* Share page card */}
      <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-6 md:p-8">
        {/* Borrower header */}
        <div className="mb-6 flex flex-col items-start justify-between gap-3 border-b border-[var(--border)] pb-5 md:flex-row md:items-center">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Scenario for
            </div>
            <div className="mt-0.5 text-lg font-bold text-foreground">
              The Martinez Family · Austin, TX
            </div>
            <div className="mt-0.5 font-mono text-[11px] text-muted-foreground">
              $485,000 purchase · 20% down · prepared 2026-04-05
            </div>
          </div>
          <div className="flex items-center gap-2 rounded border border-primary/30 bg-[var(--surface)] px-3 py-1.5">
            <div className="h-6 w-6 rounded-full bg-primary/20" />
            <div className="leading-tight">
              <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                Your LO
              </div>
              <div className="text-xs font-semibold text-foreground">Adam Styer</div>
            </div>
          </div>
        </div>

        {/* Three options */}
        <div className="grid gap-4 md:grid-cols-3">
          {OPTIONS.map((opt, i) => (
            <OptionTile key={i} option={opt} />
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded border border-[var(--border)] bg-[var(--surface)] px-4 py-3 md:flex-row md:items-center">
          <div className="text-sm text-muted-foreground">
            Have questions? Book a call or apply directly from this page.
          </div>
          <div className="flex gap-2">
            <span className="rounded bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
              Apply
            </span>
            <span className="rounded border border-[var(--border)] bg-[var(--surface2)] px-3 py-1.5 text-xs font-semibold text-foreground">
              Book a call
            </span>
          </div>
        </div>
      </div>

      {/* SEO angle footer */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-primary">
            01 · Replaces
          </div>
          <div className="text-sm font-semibold text-foreground">Mortgage Coach</div>
          <div className="mt-1 text-xs text-muted-foreground">
            No separate app, no separate login, no $99/mo seat.
          </div>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-primary">
            02 · Shareable
          </div>
          <div className="text-sm font-semibold text-foreground">Token-based public link</div>
          <div className="mt-1 text-xs text-muted-foreground">
            Borrower and realtor open it on any device. Interactive, not a dead PDF.
          </div>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-primary">
            03 · SEO asset
          </div>
          <div className="text-sm font-semibold text-foreground">Every link is a landing page</div>
          <div className="mt-1 text-xs text-muted-foreground">
            Branded to you, indexable by Google. Scenarios become an asset, not an email attachment.
          </div>
        </div>
      </div>
    </div>
  )
}
