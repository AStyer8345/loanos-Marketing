// Chatbot showcase — three example exchanges illustrating LoanOS's
// LO-trained assistant. Each card is a distinct prompt/answer pair covering:
//   1. Lender panel lookup (live Supabase data)
//   2. Product guideline search (NotebookLM knowledge base)
//   3. Self-employment income calculation (deterministic tool)
//
// The footer strip tells the "learns from your inbox daily" story —
// the n8n auto-ingest workflow that rewrites the lender database every morning.
// All content is server-rendered static; no client JS.

type Exchange = {
  tag: string
  badge: string
  prompt: string
  answer: React.ReactNode
}

const EXCHANGES: Exchange[] = [
  {
    tag: 'query_lender_database',
    badge: 'Lenders',
    prompt: 'Which of my lenders do DSCR 1-4 and who\u2019s the AE?',
    answer: (
      <div className="space-y-2">
        <p className="text-foreground">
          Three lenders on your panel offer DSCR 1-4:
        </p>
        <ul className="space-y-1.5 pl-0">
          <li className="flex items-start gap-2">
            <span className="mt-[5px] inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span><span className="font-semibold text-foreground">Deephaven</span> — AE: Marcus Lee · 512-555-0101</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-[5px] inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span><span className="font-semibold text-foreground">PennyMac</span> — AE: Jillian Sorenson · 737-555-0144</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-[5px] inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span><span className="font-semibold text-foreground">The Loan Store</span> — AE: Ben Ortiz · 512-555-0189</span>
          </li>
        </ul>
        <p className="pt-1 text-xs text-muted-foreground/80">
          Want me to draft an email to one of them?
        </p>
      </div>
    ),
  },
  {
    tag: 'query_mortgage_knowledge_base',
    badge: 'Guidelines',
    prompt: 'What\u2019s Deephaven\u2019s minimum FICO for a HELOC on an investment property?',
    answer: (
      <div className="space-y-2">
        <p className="text-foreground">
          Deephaven Digital HELOC on a non-owner-occupied property:
        </p>
        <div className="rounded border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 font-mono text-[12px] text-foreground">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Min FICO</span>
            <span className="font-semibold">680</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Max CLTV</span>
            <span className="font-semibold">75%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Max loan</span>
            <span className="font-semibold">$500,000</span>
          </div>
        </div>
        <p className="pt-1 text-xs text-muted-foreground/80">
          Source: Deephaven Product Guide, updated 2026-04-02
        </p>
      </div>
    ),
  },
  {
    tag: 'calculate_self_employment_income',
    badge: 'Calc',
    prompt: '2023 Sch C: net profit $142k, depreciation $8k, depletion $0, meals $3,400. 2024 net $168k, dep $9,500, meals $4,100. Qualifying income?',
    answer: (
      <div className="space-y-2">
        <p className="text-foreground">
          Schedule C method, 2-year average:
        </p>
        <div className="rounded border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 font-mono text-[12px]">
          <div className="flex justify-between text-muted-foreground">
            <span>2023 adjusted</span>
            <span className="text-foreground">$151,700</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>2024 adjusted</span>
            <span className="text-foreground">$179,550</span>
          </div>
          <div className="mt-1 flex justify-between border-t border-[var(--border)] pt-1.5">
            <span className="text-muted-foreground">24-mo avg</span>
            <span className="font-bold text-primary">$13,802 / mo</span>
          </div>
        </div>
        <p className="pt-1 text-xs text-muted-foreground/80">
          Meals added back at 50% (2018+). Full breakdown in draft.
        </p>
      </div>
    ),
  },
  {
    tag: 'draft_email_in_your_voice',
    badge: 'Comms',
    prompt: 'Draft a CTC email for the Reyes file. Closing is next Thursday at Capital Title.',
    answer: (
      <div className="space-y-2">
        <p className="text-foreground">
          Here&apos;s a draft in your voice:
        </p>
        <div className="rounded border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-[12px] leading-relaxed">
          <p className="italic text-muted-foreground">
            &ldquo;Marcus and Elena — great news. Your file just got the clear to close. Everything checked out and we&apos;re set for next Thursday at Capital Title. The CD comes out tomorrow so you&apos;ll have three days to review before signing. Wire instructions come from the title company only — never from me by email.&rdquo;
          </p>
        </div>
        <p className="pt-1 text-xs text-muted-foreground/80">
          Matched to your voice guide from 47 approved emails. Edit or send?
        </p>
      </div>
    ),
  },
  {
    tag: 'sales_coaching',
    badge: 'Coach',
    prompt: 'My borrower just found out their appraisal came in $30K low. They\u2019re panicking. How do I handle this call?',
    answer: (
      <div className="space-y-2">
        <p className="text-foreground">
          Three-step framework for this call:
        </p>
        <div className="space-y-1.5">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-[9px] font-bold text-primary">1</span>
            <span><span className="font-semibold text-foreground">Validate first.</span> &ldquo;I know this isn&apos;t what you wanted to hear.&rdquo; Don&apos;t lead with solutions.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-[9px] font-bold text-primary">2</span>
            <span><span className="font-semibold text-foreground">Lay out the options.</span> Renegotiate price, bring cash to cover the gap, dispute with comps, or walk.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-[9px] font-bold text-primary">3</span>
            <span><span className="font-semibold text-foreground">Give a recommendation.</span> Based on market, your best move is asking the seller to split the difference. Want me to draft the email to the realtor?</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    tag: 'mass_update_pipeline',
    badge: 'Bulk',
    prompt: 'Rates dropped today. Text all my realtors with active pipeline deals and let them know.',
    answer: (
      <div className="space-y-2">
        <p className="text-foreground">
          Found 6 realtors with active pipeline deals:
        </p>
        <div className="rounded border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 font-mono text-[12px]">
          <div className="flex justify-between text-muted-foreground">
            <span>Texts drafted</span>
            <span className="text-foreground">6</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Active deals referenced</span>
            <span className="text-foreground">9</span>
          </div>
          <div className="mt-1 flex justify-between border-t border-[var(--border)] pt-1.5">
            <span className="text-muted-foreground">Status</span>
            <span className="font-semibold text-amber-400">Queued — review &amp; send</span>
          </div>
        </div>
        <p className="pt-1 text-xs text-muted-foreground/80">
          Each text is personalized with the borrower name and deal status. Preview all 6?
        </p>
      </div>
    ),
  },
]

function ChatCard({ exchange }: { exchange: Exchange }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
      {/* Tool tag header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface2)] px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/70" />
          {exchange.tag}
        </div>
        <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-primary">
          {exchange.badge}
        </span>
      </div>

      {/* User prompt bubble */}
      <div className="border-b border-[var(--border)] px-4 py-4">
        <div className="mb-1.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60">
          You
        </div>
        <div className="text-sm leading-relaxed text-foreground">
          {exchange.prompt}
        </div>
      </div>

      {/* Assistant response */}
      <div className="flex-1 px-4 py-4">
        <div className="mb-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-primary">
          <span className="inline-block h-1 w-1 animate-pulse rounded-full bg-primary shadow-[0_0_6px_var(--primary)]" />
          LoanOS
        </div>
        <div className="text-sm leading-relaxed text-muted-foreground">
          {exchange.answer}
        </div>
      </div>
    </div>
  )
}

export default function ChatShowcase() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {EXCHANGES.map((ex) => (
          <ChatCard key={ex.tag} exchange={ex} />
        ))}
      </div>

      {/* Learning-loop footer strip */}
      <div className="mt-6 flex flex-col items-start gap-3 rounded-lg border border-primary/20 bg-primary/[0.04] px-5 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <svg
            aria-hidden
            className="h-5 w-5 shrink-0 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-3-6.7" />
            <path d="M21 3v6h-6" />
          </svg>
          <div>
            <div className="text-sm font-semibold text-foreground">
              Your broker panel, live.
            </div>
            <div className="text-xs text-muted-foreground">
              Every morning at 8am, LoanOS reads your lender emails and rewrites the knowledge base. You stop tracking guideline changes.
            </div>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-primary/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--primary)]" />
          13 lenders · 12 product guides · daily sync
        </div>
      </div>
    </div>
  )
}
