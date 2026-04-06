# LoanOS Marketing — Session Context

**Last updated:** 2026-04-05

## Current State

- **Repo created:** 2026-03-26 (Next.js 14 scaffold + Supabase dep)
- **Deployed:** Vercel (auto-deploy on `main`)
- **Status:** Homepage v2 shipped 2026-04-05 (de-AI design pass — 7 distinct components replacing uniform sections).
- **Waitlist API:** `src/app/api/waitlist/route.ts` — functional, writes to Supabase

## What Exists

- `src/app/page.tsx` — landing page with 7 sections (nav, hero, problem, features, social-proof, waitlist, footer). Semantic HTML only, `id`s everywhere, zero Tailwind classes. Ready to be skinned.
- `src/app/layout.tsx` — SEO metadata only, no fonts or providers yet.
- `src/app/globals.css` — **as of 2026-04-05:** full LoanOS design token system ported from loanos-clone (light/dark CSS vars, card-glow, lo-table styles).
- `tailwind.config.ts` — **as of 2026-04-05:** mirrored from loanos-clone (IBM Plex + Bebas Neue fonts, color tokens aliased to CSS vars, safelist for dynamic classes).

## Sync Status with loanos-clone

Files mirrored from loanos-clone on 2026-04-05:
- `LOANOS_SYSTEM_KNOWLEDGE_BASE.md` — source of truth for product claims
- `skills/user/` — 11 skills including `frontend-design`
- `src/app/globals.css` — design tokens
- `tailwind.config.ts` — theme config

Files intentionally NOT copied (app-specific, would confuse marketing context):
- `RENOVATION-PLAN.md`, `ARCHITECTURE.md`, `MAP.md`
- Arive/n8n workflow docs
- `tasks/`, `audits/`, `supabase/` (product migrations)
- Product CONTEXT.md / CHANGELOG.md (this repo has its own)

## Founder Narrative — Origin Story (canonical, per Adam 2026-04-05)

This is the "why" behind LoanOS. Every piece of marketing copy should lean into this and nothing should contradict it.

**The motivation is time, not tech.** Adam built LoanOS so he could spend more hours on the only activities that actually produce income — meeting people, networking, being on the phone. Everything else is overhead.

**The audit.** Adam sat down and assigned a dollar-per-hour value to every task in a typical week:
- Some were **$25/hr** tasks (structuring a loan, talking to a realtor, presenting options to a borrower)
- Most were **$10/hr** tasks (drafting a milestone email, updating a spreadsheet, logging activity)
- A lot were honestly **$5/hr** tasks (copy-pasting a status update, cleaning contact data, posting to social, chasing a stray doc)

**The decision.** Hiring another $5k/month admin to handle $5/hour work was economically stupid. So instead of hiring, he built the system that does it for him — while still closing loans. That system became LoanOS.

**The second motivation: no canned anything.** Adam hated generic drip campaigns and template emails. They sound like a content farm and borrowers smell it. LoanOS intentionally does NOT ship with a library of canned templates. Instead it:
- Learns Adam's voice from his actual sent emails and approved edits
- Captures every rewrite, every deleted cliché, every tone change
- Feeds those edits back into the next draft as in-context learning (not fine-tuning)
- Drafts the next message the way Adam would have written it anyway

**The positioning sentence:**
> "Get the $5-an-hour tasks off your desk so the $500-an-hour ones can happen."

**Where this lives on the site:** Homepage About section (`src/app/page.tsx`, section `#about`) — rewritten 2026-04-05 to carry this narrative. Do not dilute it in future copy passes.

---

## Locked Decisions (2026-04-05, from Adam)

1. **Launch stance:** Pre-launch. Target public launch: **May 1, 2026**.
2. **Buyer:** Both solo LOs and small brokerages (2-20 LOs). No enterprise tier yet.
3. **Primary CTA (dual):** "Join the waitlist" + "Book a demo". No free trial flow until post-launch.
4. **Pricing:** Do NOT publish tiers. Single "Contact Us" section for pricing inquiries.
5. **Positioning shift:** Drop "1,000+ loans closed" personal-founder angle. New identity line: **"Built by an LO, for LOs."** Identity-based trust, not production-number flex.
6. **Proof assets:**
   - **Beta logos:** placeholder slots — hidden until real customers exist
   - **Testimonials:** placeholder slots — hidden until real quotes with production stats exist
   - **Product screenshots:** ⛔ DO NOT pull from loanos-clone yet — real customer data must not leak. Adam will build a demo user with synthetic data first. Screenshot slots will render placeholder cards until demo user is ready.
   - **Founder photo:** use Adam's existing headshot (path TBD)
7. **Design direction:** Mirror loanos-clone's recent redesign — fixed h-14 top nav, two-tone `Loan`+gold-`OS` logo, IBM Plex Mono logo treatment, lucide-react icons, gold-tinted active states (`bg-primary/15`), tactical/dense/terminal aesthetic. Not Stripe-airy.

## Shipped (2026-04-05)

