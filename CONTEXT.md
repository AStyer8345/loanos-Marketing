# LoanOS Marketing — Session Context

**Last updated:** 2026-04-05

## Current State

- **Repo created:** 2026-03-26 (Next.js 14 scaffold + Supabase dep)
- **Deployed:** Vercel (auto-deploy on `main`)
- **Status:** Structural landing page only. Zero visual design applied (globals.css was empty until 2026-04-05).
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

- Full homepage v1 in LoanOS aesthetic — TopNav (Codex), WaitlistForm (Claude), page.tsx with 12 sections (Claude), FAQ content (subagent)
- Build passing, deployed via `git push`

## Next Steps

1. **Build demo user with synthetic data in loanos-clone** — then swap placeholder screenshots on marketing homepage for real UI
2. **Generate Gemini headshot** (backwards hat, casual) — swap into `/about` section placeholder
3. **First 3 real testimonials** once beta users land — enable a testimonial carousel section (structure not yet built, intentionally)
4. **Launch post-May-1 pivot:** replace "Join the waitlist" primary CTA with "Start free trial" once product is live, add `/pricing` page with tiers from research
5. **Contact form backend:** current Contact section uses `mailto:` fallback. Post-launch, replace with `/api/contact` route + Supabase `contact_inquiries` table.

## Known Issues

- No `.env.local` present locally — Supabase waitlist submissions will fail in dev until env vars are set
- `next.config.ts` AND `next.config.mjs` both exist — should be consolidated to `.mjs` only
