# LoanOS System Knowledge Base
> Master reference for all AI agents, research sessions, and build sessions.
> Updated: 2026-04-19 (accuracy pass — fixed false chat/briefing claims; CSP/HSTS done; drip UI exists with Coming Soon)
> Source of truth: CONTEXT.md (session history) + this file (architectural constants)

> **Marketing rule:** Any claim on loanos-marketing must match a ✅ LIVE row in the "Feature Reality Map" below. Aspirational features (🟡 SCHEMA-ONLY / 🔴 NOT BUILT) are NOT marketable until promoted.

---

## What LoanOS Is

LoanOS is a mortgage intelligence platform built by Adam Styer (Senior LO, Austin TX, NMLS #513013).
- **Phase 1–2**: Personal production tool replacing Jungo CRM, Mortgage Coach, scattered Claude workflows
- **Phase 3–4**: Licensed SaaS for other mortgage loan officers (multi-tenant)
- **Not** a consumer product. Built for LOs who originate 10–30 loans/month.

---

## Feature Reality Map (verified 2026-04-05)

Every marketing claim must map to a ✅ row. Verified by direct source inspection in `/Users/adamstyer/Documents/loanos-clone`.

### ✅ LIVE — Marketable

#### Scenario Builder + Public Share Pages
- **Code:** `src/app/dashboard/scenarios/`, `src/app/share/[token]/page.tsx`
- **Schema:** `supabase/migrations/018_scenarios.sql` — `scenarios` table with `share_token` column
- **What it does:** LO builds a purchase or refi scenario (multiple loan options, down payment variations, buy-down costs). Outputs break-even analysis, equity curves, total-cost-of-ownership side-by-side.
- **Share flow:** Each scenario generates a token URL (`/share/<token>`) — no login required for borrower or realtor. Renders with `OptionCardsGrid`.
- **SEO / SEM angle:** Public share pages are indexable and brandable. Every scenario shared is a crawlable page tied to Adam's org slug — an asset that accumulates instead of dying in an email.
- **Positioning:** Mortgage Coach replacement. Faster, cheaper, built inline with the pipeline, no separate login.

#### Social Media Dashboard
- **Code:** `src/app/dashboard/marketing/_components/SocialTab.tsx`, `SocialDraftDetail.tsx`
- **Publisher:** Publer multi-platform (Instagram, LinkedIn, Facebook, Google Business Profile)
- **Approval queue:** Draft → review → approve → schedule. `status` field on drafts.
- **AI generation:** Claude writes drafts against the org's voice guide.
- **Marketable claim:** "One inbox for every platform. Review, edit, approve, schedule."

#### Voice Guide
- **Code:** `src/app/dashboard/marketing/_components/VoiceGuideEditor.tsx`
- **Storage:** Single markdown text field per org in `social_settings`
- **How it's used:** Injected into the system prompt for every AI draft (social posts, emails, scenarios descriptions).
- **Marketable claim:** "Teach it how you talk once. It writes in your voice from then on."

#### Learning Loop (edit capture → in-context learning)
- **Code:** `src/app/api/chat/social/route.ts` (lines 126–135 load `voice_feedback`), `SocialDraftDetail.tsx` (lines 27–35 capture edits)
- **How it works:** When Adam edits an AI-generated post, the system records a diff note like `[DATE] EDITED "[title]": Original started with: "..." — Changed to start with: "..."` into a `voice_feedback` text field. That field is prepended to the system prompt on the next generation.
- **NOT:** Fine-tuning. NOT model retraining. Pure in-context prompt injection — but it works, and it compounds.
- **Marketable claim:** "It remembers every edit. The more you use it, the less you have to." (honest — do not imply ML training)

#### AI Chatbot — LO-Specialized Assistant
- **Code:** `src/app/api/chat/route.ts` (main mortgage chat), `src/app/api/chat/social/route.ts` (social chat)
- **Frontend:** Multi-round tool use (up to 4 rounds per message), markdown rendering via `react-markdown`
- **Two live tools:**
  1. `query_lender_database` — structured Supabase lookups against the `lenders` table. "Who's our AE at PennyMac?" "Which lenders do DSCR 1-4?"
  2. `query_mortgage_knowledge_base` — queries NotebookLM notebook `3489e177` (12 product guide sources). "What are Deephaven's HELOC FICO minimums?"
- **Conversational capabilities** (no tool needed — Claude does this in-context): self-employment income calculation (SAM 1084, Schedule C, K-1 methods), general underwriting Q&A (DTI, reserves, LTV, guideline lookups), drafting email text, suggesting contact fields from natural language
- **System prompt:** Built dynamically from `system_prompts` table per org; includes voice guide, org context, loan officer role framing
- **Marketable claim:** "Trained for loan officers. It knows non-QM guidelines, calculates self-employment income, and knows every lender you work with — because you taught it."

#### Lender Knowledge System (feeds the chatbot)
- **Code:** `/dashboard/lenders` list + `/dashboard/lenders/[id]` detail, `LenderCard.tsx`, `LenderFilters.tsx`
- **Data layer:** `lenders` table in Supabase — 13+ lenders loaded as of 2026-04-04
  - **Loaded lenders:** Deephaven, Ameris Bank, Champions Funding, FCM TPO, NewRez, PennyMac, Mega Capital Funding, Plaza Home Mortgage, Huntington Bank, The Loan Store, plus more
  - Each lender row: AE contacts (name, phone, email), channel (Broker/Correspondent), NMLS, specialty products array, guideline notes (timestamped entries), fees
  - **Products indexed:** Digital HELOC, DSCR 1-4, DSCR 5-9, Non-QM A/A+, Bank Statement, Asset Depletion, ITIN, Jumbo Non-QM, 1099 Only, P&L, Foreign National, Physician Loans, HomeStyle Renovation, etc.
- **NotebookLM deep knowledge base:** Notebook `3489e177`, 12 text sources with full product guides (Deephaven Product Guide, Champions Funding Matrix, Ameris Non-QM Guide, NewRez SmartSelf, NewRez RezPool Plus, PennyMac Non-QM A/A+, Mega Capital MVP, Huntington Doctors Only, Plaza HomeStyle, The Loan Store TLS Flex, FCM TPO)
- **Daily auto-ingest pipeline:** n8n workflow `hHXpKUirhnBCnQTO` "LoanOS — Lender Email Ingest", **active**
  - Daily 8am CT trigger → scans Outlook inbox (last 24h) → filters by 14 lender domains + guideline keywords → Claude extracts structured JSON → Supabase lender record auto-updates (replaces AE contacts on change, appends new products, appends timestamped guideline notes) → activity_log entry
- **Marketable claim:** "Your broker panel, live. Every morning at 8am, LoanOS reads your lender emails and rewrites your knowledge base. You stop tracking guideline changes — it does it for you."

#### Security Architecture (13 verified claims)
- **RLS on every org-scoped table** — 15 tables filtered by `get_user_org_id()`
- **Zero null org rows** in any production table (migration 053 enforced NOT NULL on 8 tables)
- **SSR-aware auth** via `@supabase/ssr` — no token leakage in client bundles
- **Service role key scoped** — only used server-side, every query explicitly filtered by `organization_id`
- **Signed URLs for document access** — no public bucket exposure
- **Audit log is append-only** — `activity_log` has no UPDATE/DELETE policies
- **No secrets in source** — all credentials via Vercel env vars
- **AES-256-GCM encryption** for stored Arive API credentials (per-org)
- **Three-layer webhook verification** for `/api/arive-webhook`: (1) unique path slug per org, (2) shared secret header, (3) payload identity check
- **5 security headers** set on every response (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection)
- **Rate limiting** on public API routes
- **SQL injection prevention** via Supabase parameterized client — no raw SQL
- **No shared data between orgs** — architecturally impossible via RLS
- **CSP added** (2026-04-05) — `default-src 'self'`; `connect-src` scoped to Supabase + Vercel analytics; still carries `unsafe-inline` in script-src pending nonce rollout
- **HSTS added** (2026-04-05) — `max-age=63072000; includeSubDomains; preload`
- **Known gaps (do NOT market):** No CSRF tokens, no IP allowlists

### 🟡 SCHEMA ONLY — Aspirational, DO NOT MARKET

#### Drip Campaigns
- **Schema + UI tab:** Schema exists; `/dashboard/drip-campaigns` tab exists with "Coming Soon" banner
- **Missing:** No scheduler, no sender — campaigns moving to Workflow DevKit post-Task 23 cutover
- **Verdict:** Market as "Coming Soon" with the tab badge already in FeatureTabs. No "active drip" copy until WDK cutover ships.

#### Encompass / Google Calendar / Calendly integrations
- **Status:** Schema references or placeholder columns only, no working sync
- **Verdict:** Remove from integrations marquee or mark "coming soon"

### 🔴 NOT BUILT — Do not reference

- **AI voice chat (STT/TTS):** Text chat is live, voice I/O is not. Remove any "voice" references from marketing.
- **Integrations that exist in marketing marquee but have no code:** Gmail, Twilio, Jungo (concept folded into Salesforce), ShareFile, Mortgage Coach
- **Chat mass-update tool:** Conversational bulk operations ("mark all my 2023 loans as closed") not built — needs confirmation UX
- **PDF lender guideline upload:** No upload flow. NotebookLM ingestion is manual during Claude Code sessions; daily email ingest (n8n) handles incremental updates

### Integration Truth Table

| Integration | Status | Notes |
|---|---|---|
| Arive | ✅ LIVE | Webhook via Zapier middleware, 3-layer auth, AES-256-GCM stored credentials |
| Outlook | ✅ LIVE | n8n sync for drafts (Zapier hook creates drafts) |
| Salesforce (Jungo) | ✅ LIVE (limited) | Admin CSV import only — not realtime. Jungo IS a Salesforce overlay, so list it once as "Salesforce / Jungo import." |
| Supabase | ✅ LIVE | Core DB — always on |
| n8n | ✅ LIVE | Automation layer |
| Mailchimp | ✅ LIVE | One-way send for rate updates + newsletters |
| Zapier | ✅ LIVE | Middleware for Arive + Outlook draft creation |
| Publer | ✅ LIVE | Social posting (not usually shown as integration — it's part of the dashboard) |
| Claude API | ✅ LIVE | AI layer |
| Encompass | 🟡 Schema only | Remove or "coming soon" |
| Google Calendar | 🟡 Schema only | Remove or "coming soon" |
| Calendly | 🟡 Schema only | Remove or "coming soon" |
| Gmail | 🔴 Not built | Remove from marquee |
| Twilio | 🔴 Not built | Remove from marquee |
| ShareFile | 🔴 Not built | Remove from marquee |
| Mortgage Coach | 🔴 Not built | Scenario builder REPLACES it — don't list as integration |

---

## Repositories & Deployment

| Repo | Host | URL | Stack |
|------|------|-----|-------|
| `AStyer8345/loanos` (main) | Vercel | loanos.vercel.app | Next.js 14, Supabase, Tailwind |
| `styer-mortgage-site` | Netlify | styermortgage.com | Plain HTML/CSS/JS + Netlify Functions |

- Vercel team: `astyer8345s-projects` — Team ID: `team_aJNpxKvLlNTUiDdWTdhX0Vgf`
- Vercel project ID: `prj_AmhlkvLIUzzlqpOtCrUy9PCyPiSx`
- Supabase project ID: `uuqedsvjlkeszrbwzizl`
- Local repo: `/Users/adamstyer/Documents/loanos-clone`

---

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Frontend | Next.js 14 (App Router) | TypeScript strict mode |
| Hosting | Vercel | Auto-deploy on push to main |
| Database | Supabase (Postgres) | Types in `src/lib/database.types.ts` |
| Auth | Supabase email/password | SSR-aware via `@supabase/ssr` |
| File Storage | Supabase Storage | `documents` bucket (private), `social-assets` (public) |
| Automation | n8n | Instance: styer.app.n8n.cloud |
| AI | Claude API (Anthropic) | claude-sonnet-4-5, no date suffix |
| Email | Outlook via n8n + Zapier | Zapier hook for draft creation |
| Marketing Email | Mailchimp | List IDs in Netlify env vars |
| LOS | Arive | Webhook + CSV import |
| Billing | Stripe | Phase 4 — not yet built |

**UI Design Language**: Dark monochromatic, gold accent `#C9A84C`, IBM Plex Mono + Sans, Lucide icons, Tailwind slate palette. Linear/Attio-inspired light mode for some sections.

---

## Database Schema — Core Tables

All 15 data tables are org-scoped with `organization_id` (or `org_id`) + RLS policies.

### Tenant Model
- Every tenant = one **organization** (`organizations` table)
- Every user = one **profile** (`profiles` table, linked to `organizations` via `org_id`)
- RLS function: `get_user_org_id()` — all policies filter by this
- One org per LO by default. Team plan allows multiple users per org.

### Key Tables

| Table | Purpose | Org Column |
|-------|---------|-----------|
| `organizations` | Tenant record — name, NMLS, logo, brand_color, plan, slug | — (is the org) |
| `profiles` | User record — links auth user to org | `org_id` |
| `org_settings` | Per-tenant integration config (webhooks, Arive, n8n, etc.) | `org_id` |
| `loans` | 816 historical + live Arive-synced loans | `organization_id` |
| `contacts` | 2,441 borrowers + realtors + others | `organization_id` |
| `activity_log` | Immutable audit log — all loan/contact events | `organization_id` |
| `documents` | PDF uploads, linked to loans | `organization_id` |
| `email_drafts` | Outlook draft queue | `organization_id` |
| `scenarios` | Scenario builder outputs | `organization_id` |
| `todo_items` | Task queue | `organization_id` |
| `chat_sessions` | AI chat history | `organization_id` |
| `contact_activity` | Contact-level touchpoint log | `organization_id` |
| `marketing_activity_log` | MCC send/call history | `organization_id` |
| `mcc_state` | Marketing Command Center state | `org_id` |
| `user_settings` | Per-user preferences | user-scoped |
| `system_prompts` | AI prompt templates | `org_id` |
| `loan_milestone_events` | Arive milestone triggers | via loans join |
| `milestone_communications` | Agent-generated email drafts | via loans join |

### Migration History (applied through 2026-03-25)
- Migrations 001–053 applied to production Supabase
- Migration 053: NOT NULL constraint on 8 tables (loans, contacts, documents, email_drafts, scenarios, todo_items, contact_activity, chat_sessions)
- `activity_log.organization_id` still nullable — trigger in place, NOT NULL pending WF1/WF2 cloud push

---

## Multi-Tenancy Status (as of 2026-03-25)

**Complete:**
- All 15 tables org-scoped with RLS (migrations 029–053)
- 0 null org rows in all tables
- Onboarding flow: collects Tier 1 data, creates org, links profile, seeds org_settings, redirects to dashboard
- Isolation verification script: `scripts/verify-tenant-isolation.ts`
- daily-briefing milestone queries org-scoped (fixed 2026-03-25)

**Pending (blockers):**
- Adam must push WF1 (`1tagvoU0UXtdDiMY`) to n8n cloud — produces null activity_log rows until pushed
- Adam must push WF2 (`9JyzzwKac8v3uQ7d`) to n8n cloud — same
- `activity_log.organization_id` NOT NULL — safe to add after WF1/WF2 confirmed pushed
- Performance page uses localStorage with real borrower names — must move to Supabase before licensing
- Plan selection UI in onboarding deferred (defaults to 'starter')

---

## n8n Workflows

| Workflow | ID | Status | Purpose |
|----------|----|--------|---------|
| Arive New Loan → Supabase | `1tagvoU0UXtdDiMY` | ✅ Tested, needs cloud push | WF1: new loan upsert + contact + activity_log |
| Arive Status Update → Supabase | `9JyzzwKac8v3uQ7d` | ✅ Tested, needs cloud push | WF2: loan status + activity_log |
| Milestone Communication Agent | `1hjOmS7inZcxEJQr` | ✅ Tested | Arive milestone → Claude → Outlook draft |
| Referral Intro Email | `YbgDnTpPdefcazKy` | ✅ Tested | n8n → Claude → Zapier → Outlook draft |
| Pre-Approval Email | `utMvZpkdRwIRZ51u` | ✅ Tested | n8n → Claude → Zapier → Outlook draft |
| Final CD Email | `SkzrWeR0bHZs8kWX` | Untested | CD closing disclosure email |
| New Application Received | `cWESnXXy9UOLB13q` | Untested | New app intake |
| Contract Received | `UfNcdpoVKQZqy0fj` | Phase 2 | Contract PDF → Claude extraction → Outlook |
| Refi Intake Email | `yCTydQ7RfZK4DyUg` | Untested | Refi intake |
| Inbound Email → Supabase | `qgb99Eh2ziy0INMk` | Inactive | Needs Outlook credential |
| Weekly Social Post | `eJG4wckrj6SmSpm1` | Fixed, inactive | Needs Gemini key + Google Sheets |
| Review Request Email | `AK1fBcaX1cPcdlGx` | Fixed, inactive | Needs SMTP + review URLs |

### n8n Code Patterns (ALWAYS use these)
- Webhook body in downstream nodes: `$('Webhook').first().json` (NOT `.json.body`)
- Claude model: `claude-sonnet-4-5` — NO date suffix ever
- Claude response: `$json.content[0].text`
- Supabase headers: both `apikey` AND `Authorization: Bearer <service_role_key>` required
- HTTP body for JSON POST/PATCH: use `contentType: "raw"` + `rawContentType: "application/json"` + `JSON.stringify(...)` in body

---

## API Routes (Key Endpoints)

| Route | Auth | Purpose |
|-------|------|---------|
| `/api/arive-webhook` | `ARIVE_WEBHOOK_SECRET` header | Receives Arive loan events |
| `/api/contacts/web-lead` | Bearer `LOANOS_AGENT_SECRET` | Inbound leads from styermortgage.com |
| `/api/agents/milestone` | Bearer `MILESTONE_WEBHOOK_SECRET` | Milestone communication agent trigger |
| `/api/chat` | Supabase auth | AI chat (Claude) |
| `/api/todos` | Supabase auth | Todo CRUD |
| `/api/org/create` | Supabase auth | Onboarding — create org + profile link |
| `/api/outlook-sync` | `OUTLOOK_SYNC_SECRET` | Inbound email sync (decommissioned) |

**Decommissioned:** Outlook Email Sync (`JMmstRl2C5ylmuIY`) — Azure App Registration never completed. Do not reference as active.

---

## Phase Roadmap

### Phase 1 — Foundation ✅ COMPLETE
Supabase schema, auth, PDF upload, dashboard, contacts, loans (816 imported)

### Phase 2 — Automation (~95% complete)
Live: contract automation, marketing command center, contacts module, loans module, Arive webhook, daily briefing, AI chat (v4.6 with attachments + voice)

Needs go-live steps:
- Milestone Communication Agent (run migration 010, add 2 Vercel env vars)
- AI Chat (add `ANTHROPIC_API_KEY` to Vercel)
- Outlook integration (Azure app reg + 7 env vars + migration 008) — low priority, possibly skip

### Phase 3 — Multi-Tenant SaaS (in progress)
Multi-tenancy foundation complete. Remaining: performance page localStorage fix, plan selection UI, activity_log NOT NULL after WF1/WF2 push

### Phase 4 — Licensing
Stripe billing, white-label (slug-based custom domains), admin dashboard for tenant management. Not started.

---

## Architectural Decisions (Locked)

- **One org per LO** by default. Team plan = multiple users per org.
- **Loan import = n8n WF1/WF2 only** — authoritative writers from Arive. Never import loans via direct SQL in production.
- **n8n stays per-tenant** — each org gets their own webhook endpoints.
- **No Microsoft Azure / Outlook Email Sync** — decommissioned. Not part of the product.
- **No shared data between orgs** — ever. No marketplace features in Phase 3.
- **Service role key** in API routes is acceptable server-side BUT must always scope queries by `organization_id` explicitly.
- **Org slug** (`organizations.slug`) reserved for future white-label URLs (e.g., `styer-mortgage`).
- **Stripe** is Phase 4 — `organizations.plan` stored as a string for now (`'starter'`, `'pro'`, `'team'`).
- **Build must pass before every push** — `npm run build` enforced by pre-push git hook.

---

## What NOT to Build (Anti-patterns)

- Do not add Azure/Outlook Email Sync features
- Do not add Stripe integration before Phase 4
- Do not touch the public-facing website (separate repo: styer-mortgage-site on Netlify)
- Do not use `@vercel/postgres` or `@vercel/kv` (sunset) — use Neon/Upstash via Marketplace
- Do not use `createClient` from `@supabase/supabase-js` directly in frontend — use `@/lib/supabase/client`
- Do not bypass RLS with service role key without explicit `organization_id` filter

---

## Key File Locations

| File | Purpose |
|------|---------|
| `CONTEXT.md` | Session history + current status (read before every session) |
| `CLAUDE.md` | Claude Code instructions + deploy workflow |
| `src/lib/database.types.ts` | Supabase generated types |
| `src/lib/supabase/client.ts` | SSR-aware browser client |
| `src/lib/supabase/server.ts` | Server-side client |
| `src/lib/formatters.ts` | Shared date/currency formatters |
| `supabase/migrations/` | All migrations (001–053+) |
| `scripts/verify-tenant-isolation.ts` | Isolation test script |
| `docs/multitenancy-checklist.md` | Running multi-tenancy status |
| `tasks/enterprise/` | Enterprise agent system files |
| `tasks/run-logs/` | Daily session logs |
| `tasks/todo.md` | Current task backlog |
