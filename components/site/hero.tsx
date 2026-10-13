import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/site-config'
import { HeroVisual } from './hero-visual'
import { EnquiryButton } from './enquiry-button'
import { WhatsAppIcon } from './whatsapp-icon'

const facts = [
  { value: '16', label: 'posts / month', prefix: 'Up to' },
  { value: '12', label: 'reels / month', prefix: 'Up to' },
  { value: '3', label: 'platforms', prefix: 'Up to' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-24">
      <div aria-hidden="true" className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
      <div aria-hidden="true" className="absolute top-24 -right-40 size-[36rem] rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden="true" className="absolute top-80 -left-40 size-[28rem] rounded-full bg-accent/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 py-1 pr-3 pl-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
            <span className="rounded-full bg-accent px-2 py-0.5 font-semibold text-accent-foreground">New</span>
            Social media management · from ₹2,999/mo
          </span>

          <h1 className="mt-7 font-display text-[clamp(3.25rem,9vw,6.5rem)] leading-[0.88] font-extrabold tracking-[-0.045em]">
            <span className="block animate-in fade-in-0 slide-in-from-bottom-4 duration-700 fill-mode-both">
              {site.tagline[0]}
            </span>
            <span className="relative block w-fit animate-in fade-in-0 slide-in-from-bottom-4 delay-150 duration-700 fill-mode-both">
              <span className="relative z-10">{site.tagline[1]}</span>
              <span aria-hidden="true" className="absolute inset-x-[-0.08em] bottom-[0.08em] z-0 h-[0.32em] -rotate-1 rounded-sm bg-accent" />
            </span>
            <span className="flex items-center gap-3 text-primary animate-in fade-in-0 slide-in-from-bottom-4 delay-300 duration-700 fill-mode-both">
              {site.tagline[2]}
              <span aria-hidden="true" className="flex size-[0.62em] items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ArrowUpRight className="size-[0.42em]" strokeWidth={2.5} />
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground animate-in fade-in-0 delay-500 duration-700 fill-mode-both">
            {site.description}
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row animate-in fade-in-0 slide-in-from-bottom-2 delay-700 duration-700 fill-mode-both">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 text-sm font-semibold text-ink-foreground shadow-[0_14px_30px_-14px] shadow-ink/60 transition-all outline-none hover:-translate-y-0.5 hover:bg-primary hover:shadow-primary/60 focus-visible:ring-3 focus-visible:ring-ring/40 active:translate-y-0"
            >
              View packages
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <EnquiryButton
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-4 text-sm font-semibold text-foreground transition-all outline-none hover:-translate-y-0.5 hover:border-whatsapp hover:shadow-[0_14px_30px_-16px] hover:shadow-whatsapp/60 focus-visible:ring-3 focus-visible:ring-whatsapp/30"
            >
              <WhatsAppIcon className="size-4 text-whatsapp" />
              Chat on WhatsApp
            </EnquiryButton>
          </div>

          <dl className="mt-12 grid w-full max-w-md grid-cols-3 divide-x divide-border border-t border-border pt-6">
            {facts.map((fact) => (
              <div key={fact.label} className="px-4 first:pl-0">
                <dt className="text-xs text-muted-foreground">{fact.prefix}</dt>
                <dd className="mt-1">
                  <span className="font-display text-3xl font-bold tracking-tight">{fact.value}</span>
                  <span className="block text-xs text-muted-foreground">{fact.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
