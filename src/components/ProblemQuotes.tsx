// Problem section — replaces 3 identical "→" bullet columns with
// large-number callouts + short pull quotes. Asymmetric layout breaks
// the grid rhythm of the rest of the page.

const PROBLEMS = [
  {
    stat: '5',
    unit: 'tabs',
    headline: 'Your pipeline lives everywhere at once.',
    body: 'Loan status in Arive. Contacts in Jungo. Follow-ups in Outlook. Reminders in your head. None of them know about each other.',
  },
  {
    stat: '6',
    unit: 'months',
    headline: 'The average time between you and your last realtor touch.',
    body: 'You closed their deal and disappeared. The next one goes to whoever kept in touch.',
  },
  {
    stat: '$5k',
    unit: '/month',
    headline: 'The cost of the admin you were about to hire.',
    body: 'Can\u2019t scale. Can\u2019t work nights. Can\u2019t remember every birthday. AI eats this job for breakfast.',
  },
]

export default function ProblemQuotes() {
  return (
    <div className="space-y-10 md:space-y-0">
      <div className="grid gap-0 md:grid-cols-3 md:divide-x md:divide-[var(--border)]">
        {PROBLEMS.map((p, i) => (
          <div key={i} className="px-0 py-8 md:px-8 md:py-4">
            <div className="mb-4 flex items-baseline gap-1.5">
              <span className="font-sans text-7xl font-bold leading-none tracking-tighter text-primary md:text-8xl">
                {p.stat}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {p.unit}
              </span>
            </div>
            <h3 className="mb-3 text-lg font-bold leading-snug text-foreground">
              {p.headline}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
