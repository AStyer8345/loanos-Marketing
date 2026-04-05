'use client'

// Tabbed feature showcase. Replaces the 4 alternating rows with fake browser
// chrome. One component, one interaction pattern, 4 tabs. The visual on the
// right is an empty/tactical placeholder card (per Adam: empty cards are fine
// until real demo screenshots exist) — but the placeholder is different per
// tab (stat grid, schema tree, timeline, data table row) so the right side
// doesn't feel like 4 copies of the same empty box.

import { useState } from 'react'

type Tab = {
  key: string
  tag: string
  title: string
  body: string
  bullets: string[]
  placeholder: 'pipeline' | 'email' | 'realtor' | 'postclose'
}

const TABS: Tab[] = [
  {
    key: 'pipeline',
    tag: 'Pipeline',
    title: 'Every loan, every stage, every next action — in one view.',
    body: 'Drag-and-drop pipeline with automatic Arive sync, milestone-based automations, and AI-surfaced next actions. The status board that replaces your spreadsheet.',
    bullets: ['Live Arive sync', 'Milestone automations', 'AI next-action queue'],
    placeholder: 'pipeline',
  },
  {
    key: 'comms',
    tag: 'Client Comms',
    title: 'Pre-approvals, CDs, and updates — written for you.',
    body: 'Milestone emails drafted by AI in your voice, sent automatically when the file hits the stage. You review and send. Or let it go on autopilot.',
    bullets: ['Pre-approval templates', 'CD + CTC emails', 'Branded scenario PDFs'],
    placeholder: 'email',
  },
  {
    key: 'realtor',
    tag: 'Realtor CRM',
    title: 'Track every referral source like they\u2019re your biggest client.',
    body: 'Automatic touchpoints after close, co-branded pre-approval letters, and a leaderboard of who\u2019s actually sending you deals. No more guessing who your top agents are.',
    bullets: ['Automatic touchpoints', 'Co-branded PAs', 'Partner leaderboard'],
    placeholder: 'realtor',
  },
  {
    key: 'postclose',
    tag: 'Post-close',
    title: 'Your clients don\u2019t forget you. Because LoanOS doesn\u2019t.',
    body: 'Birthday touches, closing anniversary notes, refi-watch alerts when rates drop. Every past client, every year, forever. Zero manual effort.',
    bullets: ['Birthday + anniversary', 'Refi-watch alerts', 'Review requests'],
    placeholder: 'postclose',
  },
]

export default function FeatureTabs() {
  const [active, setActive] = useState<string>(TABS[0].key)
  const current = TABS.find((t) => t.key === active) ?? TABS[0]

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
      {/* Tab rail */}
      <div
        role="tablist"
        aria-label="LoanOS features"
        className="flex gap-2 overflow-x-auto border-b border-[var(--border)] pb-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:border-b-0 lg:border-l lg:border-[var(--border)] lg:pb-0 lg:pl-0"
      >
        {TABS.map((t, i) => {
          const isActive = t.key === active
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(t.key)}
              className={[
                'group relative shrink-0 whitespace-nowrap text-left font-mono text-xs uppercase tracking-wider transition-colors',
                'px-3 py-2 lg:px-4 lg:py-3 lg:whitespace-normal',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground',
              ].join(' ')}
            >
              {/* Active indicator — bottom border on mobile, left border on desktop */}
              <span
                aria-hidden
                className={[
                  'absolute transition-all',
                  'inset-x-0 -bottom-px h-0.5',
                  'lg:inset-y-0 lg:-left-px lg:h-auto lg:w-0.5',
                  isActive ? 'bg-primary' : 'bg-transparent',
                ].join(' ')}
              />
              <span className="block text-[10px] text-muted-foreground/60 lg:mb-0.5">
                0{i + 1}
              </span>
              <span className={isActive ? 'font-semibold' : ''}>{t.tag}</span>
            </button>
          )
        })}
      </div>

      {/* Content panel */}
      <div
        role="tabpanel"
        aria-labelledby={current.key}
        className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center"
      >
        <div>
          <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {current.title}
          </h3>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            {current.body}
          </p>
          <ul className="space-y-2.5">
            {current.bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-foreground"
              >
                <span className="inline-block h-px w-5 bg-primary" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Per-tab placeholder — tactical, empty, different per tab */}
        <div className="relative">
          <TabPlaceholder kind={current.placeholder} />
        </div>
      </div>
    </div>
  )
}

