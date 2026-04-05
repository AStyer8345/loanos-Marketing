// Infinite marquee strip of integration names. Replaces the plain
// wrap-around text row. Pure CSS animation (see .marquee-track in globals.css).
// Track is duplicated so the translateX(-50%) creates a seamless loop.

const INTEGRATIONS = [
  'Arive', 'Encompass', 'Outlook', 'Gmail', 'Google Calendar',
  'Calendly', 'Twilio', 'Mortgage Coach', 'Mailchimp', 'Zapier',
  'Salesforce', 'Jungo', 'ShareFile', 'Supabase', 'n8n',
]

function MarqueeRow() {
  return (
    <>
      {INTEGRATIONS.map((name) => (
        <div
          key={name}
          className="flex shrink-0 items-center gap-2 px-8 font-mono text-sm font-semibold tracking-wide text-muted-foreground/80"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/50" />
          {name}
        </div>
      ))}
    </>
  )
}

export default function IntegrationsMarquee() {
  return (
    <div className="relative">
      {/* Edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent"
      />

      <div className="overflow-hidden">
        <div className="marquee-track flex w-max">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </div>
  )
}
