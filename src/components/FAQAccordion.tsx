'use client'

// Smooth accordion with height animation via CSS grid-template-rows trick.
// Replaces <details> + `+` icon rotate with a chevron and a true height
// transition. Keeps one item open at a time.

import { useState } from 'react'

type Item = { q: string; a: string }

export default function FAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 px-1 py-5 text-left transition-colors hover:text-primary"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base font-semibold text-foreground group-hover:text-primary">
                  {item.q}
                </span>
              </span>
              <svg
                aria-hidden
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-primary' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
              <div>
                <p className="pb-6 pl-[54px] pr-8 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
