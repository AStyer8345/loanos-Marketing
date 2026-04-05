'use client'

// Tabbed feature showcase — each tab swaps in a real LoanOS product
// screenshot captured from the test account at loanos.vercel.app.

import Image from 'next/image'
import { useState } from 'react'

type Tab = {
  key: string
  tag: string
  title: string
  body: string
  bullets: string[]
  image: { src: string; alt: string; width: number; height: number }
}

const TABS: Tab[] = [
  {
    key: 'pipeline',
    tag: 'Pipeline',
    title: 'Every loan, every stage, every next action — in one view.',
    body: 'Drag-and-drop pipeline with automatic Arive sync, milestone-based automations, and AI-surfaced next actions. The status board that replaces your spreadsheet.',
    bullets: ['Live Arive sync', 'Milestone automations', 'AI next-action queue'],
    image: {
      src: '/screenshots/pipeline.png',
      alt: 'LoanOS Loans in Process pipeline — status chips, lock expiry flags, commission column',
      width: 1918,
      height: 923,
    },
  },
  {
    key: 'comms',
    tag: 'Client Comms',
    title: 'Pre-approvals, CDs, and updates — written for you.',
    body: 'Milestone emails drafted by AI in your voice, sent automatically when the file hits the stage. You review and send. Or let it go on autopilot.',
    bullets: ['Pre-approval templates', 'CD + CTC emails', 'Branded scenario PDFs'],
    image: {
      src: '/screenshots/loan-detail.png',
      alt: 'LoanOS loan detail — milestone timeline, parties, key dates, documents, activity',
      width: 1915,
      height: 922,
    },
  },
  {
    key: 'realtor',
    tag: 'Realtor CRM',
    title: 'Track every referral source like they\u2019re your biggest client.',
    body: 'Automatic touchpoints after close, co-branded pre-approval letters, and a leaderboard of who\u2019s actually sending you deals. No more guessing who your top agents are.',
    bullets: ['Automatic touchpoints', 'Co-branded PAs', 'Partner leaderboard'],
    image: {
      src: '/screenshots/contact-detail.png',
      alt: 'LoanOS contact detail — borrower profile with realtor referral source and activity feed',
      width: 1916,
      height: 916,
    },
  },
  {
    key: 'postclose',
    tag: 'Post-close',
    title: 'Your clients don\u2019t forget you. Because LoanOS doesn\u2019t.',
    body: 'Birthday touches, closing anniversary notes, refi-watch alerts when rates drop. Every past client, every year, forever. Zero manual effort.',
    bullets: ['Birthday + anniversary', 'Refi-watch alerts', 'Review requests'],
    image: {
      src: '/screenshots/dashboard.png',
      alt: 'LoanOS dashboard — commission, pipeline, recent marketing automations, active pipeline',
      width: 1873,
      height: 674,
    },
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

        {/* Real product screenshot */}
        <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface2)] shadow-lg shadow-black/20">
          <Image
            key={current.key}
            src={current.image.src}
            alt={current.image.alt}
            width={current.image.width}
            height={current.image.height}
            className="h-auto w-full"
            priority={current.key === TABS[0].key}
          />
        </div>
      </div>
    </div>
  )
}
