# LoanOS Marketing — Changelog

All notable changes to the LoanOS marketing site.

## [Unreleased]

## 2026-04-05 — Adversarial review fixes

### Fixed
- **CRITICAL:** SecuritySection falsely claimed CSP, HSTS, strict CORS — all are "Known gaps (do NOT market)" per KB. Replaced with accurate "middleware-enforced access" + parameterized queries.
- **CRITICAL:** Drip Campaigns tab marketed a schema-only feature (KB: "no API routes, no UI, no scheduler"). Added `comingSoon` flag to Tab type; tab rail shows "Soon" badge, content panel shows "Coming Soon" banner.
- **CRITICAL:** 6 PII-bearing screenshots deleted from `public/screenshots/` — were web-accessible despite no component references.
- **CRITICAL:** ChatShowcase "mass update pipeline" card marketed a feature KB marks as "not built". Replaced with lender product matching query (live feature).
- **HIGH:** TopNav had duplicate links ("Product" and "Features" both → `#features`). Removed "Product", kept Features/About/Contact.
- **HIGH:** Added `robots.txt` and `sitemap.xml` to `public/`.
- **HIGH:** Waitlist API had zero abuse protection. Added in-memory rate limiter (5 req/IP/60s).
- **MEDIUM:** WaitlistForm placeholder was "Adam Styer" — changed to "Jane Smith".

### Why
Adversarial review against LOANOS_SYSTEM_KNOWLEDGE_BASE.md Feature Reality Map caught 4 launch-blocking false claims, a PII exposure, and several polish issues. Every marketing claim now matches a ✅ LIVE row in the KB.

## 2026-04-05 — Mobile responsive fixes + content accuracy pass

### Fixed
- Horizontal overflow on mobile (portrait and landscape) — root cause was IntegrationsMarquee `w-max` track leaking document width, plus FeatureTabs grid using `md:` breakpoints at landscape phone widths (812px). Applied layered `overflow-hidden` on html/body/main/header + individual components, `min-w-0` on flex/grid children, and bumped breakpoints from `md:` to `lg:` where needed.
- Font scaling: all `md:text-5xl` headings now use `md:text-4xl lg:text-5xl` so landscape phones don't render desktop-sized type.

