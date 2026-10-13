import { BarChart3, CalendarCheck, Clapperboard, ImageIcon, MessageCircle, UploadCloud } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const included = [
  { icon: ImageIcon, title: 'Original posts', text: 'Fresh, on-brand designs created for you every month.' },
  { icon: Clapperboard, title: 'Monthly reels', text: 'Short-form video in every package to grow your reach.' },
  { icon: CalendarCheck, title: 'Monthly planning', text: 'A content calendar so you always know what is coming.' },
  { icon: UploadCloud, title: 'Done-for-you publishing', text: 'We schedule and publish directly to your platforms.' },
  { icon: BarChart3, title: 'Performance report', text: 'A clear monthly summary of how your content performed.' },
  { icon: MessageCircle, title: 'Direct WhatsApp access', text: 'Three enquiry lines to reach the team quickly.' },
]

const steps = [
  { title: 'Pick a package', text: 'Choose Starter, Growth or Premium Presence.' },
  { title: 'Chat on WhatsApp', text: 'Tell us about your brand, goals and audience.' },
  { title: 'We plan your month', text: 'Receive your strategy and content calendar.' },
  { title: 'Publish & review', text: 'We post, track and report back every month.' },
]

export function Included() {
  return (
    <section id="included" className="relative overflow-hidden bg-ink py-24 text-ink-foreground sm:py-32">
      <div aria-hidden="true" className="bg-grid-ink absolute inset-0" />
      <div aria-hidden="true" className="absolute -top-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          index="03"
          eyebrow="In every package"
          inverted
          title={
            <>
              The essentials,{' '}
              <span className="text-accent">always included.</span>
            </>
          }
          description="Whichever plan you choose, these foundations come standard — so your brand never misses a beat."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60} className="group bg-ink p-7 transition-colors duration-300 hover:bg-ink-foreground/[0.04]">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-ink-foreground/[0.07] text-accent ring-1 ring-ink-foreground/10 transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="size-5" />
                </span>
                <span className="font-display text-sm font-semibold text-ink-foreground/30 tabular-nums">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-foreground/65">{item.text}</p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              How we get you <span className="text-accent">airborne</span>
            </h3>
          </Reveal>
          <ol className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span aria-hidden="true" className="absolute top-5 right-8 left-8 hidden h-px bg-gradient-to-r from-accent via-ink-foreground/20 to-transparent lg:block" />
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 100} className="relative">
                <span className="relative flex size-10 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground ring-8 ring-ink">
                  {i + 1}
                </span>
                <h4 className="mt-5 font-display text-lg font-bold">{step.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-foreground/65">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
