# LoanOS Marketing — Decisions

## [2026-04-05] — No Published Pricing Tiers

**Chose:** Single "Contact Us" section. No tier cards or dollar amounts.
**Over:** Public pricing page with starter/pro/enterprise tiers.
**Why:** Flexibility to negotiate early deals before real customers exist. Revisit post-launch.

## [2026-04-05] — No Product Screenshots Until Demo User Exists

**Chose:** Placeholder cards in screenshot slots. Real screenshots blocked.
**Over:** Screenshots from Adam's live account (contains real borrower PII).
**Why:** PII leaked to `public/screenshots/` once — caught in adversarial review. No screenshots until clean demo account.

## [2026-04-05] — Positioning: "Built by an LO, for LOs"

**Chose:** Identity-based trust line.
**Over:** "1,000+ loans closed" personal-production angle.
**Why:** Site sells the product, not Adam personally.

## [2026-04-05] — Design System Mirrors loanos-clone

**Chose:** Marketing site mirrors loanos-clone's `globals.css` and `tailwind.config.ts` exactly.
**Over:** Custom marketing-specific design system.
**Why:** Zero visual discontinuity between marketing site and product. Dense/tactical aesthetic, not Stripe-airy.

## [2026-04-05] — Dual CTA: Waitlist + Demo

**Chose:** "Join the waitlist" + "Book a demo" as primary CTAs.
**Over:** Free trial flow.
**Why:** Pre-launch — nothing to trial. Waitlist builds a list, demo books a call.
