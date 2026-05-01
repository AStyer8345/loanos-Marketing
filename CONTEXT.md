# LoanOS Marketing — Session Context

**Last updated:** 2026-05-01

## Current State

- **Repo created:** 2026-03-26 (Next.js 14 scaffold + Supabase dep)
- **Deployed:** Vercel (auto-deploy on `main`)
- **Status:** Homepage v3 product-proof pass completed 2026-05-01 — less salesy, screenshot-led, focused on what is built and why it is substantive. Local build green; deploy verification pending push.
- **Demo data:** Supabase demo org (`eeeeeeee-...`) screenshot-ready as of 2026-04-17 in loanos-clone. Five demo screenshots are now live in `public/screenshots/tour-*.png`.
- **Waitlist API:** `src/app/api/waitlist/route.ts` — functional, writes to Supabase

## What Exists

- `src/app/page.tsx` — homepage v3 product tour: hero screenshot, live-feature proof grid, five captioned screenshots, founder note, integrations, security, footer.
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

## Next Steps

1. **Deploy homepage v3** — push to `main`, then verify Vercel reaches `READY`.
2. **Generate Gemini headshot** (backwards hat, casual) — swap into `/about` section placeholder.
3. **First 3 real testimonials** once beta users land — enable a testimonial carousel section (structure not yet built, intentionally).
4. **Launch post-May-1 pivot:** decide whether to add a demo/pricing/contact path now that the homepage is intentionally less salesy.
5. **Contact form backend:** if CTAs return, replace `mailto:` fallback with `/api/contact` route + Supabase `contact_inquiries` table.

## Known Issues

- No `.env.local` present locally — Supabase waitlist submissions will fail in dev until env vars are set
- `next.config.ts` deleted (was duplicate of `next.config.mjs`) — consolidated to `.mjs` only
- Local npm 11 rewrote `package-lock.json` during dependency repair; do not stage unless intentionally normalizing the lockfile.
