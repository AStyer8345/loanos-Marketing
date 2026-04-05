import TopNav from '@/components/TopNav'
import WaitlistForm from '@/components/WaitlistForm'

// ─────────────────────────────────────────────────────────────────────────────
// LoanOS Marketing Homepage
// Pre-launch. May 1, 2026 target. CTAs: Join waitlist + Book demo.
// Aesthetic: mirrors loanos-clone app — gold accents, IBM Plex, card-glow, dense.
// ─────────────────────────────────────────────────────────────────────────────

// FAQ content
const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'Does LoanOS integrate with Arive?',
    a: 'Yes. New loans and status updates flow from Arive into LoanOS automatically through a webhook, so your pipeline stays in sync without double entry. Borrower and contact data comes with it. Encompass and other LOS connections are on the roadmap but not live yet.',
  },
  {
    q: 'Can I import my existing database and pipeline?',
    a: 'Yes. We help you get a clean CSV out of Jungo, Salesforce, or whatever you\u2019re running today and load it during onboarding. Ongoing loan sync after that runs through Arive. I moved my own book — thousands of contacts and years of historical loans — so the path is proven.',
  },
  {
    q: 'How is this different from Bonzo, Surefire, or Total Expert?',
    a: 'Those are marketing tools bolted onto a contact list. LoanOS is a working CRM plus an AI layer that actually drafts your emails, reads your contracts, and runs your daily briefing using your real pipeline data. It was built by an LO closing loans every week, not a marketing team guessing at the workflow.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'You get a full export of your contacts, loans, documents, and activity history in standard formats. Your data is yours. No hostage tactics, no 90-day lockout.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No. Month-to-month, cancel anytime. If it isn\u2019t earning its seat you shouldn\u2019t be paying for it.',
  },
  {
    q: 'Do I still need a processor to use LoanOS?',
    a: 'At real volume, yes — your processor still chases conditions and submits files. What LoanOS replaces is the admin layer: the part-time assistant writing milestone emails, updating spreadsheets, chasing borrowers for docs, and reminding you to follow up with realtors. That job is the one AI eats for breakfast. Your processor just gets faster.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most LOs are live in under a week. Onboarding covers the Arive webhook, a database import, and connecting Outlook for drafts. The heavier lift is deciding which of your old manual steps to finally let go of.',
  },
  {
    q: 'When does LoanOS launch and how do I get early access?',
    a: 'Public launch is May 1, 2026. Waitlist seats get first access, founding-member pricing, and direct input on the roadmap before the doors open to everyone. Join the waitlist and you\u2019ll hear from me personally.',
  },
]

const INTEGRATIONS = [
  'Arive', 'Encompass', 'Outlook', 'Gmail', 'Google Calendar',
  'Calendly', 'Twilio', 'Mortgage Coach', 'Mailchimp', 'Zapier',
]

