import { Check, Sparkles } from 'lucide-react'
import { packages, type Package } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { EnquiryButton } from './enquiry-button'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { WhatsAppIcon } from './whatsapp-icon'
import { ComparisonTable } from './comparison-table'

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-muted/60 py-24 sm:py-32">
      <div aria-hidden="true" className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          index="02"
          eyebrow="Pricing"
          align="center"
          className="mx-auto"
          title={
            <>
              Choose your{' '}
              <span className="relative inline-block">
                <span className="relative z-10">flight plan.</span>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-1 z-0 h-3 -rotate-1 bg-accent sm:h-4" />
              </span>
            </>
          }
          description="Simple monthly packages with no guesswork. Every plan includes original content, publishing and a monthly performance report."
        />

        <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 100} className={cn(pkg.recommended && 'lg:-my-4')}>
              <PricingCard pkg={pkg} />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          All prices are per month in Indian Rupees. Not sure which fits?{' '}
          <EnquiryButton className="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-primary">
            Ask us on WhatsApp
          </EnquiryButton>
          .
        </p>

        <ComparisonTable />
      </div>
    </section>
  )
}

function PricingCard({ pkg }: { pkg: Package }) {
  const featured = Boolean(pkg.recommended)
  const [rupee, amount] = [pkg.priceLabel.slice(0, 1), pkg.priceLabel.slice(1)]

  return (
    <article
      aria-labelledby={`${pkg.id}-name`}
      className={cn(
        'group relative flex h-full flex-col rounded-[2rem] p-7 transition-all duration-500 hover:-translate-y-1.5 sm:p-8',
        featured
          ? 'bg-ink text-ink-foreground shadow-[0_40px_80px_-40px] shadow-primary/70 ring-1 ring-ink'
          : 'border border-border bg-card shadow-sm hover:shadow-[0_30px_60px_-30px] hover:shadow-ink/30',
      )}
    >
      {featured ? (
        <>
          <div aria-hidden="true" className="bg-grid-ink absolute inset-0 rounded-[2rem] [mask-image:linear-gradient(to_bottom,black,transparent_50%)]" />
          <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-bold text-accent-foreground shadow-lg shadow-accent/30">
            <Sparkles className="size-3.5" />
            Recommended
          </span>
        </>
      ) : null}

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <h3 id={`${pkg.id}-name`} className="font-display text-xl font-bold tracking-tight">
            {pkg.name}
          </h3>
          <p className={cn('mt-1 text-sm', featured ? 'text-ink-foreground/65' : 'text-muted-foreground')}>
            {pkg.tagline}
          </p>
        </div>
      </div>

      <div className="relative mt-7 flex items-end gap-1.5">
        <span className={cn('mb-2.5 font-display text-2xl font-semibold', featured ? 'text-accent' : 'text-primary')}>
          {rupee}
        </span>
        <span className="font-display text-6xl leading-none font-extrabold tracking-[-0.04em] tabular-nums">
          {amount}
        </span>
        <span className={cn('mb-1.5 text-sm', featured ? 'text-ink-foreground/60' : 'text-muted-foreground')}>
          /month
        </span>
      </div>

      <dl
        className={cn(
          'relative mt-7 grid grid-cols-3 overflow-hidden rounded-2xl text-center',
          featured ? 'bg-ink-foreground/[0.06] ring-1 ring-ink-foreground/10' : 'bg-muted',
        )}
      >
        {[
          { label: 'Posts', value: pkg.stats.posts },
          { label: 'Reels', value: pkg.stats.reels },
          { label: 'Platforms', value: pkg.stats.platforms.replace(/\D/g, '') },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              'px-2 py-3.5',
              i > 0 && (featured ? 'border-l border-ink-foreground/10' : 'border-l border-border'),
            )}
          >
            <dt className={cn('text-[0.68rem] font-medium tracking-wide uppercase', featured ? 'text-ink-foreground/55' : 'text-muted-foreground')}>
              {stat.label}
            </dt>
            <dd className="mt-0.5 font-display text-2xl font-bold tabular-nums">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <p className={cn('relative mt-6 text-xs font-semibold tracking-[0.16em] uppercase', featured ? 'text-accent' : 'text-primary')}>
        {"What's included"}
      </p>
      <ul className="relative mt-4 flex flex-1 flex-col gap-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-[0.95rem] leading-snug">
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
                featured ? 'bg-accent text-accent-foreground' : 'bg-primary/10 text-primary',
              )}
            >
              <Check className="size-3" strokeWidth={3} />
            </span>
            <span className={featured ? 'text-ink-foreground/90' : undefined}>{feature}</span>
          </li>
        ))}
      </ul>

      <p className={cn('relative mt-7 border-t pt-5 text-xs', featured ? 'border-ink-foreground/10 text-ink-foreground/60' : 'border-border text-muted-foreground')}>
        Best for: <span className={featured ? 'text-ink-foreground' : 'text-foreground'}>{pkg.bestFor}</span>
      </p>

      <EnquiryButton
        packageId={pkg.id}
        aria-label={`Enquire about ${pkg.name} on WhatsApp`}
        className={cn(
          'group/btn relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-semibold transition-all outline-none active:scale-[0.98]',
          featured
            ? 'bg-accent text-accent-foreground hover:bg-whatsapp focus-visible:ring-3 focus-visible:ring-accent/40'
            : 'bg-ink text-ink-foreground hover:bg-whatsapp hover:text-whatsapp-foreground focus-visible:ring-3 focus-visible:ring-ring/40',
        )}
      >
        <WhatsAppIcon className="size-4 transition-transform group-hover/btn:scale-110" />
        Enquire on WhatsApp
      </EnquiryButton>
    </article>
  )
}
