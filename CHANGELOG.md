# LoanOS Marketing — Changelog

All notable changes to the LoanOS marketing site.

## [Unreleased]

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
