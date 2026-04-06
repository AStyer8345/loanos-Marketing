type NavKey = 'product' | 'features' | 'about' | 'contact'

type TopNavProps = {
  activeSection?: NavKey
}

const NAV_ITEMS: { label: string; href: string; key: NavKey }[] = [
  { label: 'Product', href: '#features', key: 'product' },
  { label: 'Features', href: '#features', key: 'features' },
  { label: 'About', href: '#about', key: 'about' },
  { label: 'Contact', href: '#contact', key: 'contact' },
]

export default function TopNav({ activeSection }: TopNavProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 h-14 overflow-hidden border-b border-input bg-[var(--bg)] shadow-lg shadow-black/10 dark:shadow-black/40">
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-baseline gap-1.5">
            <span className="font-mono text-lg font-bold tracking-tight text-foreground">
              Loan<span className="text-primary">OS</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.key

              return (
                <a
                  key={item.key}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/15 text-primary'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                  ].join(' ')}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://calendly.com/adamstyer/15minutes"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center rounded-md border border-input px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Book a demo
          </a>
          <a
            href="#waitlist"
            className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </header>
  )
}
