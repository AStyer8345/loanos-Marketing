'use client'

// Tabbed feature showcase — 6 tabs, each rendering a native HTML mock component
// instead of PNG screenshots. Uses the same design tokens as the real LoanOS app.

import { type ReactNode, useState } from 'react'
import PipelineMock from '@/components/mocks/PipelineMock'
import CommsMock from '@/components/mocks/CommsMock'
import MarketingMock from '@/components/mocks/MarketingMock'
import DripMock from '@/components/mocks/DripMock'
import RealtorMock from '@/components/mocks/RealtorMock'
import PostCloseMock from '@/components/mocks/PostCloseMock'

type Tab = {
  key: string
  tag: string
  title: string
  body: string
  bullets: string[]
  panel: ReactNode
}

const TABS: Tab[] = [
  {
    key: 'pipeline',
    tag: 'Pipeline',
    title: 'Every loan, every stage, every next action — in one view.',
    body: 'Live pipeline with automatic Arive sync, milestone-based automations, and status chips that tell you what needs attention right now.',
    bullets: ['Live Arive sync', 'Milestone automations', 'AI next-action queue'],
    panel: <PipelineMock />,
  },
  {
    key: 'comms',
    tag: 'Client Comms',
    title: 'Pre-approvals, CDs, and updates — written for you.',
    body: 'Milestone emails drafted by AI in your voice, sent automatically when the file hits the stage. You review and send. Or let it go on autopilot.',
    bullets: ['Pre-approval emails', 'CD + CTC emails', 'Branded scenario links'],
    panel: <CommsMock />,
  },
  {
    key: 'marketing',
    tag: 'Rate Updates',
    title: 'Enter rates. Hit send. It writes everything.',
    body: 'Plug in today\u2019s numbers, pick your audience, and LoanOS generates a teaser email, a full blog post for your website, and social posts — all in your voice, all at once.',
    bullets: ['Teaser email + blog post', 'Auto-post to 4 platforms', 'Newsletter generator'],
    panel: <MarketingMock />,
  },
  {
    key: 'drip',
    tag: 'Drip Campaigns',
    title: 'Not templates. Prompts that draft like you.',
    body: 'Each drip step is an AI instruction — not a canned email. It uses your voice, your pipeline data, and the borrower\u2019s actual situation to draft something you\u2019d actually send.',
    bullets: ['Ghost referral sequences', 'Past-client retention', 'Realtor relationship nurture'],
    panel: <DripMock />,
  },
  {
    key: 'realtor',
    tag: 'Realtor CRM',
    title: 'Track every referral source like they\u2019re your biggest client.',
    body: 'Automatic touchpoints after close, co-branded pre-approval letters, and a leaderboard of who\u2019s actually sending you deals. No more guessing who your top agents are.',
    bullets: ['Automatic touchpoints', 'Co-branded PAs', 'Partner leaderboard'],
    panel: <RealtorMock />,
  },
  {
    key: 'postclose',
    tag: 'Post-close',
    title: 'Your clients don\u2019t forget you. Because LoanOS doesn\u2019t.',
    body: 'Birthday touches, closing anniversary notes, refi-watch alerts when rates drop. Every past client, every year, forever. Zero manual effort.',
    bullets: ['Birthday + anniversary', 'Refi-watch alerts', 'Review requests'],
    panel: <PostCloseMock />,
  },
]

export default function FeatureTabs() {
  const [active, setActive] = useState<string>(TABS[0].key)
  const current = TABS.find((t) => t.key === active) ?? TABS[0]

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-10">
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
                'px-3 py-2 lg:px-4 lg:py-2.5 lg:whitespace-normal',
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

      {/* Content panel — stacked: headline/bullets on top, mock below */}
      <div role="tabpanel" aria-labelledby={current.key} className="flex flex-col gap-8">
        {/* Headline + bullets row */}
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-start md:gap-10">
          <div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {current.title}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {current.body}
            </p>
          </div>
          <ul className="space-y-2.5 md:pt-2">
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

        {/* Mock panel — full width of the content column */}
        {current.panel}
      </div>
    </div>
  )
}
