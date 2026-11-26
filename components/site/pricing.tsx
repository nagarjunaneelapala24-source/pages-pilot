import { BarChart3, Camera, Check, Clapperboard, Megaphone, Smartphone, Sparkles } from 'lucide-react'
import { PlatformIcon } from './platform-icon'
import { packages, whatsappUrl, type Package } from '@/lib/site-config'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const packageIcons = [Smartphone, Clapperboard, null, BarChart3, Camera]
const packageMessages = (pkg: Package) => `Hi Pages Pilot Digital! I'm interested in the ${pkg.name} package. Please DM me to get started.`

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#f7f8fb] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="Monthly packages"
          align="center"
          className="mx-auto"
          title={<>Choose your <span className="text-primary">package.</span></>}
          description="Explore the services included in each monthly social media package."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, index) => {
            const Icon = packageIcons[index]
            return (
              <Reveal key={pkg.id} delay={index * 60}>
                <article className={`group relative flex h-full min-h-[27rem] flex-col overflow-hidden rounded-[1.6rem] border bg-white shadow-[0_14px_44px_-36px_rgba(7,29,73,0.5)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_-34px_rgba(7,29,73,0.42)] ${pkg.recommended ? 'border-primary/30 ring-1 ring-primary/10' : 'border-slate-200'}`}>
                  <div className={`flex min-h-28 items-center justify-between px-6 py-5 ${index % 2 === 0 ? 'bg-[#071D49]' : 'bg-[#F4510B]'}`}>
                    <div className="flex items-center gap-4">
                      <span className={`font-display text-5xl font-extrabold tracking-[-0.06em] ${index % 2 === 0 ? 'text-[#F4510B]' : 'text-[#071D49]'}`}>0{index + 1}</span>
                      <div className="h-12 w-px bg-white/20" />
                      <div>
                        <span className={`text-[0.65rem] font-bold uppercase tracking-[0.18em] ${index % 2 === 0 ? 'text-white/55' : 'text-[#071D49]/65'}`}>Monthly package</span>
                        {pkg.recommended && <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-white"><Sparkles className="size-3" />Premium selection</span>}
                      </div>
                    </div>
                    <span className={`flex size-14 shrink-0 items-center justify-center gap-1 rounded-2xl ${index % 2 === 0 ? 'bg-white/10 text-[#F4510B]' : 'bg-white/25 text-[#071D49]'}`} aria-hidden="true">{index === 2 ? <><PlatformIcon platform="Instagram" className="size-5" /><PlatformIcon platform="Facebook" className="size-5" /></> : Icon ? <Icon className="size-7" strokeWidth={1.7} /> : null}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-[#071D49]">{pkg.name}</h3>
                    <ul className="mt-5 flex flex-1 flex-col gap-3 border-t border-slate-100 pt-5 text-sm leading-relaxed text-slate-700">
                      {pkg.features.map((feature) => <li key={feature} className="flex items-start gap-3"><Check className="mt-0.5 size-4 shrink-0 text-[#F4510B]" strokeWidth={2.5} /><span>{feature}</span></li>)}
                    </ul>
                    <a href={whatsappUrl('7675807726', packageMessages(pkg))} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#071D49] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#F4510B] hover:text-[#071D49] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                      Ask about this package <Megaphone className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                  <PlatformIcon platform="Instagram" className="pointer-events-none absolute -right-5 -bottom-7 size-24 rotate-12 text-[#071D49]/[0.035] transition-transform duration-500 group-hover:-rotate-6" />
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
