// Marketing tab mock — rate update composer + teaser email + blog output.
// Shows the full flow: enter rates → AI generates → ships to email + website + social.

import Image from 'next/image'

export default function MarketingMock() {
  return (
    <div className="space-y-4">
      {/* Rate update composer — real PII-safe screenshot */}
      <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface2)] shadow-xl shadow-black/30">
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2.5">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground">
            Rate Update Composer
          </span>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgb(16,185,129)]" />
            <span className="font-mono text-[10px] text-emerald-400">Ready to generate</span>
          </div>
        </div>
        <Image
          src="/screenshots/marketing-rate-update.png"
          alt="LoanOS rate update composer — enter today's rates, select audience and tone, AI generates the update"
          width={1560}
          height={688}
          className="h-auto w-full"
          unoptimized
        />
      </div>

      {/* Output: what ships */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Teaser email */}
        <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/15 text-primary">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-foreground">Teaser Email</span>
          </div>
          <div className="space-y-1 font-mono text-[10px] text-muted-foreground">
            <p className="font-semibold text-foreground">Rates moved today — here&apos;s what it means</p>
            <p>30-yr conventional dropped to 6.875%. If you&apos;re under contract or thinking about it, this is worth a conversation.</p>
            <p className="text-primary">→ Read the full update</p>
          </div>
        </div>

        {/* Blog post */}
        <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/15 text-primary">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.855z"/></svg>
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-foreground">Website Post</span>
          </div>
          <div className="space-y-1 font-mono text-[10px] text-muted-foreground">
            <p className="font-semibold text-foreground">Austin Mortgage Rates — April 2026</p>
            <p>Fed futures corrected, month-end positioning unwound, and rates improved. Here&apos;s what it means for buyers...</p>
            <p className="text-muted-foreground/50">→ styermortgage.com/blog</p>
          </div>
        </div>

        {/* Social post */}
        <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/15 text-primary">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-foreground">Social + GBP</span>
          </div>
          <div className="space-y-1 font-mono text-[10px] text-muted-foreground">
            <p className="font-semibold text-foreground">Auto-posted to 4 platforms</p>
            <div className="flex flex-wrap gap-1">
              {['Facebook', 'Instagram', 'LinkedIn', 'Google'].map((p) => (
                <span key={p} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-1.5 py-0.5 text-[8px]">
                  {p}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground/50">Next AM via Publer</p>
          </div>
        </div>
      </div>
    </div>
  )
}
