import Image from 'next/image'
import TopNav from '@/components/TopNav'
import IntegrationsMarquee from '@/components/IntegrationsMarquee'
import SecuritySection from '@/components/SecuritySection'

// ─────────────────────────────────────────────────────────────────────────────
// LoanOS Marketing Homepage — v3 (product tour, not a pitch)
// Replaces v2's pitch-heavy sections with a captioned screenshot tour.
// See CHANGELOG 2026-05-01.
// ─────────────────────────────────────────────────────────────────────────────

const TOUR: {
  id: string
  eyebrow: string
  title: string
  caption: string
  proof: string[]
  src: string
  alt: string
}[] = [
  {
    id: 'dashboard',
    eyebrow: 'Command center',
    title: 'Dashboard',
    caption:
      'A working morning view: commission earned, pipeline value, closed loans, new applications, pre-approvals, and the queues that decide what gets attention first.',
    proof: ['Live loan totals', 'New app queue', 'Pipeline / performance / briefing tabs'],
    src: '/screenshots/tour-dashboard.png',
    alt: 'LoanOS dashboard showing commission, pipeline value, closed loans this month, and a list of new applications and pre-approvals.',
  },
  {
    id: 'pipeline',
    eyebrow: 'Pipeline operations',
    title: 'Pipeline',
    caption:
      'Every active loan grouped by milestone, with totals across the top and the columns an LO actually scans: close date, rate, lender, location, commission.',
    proof: ['Stage counters', 'Sortable loan table', 'List / board views'],
    src: '/screenshots/tour-pipeline.png',
    alt: 'Loans in process view with stage counters across the top and a sortable table of active loans.',
  },
  {
    id: 'loan',
    eyebrow: 'File workspace',
    title: 'Loan file',
    caption:
      'One file view for the things that usually scatter across LOS notes, email, docs, and memory: milestones, parties, property, lock dates, documents, activity, and emails.',
    proof: ['Milestone timeline', 'Party cards', 'Documents + activity tabs'],
    src: '/screenshots/tour-loan.png',
    alt: 'Individual loan file for Coleman with milestones, party cards, lock and close dates, and document section.',
  },
  {
    id: 'scenario',
    eyebrow: 'Borrower-facing output',
    title: 'Borrower scenarios',
    caption:
      'A public scenario page borrowers can open without a login. The math is laid out side by side, the lowest payment is obvious, and the borrower can answer back from the page.',
    proof: ['Token share links', 'Side-by-side comparison', 'Borrower intent capture'],
    src: '/screenshots/tour-scenario.png',
    alt: 'Side-by-side scenario comparison showing two rate options with monthly payment, cash to close, and total interest.',
  },
  {
    id: 'automation',
    eyebrow: 'Automation layer',
    title: 'Automations',
    caption:
      'The plumbing behind the interface: inbound Outlook email gets filtered, classified, matched to a contact and active loan, then logged or routed without manual triage.',
    proof: ['Outlook trigger', 'Claude intent classification', 'Supabase activity logging'],
    src: '/screenshots/tour-automation.png',
    alt: 'n8n workflow graph showing an inbound Outlook email being parsed, classified by AI, matched to a contact and active loan, then logged.',
  },
]

const BUILT_NOW = [
  {
    label: 'Pipeline + CRM',
    detail: 'Arive-synced loans, contacts, activity, documents, stages, and per-file workspace.',
  },
  {
    label: 'Scenario links',
    detail: 'Purchase and refi comparisons become public borrower pages, not static PDFs.',
  },
  {
    label: 'LO assistant',
    detail: 'Mortgage-specific chat with lender database lookup and product-guide knowledge.',
  },
  {
    label: 'Lender knowledge base',
    detail: 'Daily lender email ingest updates contacts, products, notes, and guideline changes.',
  },
  {
    label: 'Social + voice loop',
    detail: 'Draft, review, approve, and schedule posts. Edits feed the next draft.',
  },
  {
    label: 'Tenant isolation',
    detail: 'Org-scoped RLS, server-side service role use, private documents, signed URLs, audit log.',
  },
]