- **Homepage v1** — TopNav (Codex), WaitlistForm (Claude), page.tsx with 12 sections (Claude), FAQ content (subagent)
- **Homepage v2 (de-AI pass)** — 7 new components replacing repeating patterns:
  - `HeroTerminal` (animated log stream, replaces fake browser chrome)
  - `BentoFeatures` (asymmetric 5-card grid with bar chart, replaces 4 identical numbered cards)
  - `ProblemQuotes` (3 big-number callouts, replaces `→` arrow columns)
  - `FeatureTabs` (client tabbed showcase, replaces 4 alternating fake-browser rows — each tab has a distinct tactical placeholder)
  - `IntegrationsMarquee` (infinite CSS scroll, replaces plain text row)
  - `FAQAccordion` (client accordion with smooth height animation, replaces `<details>`+ rotate)
  - `FinalCTA` (grid-pattern bg with radial fade, replaces flat primary/5 wash)
- Stripped repeating mono-gold eyebrow labels from 5 of 9 sections to break the visible pattern
- Build passing, deployed via `git push`

## Next Steps

1. **Build demo user with synthetic data in loanos-clone** — then swap placeholder screenshots on marketing homepage for real UI
2. **Generate Gemini headshot** (backwards hat, casual) — swap into `/about` section placeholder
3. **First 3 real testimonials** once beta users land — enable a testimonial carousel section (structure not yet built, intentionally)
4. **Launch post-May-1 pivot:** replace "Join the waitlist" primary CTA with "Start free trial" once product is live, add `/pricing` page with tiers from research
5. **Contact form backend:** current Contact section uses `mailto:` fallback. Post-launch, replace with `/api/contact` route + Supabase `contact_inquiries` table.

## Shipped (2026-04-05, cont'd — security + briefing + AI expansion)

- **SecuritySection** (`src/components/SecuritySection.tsx`) — 6 trust pillars in 3-col grid: tenant isolation, webhook auth, data export, security headers + rate limiting, no AI training, encrypted document storage. Wired into page.tsx between Integrations and Waitlist.
- **BriefingShowcase** (`src/components/BriefingShowcase.tsx`) — Daily briefing mock with stats strip (active pipeline, locks expiring, stale follow-ups, auto-actions), 4 priority alerts (2 urgent + 2 normal), and voice guide callout explaining how all output runs through your voice guide. Wired into page.tsx between Chat and Scenarios.
- **ChatShowcase expanded** — 3 new exchange cards added (6 total, 2×3 grid):
  - "Draft a CTC email" — shows AI drafting in the LO's voice with voice guide attribution
  - "Sales coaching" — appraisal came in low scenario with 3-step framework
  - "Mass update pipeline" — "Text all my realtors with active deals" → 6 texts drafted, 9 deals referenced
- **CommsMock expanded** — party actions strip (Email all parties, Text borrower, Text realtor, Email title co)
- **PipelineMock expanded** — document upload indicators (K/L/CD badges per row in new Docs column)
- **RealtorMock expanded** — referral pipeline section with 4 realtors showing sent/closed/active stats + progress bars

## Shipped (2026-04-05, cont'd — responsive fixes + content expansion)

- **Mobile responsive overhaul** — fixed horizontal overflow on portrait and landscape phones:
  - `globals.css`: `html { overflow-x: hidden }`, body `overflow-x: hidden; max-width: 100vw`
  - `page.tsx`: `overflow-hidden` on `<main>`, `min-w-0` on hero text div, font scaling bumped from `md:text-5xl` → `md:text-4xl lg:text-5xl` (10 occurrences)
  - `FeatureTabs.tsx`: content grid bumped from `md:` to `lg:` breakpoints so landscape phones don't trigger wide layout
  - `ChatShowcase.tsx`: `min-w-0` on card container to prevent grid blowout
  - `HeroTerminal.tsx`, `IntegrationsMarquee.tsx`, `TopNav.tsx`: added `overflow-hidden` to contain wide internal elements
- **ChatShowcase rewritten** — 2 cards fixed per user feedback:
  - CTC email replaced with "cold borrower follow-up" (reviews file notes, drafts personalized re-engagement)
  - Sales coaching rewritten with correct low-appraisal framework (call realtor first → frame as seller's problem → call borrowers with leverage)
- **CommsMock** — replaced generic CTC email with real CD email format (Final Numbers block, Wire Instructions, Wire Fraud Warning, Title Company info)
- **SocialShowcase** — added 4-card format grid (Reels, Carousels, Image Posts, Text Posts) + platform-specific callout strip
- **BriefingShowcase** — expanded with compliance callout card (TILA · RESPA · Reg Z · TRID · State)
- **Voice guide updates** (Supabase `social_settings`): added low-appraisal coaching approach, expanded content format strategy to all post types, added compliance guardrails section

## Known Issues

- No `.env.local` present locally — Supabase waitlist submissions will fail in dev until env vars are set
- `next.config.ts` deleted (was duplicate of `next.config.mjs`) — consolidated to `.mjs` only
- PII-bearing screenshots still in `public/screenshots/` (pipeline.png, loan-detail.png, contact-detail.png, dashboard.png) — no longer referenced by any component but not yet deleted from repo