### Changed
- `ChatShowcase.tsx` — rewrote 2 inaccurate exchange cards: CTC email (wrong CD timing) replaced with cold-borrower follow-up; sales coaching (wrong appraisal framing) replaced with correct 3-step framework (call realtor first → frame as seller's problem → call borrowers with leverage).
- `CommsMock.tsx` — replaced generic CTC email with real CD email format: Final Numbers block (cash to close, closing date, first payment, monthly P&I), Wire Instructions, Wire Fraud Warning callout, Title Company info.
- `SocialShowcase.tsx` — added 4-card format grid (Reels & Video, Carousels, Image Posts, Text Posts) with platform badges, plus platform-specific callout strip.
- `BriefingShowcase.tsx` — added compliance callout card (TILA · RESPA · Reg Z · TRID · State licensing tags) alongside voice guide card.
- Supabase voice guide (`social_settings`) — added low-appraisal coaching section, expanded content format strategy to all post types, added detailed compliance guardrails.

### Why
User's wife flagged mobile horizontal scroll. Root-cause analysis found marquee overflow + wrong breakpoints. Content accuracy fixes came from Adam's direct feedback on CD timing and appraisal coaching approach — both cards now reflect how he actually works.

## 2026-04-05 — Security, daily briefing, expanded AI + mock features

### Added
- `src/components/SecuritySection.tsx` — 6 security trust pillars (tenant isolation, webhook auth, data export, security headers + rate limiting, no AI training on data, encrypted document storage) in a 3-column grid with SVG icons. Placed between Integrations and Waitlist sections.
- `src/components/BriefingShowcase.tsx` — daily briefing mock with stats strip (4 metrics), priority alerts (rate lock expiring, conditions outstanding, realtor follow-up, client birthday), and voice guide callout explaining how all output runs through the LO's voice guide.
- 3 new ChatShowcase exchange cards: email drafting in your voice, sales coaching (low appraisal scenario), and mass pipeline update (text all realtors with active deals). Grid changed from `md:grid-cols-3` to `sm:grid-cols-2 lg:grid-cols-3` for 6-card layout.

### Changed
- `src/components/mocks/CommsMock.tsx` — added party actions strip (Email all parties, Text borrower, Text realtor, Email title co) between milestone bar and email draft.
- `src/components/mocks/PipelineMock.tsx` — added `docs` field to rows and new Docs column showing K/L/CD badges for uploaded documents.
- `src/components/mocks/RealtorMock.tsx` — added referral pipeline section with 4 realtors, progress bars, and sent/closed/active stats.
- `src/app/page.tsx` — wired SecuritySection (new `#security` section) and BriefingShowcase (new `#briefing` section) into homepage layout.

### Why
User feedback: security story was missing entirely, several real product features weren't represented in mocks (party comms, doc uploads, referral pipeline stats, mass updates), and the AI assistant only showed 3 data-lookup use cases when it also handles email drafting, sales coaching, and bulk actions. This pass fills all those gaps.

## 2026-04-05 — Real screenshots + founder narrative rewrite

### Added
- 8 real LoanOS product screenshots in `public/screenshots/` (pipeline, loan-detail, contact-detail, dashboard, social-editor, social-preview, status-chips, marketing-activity) — extracted from a prior session and committed as canonical product imagery.
- Founder origin story to `CONTEXT.md` as a new "Founder Narrative" section, canonical and quoted in Adam's own framing: $25/$10/$5-an-hour task audit, the decision to build instead of hire another $5k/month admin, and the "no canned anything / learns my voice" thesis. Future copy passes must not dilute this.

### Changed
- `src/components/FeatureTabs.tsx` — replaced the 4 synthetic tactical placeholders with real product screenshots wired through `next/image`. Deleted the ~110-line `TabPlaceholder` function. Added `unoptimized` prop so Next.js does not re-encode the PNGs to lossy WebP — small UI text in the screenshots was rendering blurry at default `q=75`.
- `src/components/SocialShowcase.tsx` — replaced the synthetic `CarouselBuilder` + `ApprovalQueue` mocks with real `social-editor.png` and `social-preview.png` figures, each with a mono caption. Stripped ~210 lines of dead mock code (CAROUSEL_SLIDES, QUEUE_ITEMS, PLATFORM_COLORS, STATUS_STYLES, ApprovalQueue). Same `unoptimized` fidelity fix.
- `src/app/page.tsx` — About section rewritten to carry the founder narrative. Old version focused on "I paid an admin $5k/month"; new version leads with the time-on-money-making-activities motivation, the per-task dollar-per-hour audit, and the "no canned drip campaigns, it sounds like me" thesis. New closing sentence: *"Get the $5-an-hour tasks off your desk so the $500-an-hour ones can happen."*

### Why
Two problems in one pass. (1) The 4 real screenshots were in the repo but visibly blurry — Next.js's default image pipeline re-encodes PNG to WebP at `q=75`, which smears small UI text in tight table rows and email drafts. `unoptimized` serves raw bytes from `/public` so every status chip and email body is crisp. (2) The About section was generic founder boilerplate ("I needed this"). Adam's actual motivation is much sharper and more specific: he audited his own tasks by dollar value and decided to build a system that eats the low-value ones without hiring — while also refusing to ship canned templates because borrowers can smell a content farm. That's the pitch. It belongs on the page.

## 2026-04-05 — Homepage v2: De-AI design pass

De-uniformed the homepage. Audit flagged 7 repeating AI-tell patterns (mono-gold eyebrows on 9 sections, 5 fake-browser chromes, 4 identical numbered cards, `→`/`▸` arrow bullets, detail/+ rotate FAQ, "left-text/right-placeholder" rhythm). Replaced each with a distinct component inspired by 21st.dev patterns but rebuilt locally in the LoanOS tactical aesthetic.

### Added
- `src/components/HeroTerminal.tsx` — animated log stream replacing hero's fake browser chrome. Pure CSS keyframe animation (no client JS), 6 log lines staggered via `animationDelay`, footer stat strip (Loans live / Actions today / Auto-drafted), blinking caret prompt.
- `src/components/BentoFeatures.tsx` — asymmetric 5-card bento grid replacing the 4 identical "01–04" value prop cards. Hero card with CSS bar chart (1,000+ loans shipped trend), `$5k/mo` big-stat card, identity quote card with gold tint, stack-replacement card with strike-through chips, compounding card with gradient day-1→month-6 bar.
- `src/components/ProblemQuotes.tsx` — 3 large numeric callouts (`5 tabs`, `6 months`, `$5k/month`) with short headline + body, vertical dividers. Replaces the 3 identical `→` arrow columns.
- `src/components/FeatureTabs.tsx` — client component with sticky left tab rail + content panel. Replaces the 4 alternating fake-browser-chrome solution rows with a single tabbed showcase. Each of the 4 tabs renders a *different* tactical placeholder (pipeline table, email draft, realtor leaderboard bars, post-close timeline) — no more copy-paste browser chrome.
- `src/components/IntegrationsMarquee.tsx` — infinite CSS marquee strip (15 integrations, 40s loop, pause-on-hover, edge fade masks). Replaces static wrap-around text row.
- `src/components/FAQAccordion.tsx` — client component with smooth height transition using the `grid-template-rows: 0fr→1fr` trick. Chevron icon instead of the `+ rotate-45` cliché. Numbered left rail.
- `src/components/FinalCTA.tsx` — grid-pattern background with radial fade mask, primary/10 radial glow, status pill, 2-line headline. Replaces flat `primary/5` wash.

### Changed
- `src/app/globals.css` — added marketing utilities: `.bg-grid-pattern`, `.bg-grid-pattern-sm`, `.mask-radial-fade`, `@keyframes marquee-scroll`, `@keyframes log-in`, `@keyframes caret-blink`, `.accordion-content` grid-rows transition.
- `src/app/page.tsx` — rewired homepage to use all 7 new components. Stripped the repeating `font-mono text-[11px] uppercase` eyebrow label from 5 of 9 sections (kept only on hero badge + integrations strip + footer) to break the visible pattern. Headlines bumped to `md:text-5xl` with two-line treatment and gold accent phrase. Replaced `▸` bullet list on waitlist benefits with circle-check icons. About callout moved from plain bold to border-left gold accent.
- `.gitignore` — added `.claude/` and `tsconfig.tsbuildinfo`.
- `.claude/launch.json` — fixed PATH export so `preview_start` can find nvm-installed node.

### Why
Prior homepage was structurally solid but visually uniform — every section used the same card shell, same eyebrow label, same bullet ornament. Low variance is the tell that software made it. This pass introduces genuine section-to-section variety: a bento, a stat grid, a tabbed showcase, an accordion, a marquee, a grid-pattern CTA. The component vocabulary is now 7 distinct patterns instead of 1 reused 9 times.

Build passing, deployed via `git push`.

## 2026-04-05 — Full Homepage Build (Pre-Launch v1)

### Added
- `src/components/TopNav.tsx` — fixed top bar mirroring loanos-clone signature (two-tone `Loan`+gold-`OS` logo, IBM Plex Mono, gold-tinted active states, dual CTA: Book demo + Join waitlist). Built in parallel by Codex.
- `src/components/WaitlistForm.tsx` — extracted client island for waitlist signup, styled with LoanOS `--border`, `--surface`, `--input` tokens and `card-glow` hover.
- Full homepage rewrite in `src/app/page.tsx` — server component with 12 sections:
  1. Hero (copy + placeholder product screenshot card with browser chrome)
  2. Identity strip ("Built in the field" bold band)
  3. 4 value props (numbered cards, card-glow hover)
  4. Problem section (3 columns with gold left borders)
  5. Solution/Features section (4 alternating feature blocks with placeholder screenshots)
  6. About section (founder story + headshot placeholder — TODO swap when Gemini photo ready)
  7. Integrations strip (10 partner tools as mono-font text)
  8. Beta CTA band (copy + WaitlistForm side-by-side)
  9. Contact section (pricing inquiries → Calendly or email)
  10. FAQ accordion (8 questions, drafted by subagent in parallel)
  11. Final CTA band ("Stop managing your pipeline in five tabs.")
  12. Footer (logo, NMLS disclosure, nav links)

### Copy (locked with Adam 2026-04-05)
- Hero H1: **Built by LOs. For LOs.**
- Hero sub: AI-powered pipeline, CRM, and automation platform for independent LOs and small brokerages — designed by someone who actually runs one.
- Primary CTA: Join the waitlist · Secondary: Book a demo
- Micro-copy: Launching May 1, 2026 · No spam, no sales calls unless you ask
- Positioning shift: dropped "1,000+ loans closed" personal-founder flex in favor of identity-based trust.

### Notes
- `npm run build` passing, 1.34 kB page bundle, fully static prerendered
- Product screenshots, beta logos, and testimonials are placeholder-only until Adam builds a demo user with synthetic data in loanos-clone
- Founder headshot is placeholder — Adam will generate a fun/casual (backwards hat) photo via Google Gemini and swap in later
- No public pricing tiers per Adam's decision — Contact section uses demo booking + mailto fallback
- Parallelized build: Claude wrote page.tsx + WaitlistForm, Codex wrote TopNav, general-purpose subagent drafted FAQ content

## 2026-04-05 — Context & Design Sync from loanos-clone

### Added
- `CLAUDE.md` — marketing-scoped Claude Code instructions (scope, deploy workflow, design rules, sync rules with loanos-clone)
- `CONTEXT.md` — session context, current state, open questions, sync status
- `CHANGELOG.md` — this file
- `LOANOS_SYSTEM_KNOWLEDGE_BASE.md` — mirrored from loanos-clone, source of truth for product copy claims
- `skills/user/` — 11 skills mirrored from loanos-clone (including `frontend-design`, content skills, strategy-advisor)

### Changed
- `src/app/globals.css` — replaced empty Tailwind stub with full LoanOS design token system (light/dark CSS vars, card-glow, lo-table styles, IBM Plex font imports)
- `tailwind.config.ts` — replaced default stub with LoanOS theme (IBM Plex Sans/Mono + Bebas Neue, color tokens aliased to CSS vars, safelist)

### Notes
- No changes to page.tsx or layout.tsx yet — design application deferred until positioning/pricing decisions confirmed and competitive research completes.
- loanos-clone remains source of truth for design tokens; this repo mirrors.

## 2026-03-26 — Initial Scaffold
- Next.js 14 + Tailwind + TypeScript scaffold
- `src/app/page.tsx` — semantic HTML landing page (nav, hero, problem, features, social-proof, waitlist, footer)
- `src/app/api/waitlist/route.ts` — Supabase waitlist submission endpoint
- Deployed to Vercel
- Added `@supabase/supabase-js` dependency
