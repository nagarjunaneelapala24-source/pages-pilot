import Image from 'next/image'
import { Compass, LineChart, Repeat } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const principles = [
  { icon: Repeat, title: 'Consistency over noise', text: 'Regular, planned content that builds familiarity and trust.' },
  { icon: Compass, title: 'Strategy before posting', text: 'Every month starts with a plan tailored to your goals.' },
  { icon: LineChart, title: 'Clarity in reporting', text: 'Simple monthly reports so you see what is working.' },
]

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/5]">
            <Image
              src="/images/studio.png"
              alt="A creative studio desk with a laptop, notebook and plants"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-border bg-card/95 p-5 shadow-2xl shadow-ink/15 backdrop-blur sm:left-auto sm:-right-6 sm:w-72">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-primary uppercase">Our motto</p>
            <p className="mt-2 font-display text-2xl leading-tight font-extrabold tracking-tight">
              Build. Engage.{' '}
              <span className="bg-accent px-1">Grow.</span>
            </p>
          </div>
        </Reveal>

        <div className="pt-6 lg:pt-0">
          <SectionHeading
            index="04"
            eyebrow="About us"
            title={
              <>
                Your co-pilot for <span className="text-primary">social growth.</span>
              </>
            }
            description="Pages Pilot Digital is a digital marketing agency serving businesses in Tadepalligudem and nearby areas. We handle the planning, creation and publishing — you get a feed that works as hard as you do."
          />

          <ul className="mt-10 flex flex-col gap-3">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <div className="group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-sm">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted transition-colors duration-300 group-hover:bg-accent">
                    <p.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