export default function HomePage() {
  return (
    <>
      <TopNav />

      <main className="overflow-hidden pt-14">
        {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--bg)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-pattern-sm mask-radial-fade opacity-40"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                  Built by an LO, for LOs
                </div>

                <h1 className="mb-6 font-sans text-4xl font-bold leading-[1.02] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  LoanOS is the operating system behind a mortgage desk.
                </h1>

                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Pipeline, CRM, borrower scenarios, lender knowledge, and automations in one workspace. This page shows the product, not the pitch.
                </p>
              </div>

              <figure className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/20">
                <Image
                  src="/screenshots/tour-dashboard.png"
                  alt="LoanOS dashboard with pipeline, performance, briefing, and queue tabs."
                  width={2896}
                  height={1202}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 680px, 100vw"
                  priority
                />
                <figcaption className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Dashboard · synthetic demo data · May 1, 2026
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ══ BUILT NOW ══════════════════════════════════════════════════════ */}
        <section id="system" className="border-b border-[var(--border)] bg-[var(--surface2)]">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
            <div className="mb-8 grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  What is already built
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  The useful parts are the boring parts.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:justify-self-end">
                LoanOS is not a mockup collection or a generic AI wrapper. It is a multi-tenant mortgage workspace with live product surfaces, data isolation, share pages, lender knowledge, and automation workflows.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {BUILT_NOW.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-primary">
                    {item.label}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PRODUCT TOUR ═══════════════════════════════════════════════════ */}
        <section id="tour" className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
            <div className="mb-14 max-w-2xl">
              <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Product tour
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Screens first. Claims second.
              </h2>
            </div>

            <div className="space-y-24">
              {TOUR.map((item, i) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-10"
                >
                  <header className="lg:pt-2">
                    <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                      0{i + 1} / 0{TOUR.length} · {item.eyebrow}
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.caption}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {item.proof.map((proof) => (
                        <li
                          key={proof}
                          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-foreground"
                        >
                          <span className="h-px w-5 bg-primary" />
                          {proof}
                        </li>
                      ))}
                    </ul>
                  </header>

                  <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-xl shadow-black/10">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={2400}
                      height={1200}
                      className="h-auto w-full"
                      sizes="(min-width: 1024px) 720px, 100vw"
                      priority={i === 0}
                    />
                  </div>
                </article>
              ))}
            </div>
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
                  />
                </div>
              </div>

              <div>
                <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  I built LoanOS because{' '}
                  <span className="text-primary">I needed it.</span>
                </h2>
                <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    I&apos;m Adam Styer — independent mortgage broker in Austin, Texas. I close loans every week. I also wanted my life back.
                  </p>
                  <p>
                    The money in this business comes from meeting people, being on the phone, showing up. Everything else — updating spreadsheets, writing milestone emails, chasing docs, posting to social — is overhead.
                  </p>
                  <p>
                    I wasn&apos;t going to hire another $5k/month admin to do $5/hour work. So I built the system that does it for me, and kept closing loans while I built it.
                  </p>
                  <p>
                    The other reason: I hated canned templates. LoanOS learns how I actually talk, watches every edit I make, and drafts the next message in the voice I would&apos;ve used anyway. Not a template library. A system that sounds like the person using it.
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
                Borrower data, pipeline details, and lender relationships are sensitive. LoanOS is built with tenant isolation, encrypted stored credentials, signed document access, append-only audit logging, and zero AI training on your data.
              </p>
            </div>

            <SecuritySection />
          </div>
        </section>
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
              <a href="#tour" className="hover:text-primary">Product</a>
              <a href="#about" className="hover:text-primary">About</a>
              <a href="#security" className="hover:text-primary">Security</a>
            </div>
          </div>
          <div className="mt-8 border-t border-[var(--border)] pt-6">
            <p className="font-mono text-[10px] leading-relaxed text-muted-foreground/70">
              © {new Date().getFullYear()} Mortgage Solutions LP. All rights reserved. NMLS #513013. Equal Housing Lender. LoanOS is a product of Mortgage Solutions LP.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
