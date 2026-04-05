// Social showcase — two real product screenshots tell the story:
//
//   Left: the Carousel editor (voice_guide + 7-slide builder + chat to edit)
//   Right: the Facebook post preview overlay — shows what the post will look
//          like before it goes out via Publer
//
// Footer strip: "It remembers every edit" — the voice_feedback learning loop,
// honestly framed as in-context learning, not ML retraining.

import Image from 'next/image'

// ─── Main ───────────────────────────────────────────────────────────────

export default function SocialShowcase() {
  return (
    <div>
      {/* Two real product screenshots: editor → preview */}
      <div className="grid gap-4 md:grid-cols-2">
        <figure className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface2)] shadow-lg shadow-black/20">
          <Image
            src="/screenshots/social-editor.png"
            alt="LoanOS social post editor — 7-slide carousel for &lsquo;5 closing cost surprises&rsquo; with voice guide, approve/publish, and chat-to-edit"
            width={1916}
            height={910}
            className="h-auto w-full"
          />
          <figcaption className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80">
            Editor · voice guide + chat-to-edit
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface2)] shadow-lg shadow-black/20">
          <Image
            src="/screenshots/social-preview.png"
            alt="LoanOS social post preview modal — Facebook/Instagram/LinkedIn tabs showing the carousel post exactly as it will publish"
            width={1917}
            height={934}
            className="h-auto w-full"
          />
          <figcaption className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80">
            Preview · FB / IG / LI before you publish
          </figcaption>
        </figure>
      </div>

      {/* Learning loop footer strip */}
      <div className="mt-6 rounded-lg border border-primary/20 bg-primary/[0.04] px-5 py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <svg
              aria-hidden
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v4" />
              <path d="M12 18v4" />
              <path d="M4.93 4.93l2.83 2.83" />
              <path d="M16.24 16.24l2.83 2.83" />
              <path d="M2 12h4" />
              <path d="M18 12h4" />
              <path d="M4.93 19.07l2.83-2.83" />
              <path d="M16.24 7.76l2.83-2.83" />
            </svg>
            <div>
              <div className="text-sm font-semibold text-foreground">
                It remembers every edit.
              </div>
              <div className="text-xs text-muted-foreground">
                Every time you rewrite an opening line or cut a cliché, the system captures the change and feeds it into the next draft. Not fine-tuning — in-context learning that compounds.
              </div>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-primary/80 md:self-center">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--primary)]" />
            Voice · Edits · Reposts
          </div>
        </div>
      </div>
    </div>
  )
}
