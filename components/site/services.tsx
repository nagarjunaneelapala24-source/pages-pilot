import Image from 'next/image'
import {
  BarChart3,
  CalendarRange,
  Clapperboard,
  Images,
  Megaphone,
  ScanSearch,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

type Service = {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

const smallServices: Service[] = [
  {
    title: 'Stories',
    description: 'Up to five days a week of quick, personal stories that keep you top of mind.',
    icon: Sparkles,
  },
  {
    title: 'Strategy & calendars',
    description: 'A clear monthly plan so every post has a purpose and a publishing date.',
    icon: CalendarRange,
  },
  {
    title: 'Profile & competitor review',
    description: 'We study your profile and competitors, then optimize where it counts.',
    icon: ScanSearch,
  },
  {
    title: 'Campaign planning',
    description: 'Monthly promotional campaigns built around launches, offers and seasons.',
    icon: Megaphone,
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="01"
            eyebrow="Services"
            title={
              <>
                Everything your feed needs,{' '}
                <span className="text-muted-foreground">handled monthly.</span>
              </>
            }
          />
          <Reveal delay={100}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              From the first idea to the final report — we plan, design, write, publish and review, so you can focus on running your business.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {/* Posts — feature tile */}
          <Reveal className="md:col-span-4">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px] hover:shadow-ink/30 sm:flex-row sm:gap-8">
              <div className="flex flex-1 flex-col">
                <ServiceIcon icon={Images} />
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">Designed posts</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
                  On-brand static and carousel posts, written with captions and hashtags that speak to your audience.
                </p>
                <p className="mt-auto pt-8 text-sm font-semibold">
                  <span className="font-display text-4xl font-bold tracking-tight">8–16</span>{' '}
                  <span className="text-muted-foreground">posts per month</span>
                </p>
              </div>
              <div className="relative mt-6 aspect-square w-full overflow-hidden rounded-2xl sm:mt-0 sm:w-56">
                <Image
                  src="/images/post-product.png"
                  alt="Example product post with a serum bottle on a sage plinth"
                  fill
                  sizes="(min-width: 640px) 224px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </article>
          </Reveal>

          {/* Reels */}
          <Reveal delay={80} className="md:col-span-2 md:row-span-2">
            <article className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-7 text-ink-foreground transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px] hover:shadow-ink/60">
              <Image
                src="/images/reel-fashion.png"
                alt="Example reel frame of a woman walking past a pink wall"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              <div className="relative">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-transform duration-500 group-hover:rotate-[-8deg]">
                  <Clapperboard className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">Reels that stop the scroll</h3>
                <p className="mt-3 leading-relaxed text-ink-foreground/75">
                  Short-form video concepts, edits and hooks built for reach.
                </p>
                <p className="mt-6 text-sm">
                  <span className="font-display text-4xl font-bold tracking-tight text-accent">4–12</span>{' '}
                  <span className="text-ink-foreground/70">reels per month</span>
                </p>
              </div>
            </article>
          </Reveal>

          {/* Reporting */}
          <Reveal delay={120} className="md:col-span-4">
            <article className="group flex h-full flex-col gap-6 rounded-3xl bg-primary p-7 text-primary-foreground sm:flex-row sm:items-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px] hover:shadow-primary/70">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15 transition-transform duration-500 group-hover:rotate-[-8deg]">
                <BarChart3 className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight">Performance reports & reviews</h3>
                <p className="mt-2 max-w-md leading-relaxed text-primary-foreground/80">
                  A monthly report on what worked — plus review and strategy meetings on Growth and Premium plans.
                </p>
              </div>
            </article>
          </Reveal>

        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {smallServices.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-transform duration-500 group-hover:rotate-[-8deg]">
      <Icon className="size-5" />
    </span>
  )
}

function ServiceCard({ service, horizontal = false }: { service: Service; horizontal?: boolean }) {
  return (
    <article
      className={cn(
        'group flex h-full gap-5 rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_60px_-30px] hover:shadow-ink/30',
        horizontal ? 'flex-col sm:flex-row sm:items-start' : 'flex-col',
      )}
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-muted text-foreground transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-accent">
        <service.icon className="size-5" />
      </span>
      <div>
        <h3 className="font-display text-xl font-bold tracking-tight">{service.title}</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
      </div>
    </article>
  )
}
