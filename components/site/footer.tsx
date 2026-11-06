import { ArrowUp, MapPin } from 'lucide-react'
import { contacts, formatPhone, generalMessage, navLinks, packages, whatsappUrl } from '@/lib/site-config'
import { EnquiryButton } from './enquiry-button'
import { Logo } from './logo'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-ink text-ink-foreground">
      <div aria-hidden="true" className="bg-grid-ink absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
              Social media marketing for businesses that want to show up consistently and grow with clarity.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-foreground/75">
              <MapPin className="size-4 text-accent" />
              Tadepalligudem, Andhra Pradesh, India
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-ink-foreground/45 uppercase">Explore</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-foreground/80 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.2em] text-ink-foreground/45 uppercase">Packages</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {packages.map((pkg) => (
                <li key={pkg.id}>
                  <EnquiryButton
                    packageId={pkg.id}
                    className="text-left text-sm text-ink-foreground/80 transition-colors hover:text-accent"
                  >
                    {pkg.name} <span className="text-ink-foreground/45">· {pkg.priceLabel}</span>
                  </EnquiryButton>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.2em] text-ink-foreground/45 uppercase">WhatsApp</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {contacts.map((c) => (
                <li key={c.id}>
                  <a
                    href={whatsappUrl(c.number, generalMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-foreground/80 tabular-nums transition-colors hover:text-accent"
                  >
                    {formatPhone(c.number)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-20 font-display text-[clamp(3rem,13vw,10rem)] leading-[0.85] font-extrabold tracking-[-0.05em] text-ink-foreground/[0.07] select-none"
        >
          BUILD. ENGAGE. <span className="text-accent/80">GROW.</span>
        </p>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-ink-foreground/10 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center">
          <p>© {year} Pages Pilot Digital. All rights reserved.</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-ink-foreground/15 px-4 py-2 font-medium text-ink-foreground/80 transition-colors hover:border-accent hover:text-accent"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