export default function HomePage() {
  return (
    <>
      <TopNav />

      <main className="pt-14">
        {/* ═══════════════════════════════════════════════════════════════════════
            HERO
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-b border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Left: copy */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Pre-launch · May 1, 2026
                </div>

                <h1 className="mb-6 font-sans text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
                  Built by LOs.
                  <br />
                  <span className="text-primary">For LOs.</span>
                </h1>

                <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  LoanOS is the AI-powered pipeline, CRM, and automation platform for independent loan officers and small brokerages — designed by someone who actually runs one.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#waitlist"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Join the waitlist
                  </a>
                  <a
                    href="https://calendly.com/adamstyer/15minutes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Book a demo →
                  </a>
                </div>

                <p className="mt-5 font-mono text-[11px] text-muted-foreground">
                  Launching May 1, 2026 · No spam, no sales calls unless you ask
                </p>
              </div>

              {/* Right: product screenshot placeholder */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg card-glow">
                  {/* Fake browser chrome */}
                  <div className="mb-4 flex items-center gap-1.5 border-b border-[var(--border)] pb-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--red)]/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--green)]/60" />
                    <div className="ml-3 font-mono text-[10px] text-muted-foreground">loanos.app/dashboard</div>
                  </div>
                  {/* Placeholder content */}
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Product Preview
                    </div>
                    <div className="mb-1 font-mono text-2xl font-bold text-primary">LoanOS</div>
                    <div className="font-mono text-[10px] text-muted-foreground">
                      Real screenshots at launch · May 1, 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            IDENTITY STRIP — dense bold band
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-6xl px-4 py-8 text-center md:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Built in the field
            </p>
            <p className="mt-2 text-xl font-semibold text-foreground md:text-2xl">
              Every feature in LoanOS came from a real loan —{' '}
              <span className="text-primary">not a product roadmap.</span>
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            VALUE PROPS — 4 cards
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="features" className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-primary">
                Why LoanOS
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                One system. Every loan. No more tab-hopping.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: '01',
                  title: 'Built in the field.',
                  body: 'Every feature in LoanOS came from a real loan — not a product roadmap.',
                },
                {
                  num: '02',
                  title: 'Replaces your stack.',
                  body: 'Arive, Outlook, Excel, sticky notes, and the six tools you\u2019re paying for that don\u2019t talk to each other — one system.',
                },
                {
                  num: '03',
                  title: 'Scales without hiring.',
                  body: 'AI-powered automations do the work you were about to hire a processor for.',
                },
                {
                  num: '04',
                  title: 'Gets smarter the more you use it.',
                  body: 'LoanOS learns your pipeline, your realtors, and your voice — so the longer you run it, the less you have to.',
                },
              ].map((prop) => (
                <div
                  key={prop.num}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 card-glow"
                >
                  <div className="mb-4 font-mono text-xs text-primary">{prop.num}</div>
                  <h3 className="mb-2 text-base font-bold text-foreground">{prop.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{prop.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            PROBLEM — 3 columns
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-primary">
                The problem
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Your pipeline shouldn&apos;t live in five tabs.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  n: '→',
                  h: 'Your data lives everywhere.',
                  b: 'Loan status in Arive, contacts in Jungo, follow-ups in Outlook, reminders in your head. Nothing is connected.',
                },
                {
                  n: '→',
                  h: 'Your realtors hear from you twice a year.',
                  b: 'You close their deal, then disappear. Six months later they send the next one to the LO who kept in touch.',
                },
                {
                  n: '→',
                  h: 'You\u2019re paying for work AI can do.',
                  b: 'Admin hires cost $5k/month and can\u2019t scale. The manual pieces of your day are exactly what AI eats for breakfast.',
                },
              ].map((p, i) => (
                <div key={i} className="border-l border-primary/40 pl-5">
                  <div className="mb-3 font-mono text-2xl text-primary">{p.n}</div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{p.h}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SOLUTION — 4 feature blocks with placeholder screenshots
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-primary">
                What it does
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                One system. Every loan. From lead to post-close.
              </h2>
            </div>

            <div className="space-y-16">
              {[
                {
                  tag: 'Pipeline',
                  h: 'Every loan, every stage, every next action — in one view.',
                  b: 'Drag-and-drop pipeline with automatic Arive sync, milestone-based automations, and AI-surfaced next actions. The status board that replaces your spreadsheet.',
                  bullets: ['Live Arive sync', 'Milestone automations', 'AI next-action queue'],
                },
                {
                  tag: 'Client Communication',
                  h: 'Pre-approvals, CDs, and updates — written for you.',
                  b: 'Milestone emails drafted by AI in your voice, sent automatically when the file hits the stage. You review and send. Or let it go on autopilot.',
                  bullets: ['Pre-approval templates', 'CD + CTC emails', 'Branded scenario PDFs'],
                },
                {
                  tag: 'Realtor Partner CRM',
                  h: 'Track every referral source like they\u2019re your biggest client.',
                  b: 'Automatic touchpoints after close, co-branded pre-approval letters, and a leaderboard of who\u2019s actually sending you deals. No more guessing who your top agents are.',
                  bullets: ['Automatic touchpoints', 'Co-branded PAs', 'Partner leaderboard'],
                },
                {
                  tag: 'Post-close Automation',
                  h: 'Your clients don\u2019t forget you. Because LoanOS doesn\u2019t.',
                  b: 'Birthday touches, closing anniversary notes, refi-watch alerts when rates drop. Every past client, every year, forever. Zero manual effort.',
                  bullets: ['Birthday + anniversary', 'Refi-watch alerts', 'Review requests'],
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                    i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div>
                    <div className="mb-3 inline-block rounded border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                      {f.tag}
                    </div>
                    <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {f.h}
                    </h3>
                    <p className="mb-5 text-base leading-relaxed text-muted-foreground">
                      {f.b}
                    </p>
                    <ul className="space-y-2">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 font-mono text-xs text-foreground">
                          <span className="text-primary">▸</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Placeholder screenshot */}
                  <div className="aspect-[4/3] rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 card-glow">
                    <div className="mb-3 flex items-center gap-1.5 border-b border-[var(--border)] pb-2">
                      <div className="h-2 w-2 rounded-full bg-[var(--red)]/60" />
                      <div className="h-2 w-2 rounded-full bg-primary/60" />
                      <div className="h-2 w-2 rounded-full bg-[var(--green)]/60" />
                      <div className="ml-2 font-mono text-[9px] text-muted-foreground">
                        loanos.app/{f.tag.toLowerCase().replace(/ /g, '-')}
                      </div>
                    </div>
                    <div className="flex h-[calc(100%-2rem)] flex-col items-center justify-center">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {f.tag} Preview
                      </div>
                      <div className="mt-1 font-mono text-[10px] text-muted-foreground/60">
                        Screenshots at launch
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            ABOUT — founder story + headshot
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="about" className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
              {/* Headshot placeholder — TODO: swap src when Gemini-generated photo ready */}
              <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border-2 border-primary/40 bg-[var(--surface)] lg:mx-0">
                <div className="text-center">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Founder photo
                  </div>
                  <div className="mt-1 font-mono text-[9px] text-muted-foreground/60">
                    TODO: swap src
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-primary">
                  Built by an LO. For LOs.
                </p>
                <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  I built LoanOS because I needed it.
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    I&apos;m Adam Styer — independent mortgage broker in Austin, Texas. For years I ran my pipeline out of Arive, Outlook, a spreadsheet, and whatever was written on the sticky notes next to my monitor.
                  </p>
                  <p>
                    I paid an admin $5k/month to hold it together. Then I replaced her with automation — and kept closing loans. That automation stack became LoanOS.
                  </p>
                  <p className="font-semibold text-foreground">
                    This isn&apos;t software built by a tech founder who interviewed some LOs. It&apos;s software built by an LO who still closes loans. Every feature started as something I needed at 10pm on a Tuesday.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            INTEGRATIONS STRIP
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
            <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Works with the tools you already pay for
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {INTEGRATIONS.map((name) => (
                <span
                  key={name}
                  className="font-mono text-sm font-semibold tracking-wide text-muted-foreground/70 transition-colors hover:text-primary"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            BETA CTA BAND — waitlist form
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="waitlist" className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-primary">
                  Beta access
                </p>
                <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Be one of the first LOs on LoanOS.
                </h2>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  LoanOS launches May 1, 2026. Beta spots open in waves — waitlist order decides who gets in first. Join now and we&apos;ll reach out when your spot is ready.
                </p>
                <ul className="space-y-2 font-mono text-xs text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span> Locked-in founding-member pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span> Direct access to me during setup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span> First shot at shaping the product
                  </li>
                </ul>
              </div>

              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            CONTACT — pricing inquiries + demo
            ═══════════════════════════════════════════════════════════════════════ */}
        <section id="contact" className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-primary">
              Pricing &amp; enterprise
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Want to talk pricing or bring your brokerage on?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              LoanOS pricing is tier-based and depends on team size and volume. Book a demo and we&apos;ll walk you through the product and send a tailored quote.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://calendly.com/adamstyer/15minutes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book a demo
              </a>
              <a
                href="mailto:adam@styermortgage.com?subject=LoanOS%20Pricing%20Inquiry"
                className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Email us →
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            FAQ
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
            <div className="mb-10 text-center">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-primary">
                FAQ
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Questions before you join.
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 card-glow"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-semibold text-foreground">
                    <span>{item.q}</span>
                    <span className="font-mono text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            FINAL CTA BAND
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-b border-[var(--border)]">
          <div className="absolute inset-0 bg-primary/5" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-4 py-24 text-center md:px-6">
            <h2 className="mb-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Stop managing your pipeline in five tabs.
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base text-muted-foreground md:text-lg">
              Join the LoanOS waitlist. Launching May 1, 2026.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Join the waitlist
              </a>
              <a
                href="https://calendly.com/adamstyer/15minutes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Book a demo →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[var(--bg)]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-2 font-mono text-lg font-bold tracking-tight text-foreground">
                Loan<span className="text-primary">OS</span>
              </div>
              <p className="font-mono text-[11px] text-muted-foreground">
                Built by Adam Styer · Mortgage Solutions LP · NMLS #513013
              </p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                Austin, TX
              </p>
            </div>
            <div className="flex gap-6 font-mono text-[11px] text-muted-foreground">
              <a href="#features" className="hover:text-primary">Features</a>
              <a href="#about" className="hover:text-primary">About</a>
              <a href="#waitlist" className="hover:text-primary">Waitlist</a>
              <a href="#contact" className="hover:text-primary">Contact</a>
            </div>
          </div>
          <div className="mt-8 border-t border-[var(--border)] pt-6">
            <p className="font-mono text-[10px] leading-relaxed text-muted-foreground/70">
              © {new Date().getFullYear()} Mortgage Solutions LP. All rights reserved. NMLS #513013. Equal Housing Lender. LoanOS is a product of Mortgage Solutions LP. Information on this site is for general informational purposes only and does not constitute a loan commitment or guarantee of rate.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
