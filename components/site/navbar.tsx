'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { useEnquiry } from './enquiry-provider'

export function Navbar() {
  const { openEnquiry } = useEnquiry()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary"
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4',
          scrolled || menuOpen
            ? 'border-border/80 bg-background/80 shadow-[0_8px_30px_-12px] shadow-ink/15 backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <a href="#top" className="rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/40" aria-label="Pages Pilot Digital home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/40',
                  active === link.href && 'text-foreground',
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300',
                    active === link.href && 'scale-x-100',
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openEnquiry()}
            className="group hidden items-center gap-1.5 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-ink-foreground transition-all outline-none hover:bg-primary focus-visible:ring-3 focus-visible:ring-ring/40 active:scale-[0.98] sm:inline-flex"
          >
            {"Let's talk"}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/40 md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-background/95 p-3 shadow-xl shadow-ink/10 backdrop-blur-xl animate-in fade-in-0 slide-in-from-top-2 md:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3.5 font-display text-lg font-semibold outline-none hover:bg-muted focus-visible:bg-muted"
              >
                {link.label}
                <span className="text-xs font-medium text-muted-foreground tabular-nums">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => {
            setMenuOpen(false)
            openEnquiry()
          }}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3.5 text-sm font-semibold text-ink-foreground"
        >
          {"Let's talk on WhatsApp"}
          <ArrowUpRight className="size-4" />
        </button>
      </div>
    </header>
  )
}
