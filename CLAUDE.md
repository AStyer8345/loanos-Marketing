Read /Users/adamstyer/Documents/GOALS.md before starting any session. Interactive sessions must serve current goals — if your task conflicts, log it to TODO.md under NEEDS ADAM and stop. Automated/scheduled tasks continue unless GOALS.md explicitly pauses them.

# LoanOS Marketing — Claude Code Instructions

## Scope

This repo is the **public marketing site** for LoanOS (the SaaS product). It is **not** the LoanOS app itself.

- **App repo (product):** `/Users/adamstyer/Documents/loanos-clone` → `github.com/AStyer8345/loanos`
- **This repo (marketing):** `/Users/adamstyer/Documents/loanos-marketing` → `github.com/AStyer8345/loanos-marketing`

Do not confuse the two. This repo sells LoanOS. The other one *is* LoanOS.

## Read First

1. `CONTEXT.md` — current marketing site status, open tasks, session history
2. `LOANOS_SYSTEM_KNOWLEDGE_BASE.md` — source of truth for what LoanOS actually does. Any copy on this site must match what the product actually delivers. When in doubt, check the knowledge base.
3. Global conventions in `/Users/adamstyer/Documents/CLAUDE.md` (Adam's voice, Salesforce defaults, trigger phrases, etc.) **apply** — don't duplicate them here.

## Deploy Workflow (MANDATORY — every time)

Before **every** `git push`:
1. `npm run build` in `/Users/adamstyer/Documents/loanos-marketing`
2. Fix all errors until build is green
3. Only then push

After **every** `git push`:
1. Use Vercel MCP (`list_deployments` → `get_deployment_build_logs`)
2. If `state: ERROR` — read logs, fix, push again
3. Confirm deployment reaches `state: READY` before ending session

**Never end a session with a failed Vercel deployment.**

## Stack

- Next.js 14 (App Router)
- Tailwind CSS 3.4 + CSS custom properties (design tokens mirrored from loanos-clone)
- Supabase (waitlist submissions, future: auth/billing)
- Vercel (auto-deploy on push to main)
- TypeScript strict mode

## Design System — Mirror LoanOS

The visual language must match the LoanOS app exactly. Both repos share:
- `src/app/globals.css` — CSS custom properties for light/dark mode, card styles, table styles
- `tailwind.config.ts` — font families (IBM Plex Sans/Mono, Bebas Neue), color tokens aliased to CSS vars

**Rule:** If you change design tokens in one repo, sync them to the other the same session. LoanOS is the source of truth — marketing mirrors it, not the other way around.

Core palette:
- **Primary / gold:** `#a4851e` (light) / `#C9A84C` (dark)
- **Background:** `#e8eaef` (light) / `#0c0e14` (dark)
- **Fonts:** IBM Plex Sans (body), IBM Plex Mono (tactical/data), Bebas Neue (display)
- **Aesthetic:** dense, tactical, terminal-inspired, professional — not SaaS-airy, not startup-playful

## Key Rules

- Run `npm run build` before every push (hook will enforce it once installed)
- TypeScript strict — no `any` without `eslint-disable`
- Never commit to `master` — always `main`
- Every copy claim on the site must be verifiable against `LOANOS_SYSTEM_KNOWLEDGE_BASE.md`
- Marketing site **does not** need the product's supabase service role key — only the anon key for waitlist submissions
- Waitlist API is at `src/app/api/waitlist/route.ts`

## What This Repo Does NOT Own

- Product features, schema, n8n workflows → live in loanos-clone
- Adam's personal mortgage business (styermortgage.com) → separate codebase
- Any of Adam's realtor workflows, borrower emails, rate updates → root `/Documents/CLAUDE.md`

## Skills

The `skills/` directory is mirrored from loanos-clone and contains the frontend-design skill + content skills. Use `frontend-design` when building new marketing pages.

## End-of-Session Rule

Every session working on loanos-marketing:
1. Update `CONTEXT.md` with what changed
2. Update `CHANGELOG.md`
3. `git add`, `git commit`, `git push origin main`
4. Verify Vercel deploy is READY
