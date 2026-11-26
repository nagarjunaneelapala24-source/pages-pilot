import { Camera, ClipboardCheck, Megaphone } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const details = [
  { icon: Camera, title: 'Content Production', text: 'We shoot and edit your content.' },
  { icon: Megaphone, title: 'Advertising Budget', text: 'Advertising budget is separate.' },
  { icon: ClipboardCheck, title: 'Onboarding', text: 'Final scope confirmed before onboarding.' },
]

export function Included() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="02" eyebrow="Important information" title={<>A little clarity, <span className="text-primary">up front.</span></>} description="A few helpful details before we get your brand moving." />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {details.map((detail, index) => (
            <Reveal as="li" key={detail.title} delay={index * 80} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_42px_-38px_rgba(7,29,73,0.5)] transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
              <span className="flex size-14 items-center justify-center rounded-full bg-[#071D49] text-[#F4510B] ring-8 ring-[#071D49]/[0.06]"><detail.icon className="size-6" strokeWidth={1.8} /></span>
              <h3 className="mt-7 font-display text-xl font-bold text-[#071D49]">{detail.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
