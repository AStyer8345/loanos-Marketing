import Image from 'next/image'
import TopNav from '@/components/TopNav'
import WaitlistForm from '@/components/WaitlistForm'
import HeroTerminal from '@/components/HeroTerminal'
import BentoFeatures from '@/components/BentoFeatures'
import ProblemQuotes from '@/components/ProblemQuotes'
import FeatureTabs from '@/components/FeatureTabs'
import ChatShowcase from '@/components/ChatShowcase'
import ScenariosShowcase from '@/components/ScenariosShowcase'
import SocialShowcase from '@/components/SocialShowcase'
import BriefingShowcase from '@/components/BriefingShowcase'
import IntegrationsMarquee from '@/components/IntegrationsMarquee'
import SecuritySection from '@/components/SecuritySection'
import FAQAccordion from '@/components/FAQAccordion'
import FinalCTA from '@/components/FinalCTA'

// ─────────────────────────────────────────────────────────────────────────────
// LoanOS Marketing Homepage — v2 (de-AI'd)
// Replaces 7 uniform sections with distinct components. See CHANGELOG 2026-04-05.
// ─────────────────────────────────────────────────────────────────────────────

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

export default function HomePage() {
  return (
    <>
      <TopNav />

      <main className="overflow-hidden pt-14">
        {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-b border-[var(--border)]">
          {/* Ambient grid backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-pattern-sm mask-radial-fade opacity-40"
          />
          <div className="relative mx-auto max-w-6xl overflow-hidden px-4 py-20 md:px-6 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              <div className="min-w-0">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                  Pre-launch · May 1, 2026
                </div>

                <h1 className="mb-6 font-sans text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
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
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
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

              {/* Animated terminal replaces fake browser chrome */}
              <HeroTerminal />
            </div>
          </div>
        </section>

        {/* ══ IDENTITY STRIP ═════════════════════════════════════════════════ */}
        <section className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-6xl px-4 py-10 text-center md:px-6">
            <p className="text-xl font-semibold text-foreground md:text-2xl">
              Every feature in LoanOS came from a real loan —{' '}
              <span className="text-primary">not a product roadmap.</span>
            </p>
          </div>
        </section>

        {/* ══ BENTO (Why LoanOS) ═════════════════════════════════════════════ */}
        <section id="features" className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                One system. Every loan.
                <br />
                <span className="text-muted-foreground/70">No more tab-hopping.</span>
              </h2>
              <div className="max-w-sm text-sm text-muted-foreground">
                Pipeline, CRM, comms, and automation in one workspace — replacing the six tools you&apos;re paying for today.
              </div>
            </div>

            <BentoFeatures />
          </div>
        </section>

        {/* ══ PROBLEM ════════════════════════════════════════════════════════ */}
        <section className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-14 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Your pipeline shouldn&apos;t
                <br />
                live in <span className="text-primary">five tabs.</span>
              </h2>
            </div>

            <ProblemQuotes />
          </div>
        </section>

        {/* ══ SOLUTION (FeatureTabs) ═════════════════════════════════════════ */}
        <section className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Every loan. From lead to{' '}
                <span className="text-primary">post-close.</span>
              </h2>
            </div>

            <FeatureTabs />
          </div>
        </section>

        {/* ══ CHAT ══════════════════════════════════════════════════════════ */}
        <section id="chat" className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  An assistant <span className="text-primary">trained for LOs.</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Not a generic chatbot. Draft emails and texts in your voice. Get coached through a tough borrower call. Run income calcs, look up guidelines, blast a rate drop to every realtor with an active deal — or ask it to build you a marketing plan for Q2. It knows your lender panel, your pipeline, and your voice.
                </p>
              </div>
              <div className="hidden max-w-xs text-sm text-muted-foreground md:block">
                Built on Claude, wired into your real data. Write emails, drop texts, explain situations, coach you through objections, run scenarios — all from one conversation.
              </div>
            </div>

            <ChatShowcase />
          </div>
        </section>

        {/* ══ DAILY BRIEFING + VOICE GUIDE ═══════════════════════════════════ */}
        <section id="briefing" className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Your morning briefing.
                <br />
                <span className="text-primary">Before you touch anything.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every morning LoanOS scans your pipeline, checks rate locks, flags stale follow-ups, and drafts the actions you&apos;d normally spend an hour on. Open your laptop and the day is already organized.
              </p>
            </div>

            <BriefingShowcase />
          </div>
        </section>

        {/* ══ SCENARIOS ═════════════════════════════════════════════════════ */}
        <section id="scenarios" className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Kill the PDF.
                <br />
                <span className="text-primary">Ship a link.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Build a purchase or refi scenario once. Send your borrower a shareable link they can pull up on a phone — branded, interactive, no login. Every page you ship is a brand asset Google can find.
              </p>
            </div>

            <ScenariosShowcase />
          </div>
        </section>

        {/* ══ SOCIAL ════════════════════════════════════════════════════════ */}
        <section id="social" className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Writes in your voice.
                <br />
                <span className="text-primary">Learns from every edit.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Reels, carousels, single-image posts, text-only posts — every format, written for each platform based on what content actually performs there. One prompt becomes 3-4 platform-specific posts. Every edit you make trains it for next time.
              </p>
            </div>

            <SocialShowcase />
          </div>
        </section>

        {/* ══ ABOUT ══════════════════════════════════════════════════════════ */}
        <section id="about" className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="relative mx-auto lg:mx-0">
                <div className="absolute -inset-2 rounded-2xl bg-primary/10 blur-xl" aria-hidden />
                <div className="relative overflow-hidden rounded-2xl border-2 border-primary/40 shadow-xl shadow-black/20">
                  <Image
                    src="/adam-headshot.jpg"
                    alt="Adam Styer — Founder, LoanOS"
                    width={768}
                    height={1024}
                    className="h-auto w-48 object-cover"
                    priority
                  />
                </div>
              </div>

              <div>
                <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  I built LoanOS because{' '}
                  <span className="text-primary">I needed it.</span>
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    I&apos;m Adam Styer — independent mortgage broker in Austin, Texas. I close loans every week. I also wanted my life back.
                  </p>
                  <p>
                    The money in this business comes from meeting people, being on the phone, showing up. Everything else — updating a spreadsheet, writing the same milestone email for the hundredth time, chasing a doc, posting to social — that&apos;s overhead. I sat down and put a dollar-per-hour number on every task I did in a week. Some were $25-an-hour tasks. Most were $10. A lot were honestly $5.
                  </p>
                  <p>
                    I wasn&apos;t going to hire another $5k/month admin to do $5/hour work. So I built the system that does it for me — and kept closing loans while I built it. That system became LoanOS.
                  </p>
                  <p>
                    The other reason: I hated the canned stuff. Generic drip campaigns. Template emails that sound like they came from a content farm. Borrowers can smell it. So LoanOS doesn&apos;t ship with canned anything. It learns how I actually talk, watches every edit I make, and drafts the next message in the voice I would&apos;ve used anyway. Not a template library. A system that sounds like me.
                  </p>
                  <p className="border-l-2 border-primary pl-4 font-semibold text-foreground">
                    This isn&apos;t software built by a tech founder who interviewed some LOs. It&apos;s software built by an LO who still closes loans — to get the $5-an-hour tasks off the desk so the $500-an-hour ones can happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ INTEGRATIONS MARQUEE ═══════════════════════════════════════════ */}
        <section className="border-b border-[var(--border)] bg-[var(--bg)]">
          <div className="mx-auto max-w-6xl py-14">
            <p className="mb-6 px-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:px-6">
              Works with the tools you already pay for
            </p>
            <IntegrationsMarquee />
          </div>
        </section>

        {/* ══ SECURITY ═══════════════════════════════════════════════════════ */}
        <section id="security" className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Your data stays <span className="text-primary">yours.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Borrower data, pipeline details, and lender relationships are sensitive. LoanOS is built with tenant isolation, encrypted storage, and zero AI training on your data — because trust isn&apos;t a feature, it&apos;s the foundation.
              </p>
            </div>

            <SecuritySection />
          </div>
        </section>

        {/* ══ WAITLIST ═══════════════════════════════════════════════════════ */}
        <section id="waitlist" className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  Be one of the first LOs on{' '}
                  <span className="text-primary">LoanOS.</span>
                </h2>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  LoanOS launches May 1, 2026. Beta spots open in waves — waitlist order decides who gets in first. Join now and we&apos;ll reach out when your spot is ready.
                </p>
                <ul className="space-y-3">
                  {[
                    'Locked-in founding-member pricing',
                    'Direct access to me during setup',
                    'First shot at shaping the product',
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-primary/50 bg-primary/10 text-primary">
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* ══ CONTACT ════════════════════════════════════════════════════════ */}
        <section id="contact" className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6">
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Pricing, brokerage deals,
              <br />
              or just curious?
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

        {/* ══ FAQ ════════════════════════════════════════════════════════════ */}
        <section className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Questions before
                <br />
                <span className="text-primary">you join.</span>
              </h2>
            </div>

            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        {/* ══ FINAL CTA ══════════════════════════════════════════════════════ */}
        <FinalCTA />
      </main>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
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
