'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, whatsappUrl } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

export function Navbar() {
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
    const sections = navLinks.map((link) => document.querySelector(link.href)).filter((el): el is Element => Boolean(el))
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(`#${entry.target.id}`) }), { rootMargin: '-45% 0px -50% 0px' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [menuOpen])

  const ctaHref = whatsappUrl('7675807726', "Hi Pages Pilot Digital! I'd like to get started.")

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav aria-label="Primary" className={cn('mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4', scrolled || menuOpen ? 'border-slate-200/80 bg-white/90 shadow-lg shadow-[#071D49]/10 backdrop-blur-xl' : 'border-transparent bg-white/70 backdrop-blur-lg')}>
        <a href="#top" className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Pages Pilot Digital home"><Logo /></a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => <li key={link.href}><a href={link.href} aria-current={active === link.href ? 'page' : undefined} className={cn('relative rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors outline-none hover:text-[#071D49] focus-visible:ring-2 focus-visible:ring-primary', active === link.href && 'text-[#071D49]')}>{link.label}<span aria-hidden="true" className={cn('absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-[#F4510B] transition-transform duration-300', active === link.href && 'scale-x-100')} /></a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-1.5 rounded-xl bg-[#F4510B] px-4 py-2.5 text-sm font-bold text-[#071D49] transition hover:bg-[#071D49] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:inline-flex">Get started <ArrowUpRight className="size-4" /></a>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#071D49] outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"><span aria-hidden="true">{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</span><span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span></button>
        </div>
      </nav>
      <div id="mobile-menu" hidden={!menuOpen} className="mx-auto mt-2 max-w-7xl rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-xl md:hidden">
        <ul className="flex flex-col">{navLinks.map((link, index) => <li key={link.href}><a href={link.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between rounded-xl px-3 py-3.5 font-display text-lg font-semibold text-[#071D49] outline-none hover:bg-slate-50 focus-visible:bg-slate-50">{link.label}<span className="text-xs font-medium text-slate-400 tabular-nums">0{index + 1}</span></a></li>)}</ul>
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F4510B] px-4 py-3.5 text-sm font-bold text-[#071D49]">Get started <ArrowUpRight className="size-4" /></a>
      </div>
    </header>
  )
}