function TabPlaceholder({ kind }: { kind: Tab['placeholder'] }) {
  const frame =
    'rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 font-mono text-[11px]'

  if (kind === 'pipeline') {
    const rows = [
      { name: 'JENKINS · 4471',   stage: 'CTC',       next: 'wire request',   tone: 'text-[var(--green)]' },
      { name: 'PATEL · 4468',     stage: 'DISCL',     next: 'send LE',        tone: 'text-primary' },
      { name: 'RAMOS · 4465',     stage: 'UW',        next: 'cond reply',     tone: 'text-primary' },
      { name: 'OKAFOR · 4459',    stage: 'APP',       next: 'docs requested', tone: 'text-muted-foreground' },
    ]
    return (
      <div className={frame}>
        <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
          <span>pipeline · live</span>
          <span className="text-[var(--green)]">● arive synced</span>
        </div>
        <div className="space-y-1">
          {rows.map((r) => (
            <div
              key={r.name}
              className="flex items-center justify-between border-b border-[var(--border)]/60 py-2 last:border-b-0"
            >
              <span className="text-foreground">{r.name}</span>
              <span className={`${r.tone} text-[10px] uppercase`}>{r.stage}</span>
              <span className="text-muted-foreground">{r.next}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (kind === 'email') {
    return (
      <div className={frame}>
        <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
          <span>draft · pre-approval</span>
          <span className="text-primary">● ai composed</span>
        </div>
        <div className="space-y-1 text-[10px]">
          <div className="flex gap-2"><span className="w-10 text-muted-foreground">to</span><span className="text-foreground">jenkins@email.com</span></div>
          <div className="flex gap-2"><span className="w-10 text-muted-foreground">subj</span><span className="text-foreground">You&apos;re pre-approved — next steps</span></div>
          <div className="my-2 h-px bg-[var(--border)]" />
        </div>
        <p className="text-[11px] leading-relaxed text-foreground/90">
          Hey Michelle — good news. You&apos;re officially pre-approved up to $485k.
          I pulled together three scenarios so you can see how the monthly moves
          with different down payments...
        </p>
        <div className="mt-3 flex items-center justify-end gap-2 text-[9px] uppercase tracking-wider">
          <span className="rounded border border-[var(--border)] px-2 py-0.5 text-muted-foreground">edit</span>
          <span className="rounded bg-primary px-2 py-0.5 text-primary-foreground">send</span>
        </div>
      </div>
    )
  }

  if (kind === 'realtor') {
    const agents = [
      { name: 'M. RIVERA',   deals: 9, bar: 100 },
      { name: 'S. CHEN',     deals: 6, bar: 66 },
      { name: 'J. GARCIA',   deals: 4, bar: 44 },
      { name: 'D. OKONKWO',  deals: 2, bar: 22 },
    ]
    return (
      <div className={frame}>
        <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
          <span>top agents · ytd</span>
          <span className="text-primary">● leaderboard</span>
        </div>
        <div className="space-y-2.5">
          {agents.map((a) => (
            <div key={a.name}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-foreground">{a.name}</span>
                <span className="text-muted-foreground">{a.deals} deals</span>
              </div>
              <div className="h-1 w-full bg-[var(--border)]">
                <div className="h-full bg-primary" style={{ width: `${a.bar}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // postclose
  const events = [
    { date: 'MAR 15', tag: 'BDAY',   text: 'Jenkins family · auto-send' },
    { date: 'MAR 18', tag: 'REFI',   text: '4 clients crossed threshold' },
    { date: 'MAR 22', tag: 'ANNIV',  text: 'Patel closing · 1 year' },
    { date: 'MAR 30', tag: 'REVIEW', text: 'Ramos · ask for referral' },
  ]
  return (
    <div className={frame}>
      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
        <span>post-close queue</span>
        <span className="text-primary">● auto</span>
      </div>
      <div className="relative">
        <div className="absolute left-[38px] top-1 bottom-1 w-px bg-[var(--border)]" />
        {events.map((e) => (
          <div key={e.date} className="relative flex items-center gap-3 py-2">
            <span className="w-11 text-[9px] text-muted-foreground">{e.date}</span>
            <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-primary ring-2 ring-[var(--surface)]" />
            <span className="inline-block w-14 text-[9px] uppercase text-primary">{e.tag}</span>
            <span className="text-foreground">{e.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
