// Drip Campaigns tab — shows the real AI prompt skeletons from Adam's Supabase.
// These are NOT canned templates — they're instructions that tell the AI what to
// draft, in what tone, using what context. That distinction is the whole pitch.

const CAMPAIGNS = [
  {
    name: 'Ghost Referral',
    audience: 'Lead',
    desc: 'Realtor sent a referral, borrower went quiet',
    steps: [
      { day: 3, name: 'Warm Intro', skeleton: 'Follow up on the intro from [realtor name]. Keep it brief and low-pressure. Mention you are available when they are ready. Include one useful thing — a quick market snapshot or what to expect in the process.' },
      { day: 7, name: 'Value Add', skeleton: 'Share something genuinely useful — Austin market snapshot, current affordability numbers for their price range, or a quick explainer on a common buyer question. No ask. Just value.' },
      { day: 21, name: 'Soft Check-In', skeleton: 'Quick check-in. Acknowledge they may not be ready yet and that is fine. Mention one relevant market update. Keep it to 3-4 sentences.' },
      { day: 45, name: 'Final Touch', skeleton: 'Last email in the sequence. Door is always open. No pressure. Mention you will still be sending market updates occasionally. Warm and genuine close.' },
    ],
  },
  {
    name: 'Past Client Retention',
    audience: 'Past Client',
    desc: 'Stay top-of-mind for refis, referrals, and repeat business',
    steps: [
      { day: null, name: 'Closing Anniversary', skeleton: 'Congrats on [X] year(s) in [address]. Mention equity change since purchase. Mention current rate environment if relevant to their rate. Light tone — no hard sell.' },
      { day: null, name: 'Rate Drop Alert', skeleton: 'Their locked rate: [X]. Current market rate: [Y]. Show monthly payment savings and 5-year total savings. Direct CTA — call or text to discuss. Keep it factual and specific to their numbers.' },
      { day: null, name: 'Equity Check-In', skeleton: 'Estimated current home value vs their purchase price. Dollar amount of equity gained. If equity is substantial (>20%), mention HELOC or cash-out refi as options. Educational tone — not salesy.' },
    ],
  },
]

export default function DripMock() {
  return (
    <div className="space-y-4">
      {CAMPAIGNS.map((c) => (
        <div
          key={c.name}
          className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface2)] shadow-xl shadow-black/30"
        >
          {/* Campaign header */}
          <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground">
                {c.name}
              </span>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-primary">
                {c.audience}
              </span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">{c.steps.length} steps</span>
          </div>

          {/* Description */}
          <div className="border-b border-[var(--border)] px-4 py-2 font-mono text-[10px] text-muted-foreground">
            {c.desc}
          </div>

          {/* Steps — vertical sequence */}
          <div className="p-4">
            <div className="relative space-y-4 pl-6">
              {/* Vertical connector line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]" />

              {c.steps.map((s, i) => (
                <div key={s.name} className="relative">
                  {/* Step dot */}
                  <div className="absolute -left-6 top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-primary/40 bg-primary/15">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-semibold text-foreground">{s.name}</span>
                      <span className="font-mono text-[9px] text-muted-foreground/60">
                        {s.day !== null ? `Day ${s.day}` : 'Trigger-based'}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground italic">
                      &ldquo;{s.skeleton}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-[9px] text-muted-foreground/60">
            Each step is an AI prompt — not a canned template. The draft uses your voice, your data, your market.
          </div>
        </div>
      ))}
    </div>
  )
}
