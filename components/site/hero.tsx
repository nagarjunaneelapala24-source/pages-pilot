import { ArrowDown, ArrowUpRight, Play, Sparkles } from 'lucide-react'
import { PlatformIcon } from './platform-icon'
import { site, whatsappUrl } from '@/lib/site-config'
import { Logo } from './logo'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden="true" className="absolute -right-36 -top-20 size-[36rem] rounded-full bg-[#F4510B]/[0.07] blur-3xl" />
      <div aria-hidden="true" className="absolute -left-44 bottom-0 size-[30rem] rounded-full bg-[#071D49]/[0.045] blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col items-start">
          <Logo />
          <span className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#071D49]/10 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-[#071D49] shadow-sm"><Sparkles className="size-4 text-[#F4510B]" />Social media, piloted with purpose</span>
          <p className="mt-9 text-sm font-bold uppercase tracking-[0.18em] text-[#F4510B]">{site.tagline}</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(3.2rem,8vw,6.25rem)] font-extrabold leading-[0.95] tracking-[-0.055em] text-[#071D49]">
            OUR MONTHLY <span className="text-[#F4510B]">PACKAGES</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">Explore the monthly social media packages from Pages Pilot Digital.</p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#pricing" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#F4510B] px-6 py-4 text-sm font-bold text-[#071D49] shadow-lg shadow-[#F4510B]/20 transition hover:-translate-y-0.5 hover:bg-[#071D49] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Explore packages <ArrowDown className="size-4" /></a>
            <a href={whatsappUrl('7675807726', "Hi Pages Pilot Digital! I'd like to get started.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-[#071D49]/15 bg-white px-6 py-4 text-sm font-bold text-[#071D49] transition hover:border-[#F4510B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Get started <ArrowUpRight className="size-4" /></a>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500"><span className="flex -space-x-2"><span className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#071D49] text-[#F4510B]"><PlatformIcon platform="Instagram" className="size-4" /></span><span className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#F4510B] text-[#071D49]"><Play className="size-4 fill-current" /></span></span><span>Content made for the way your brand shows up.</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[34rem]" aria-label="Social content creation illustration">
          <div className="absolute -left-3 -top-10 z-10 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-[#071D49]/10 sm:-left-8"><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-[#F4510B]/10 text-[#F4510B]"><PlatformIcon platform="Instagram" className="size-5" /></span><span><span className="block text-xs font-semibold text-[#071D49]">Content, in motion</span><span className="text-[0.68rem] text-slate-500">Creative social presence</span></span></div></div>
          <div className="relative aspect-[0.95] overflow-hidden rounded-[2.5rem] bg-[#071D49] p-6 shadow-2xl shadow-[#071D49]/20 sm:aspect-[1.12] sm:p-8">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 0.7px, transparent 0.7px)', backgroundSize: '18px 18px' }} />
            <div className="relative flex h-full flex-col justify-between rounded-[1.8rem] border border-white/15 bg-gradient-to-br from-white/[0.12] to-transparent p-6 sm:p-8">
              <div className="flex items-start justify-between"><span className="rounded-full bg-white/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/80">Your digital co-pilot</span><ArrowUpRight className="size-6 text-[#F4510B]" /></div>
              <div className="relative mx-auto flex aspect-square w-[74%] items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.06]">
                <div className="absolute inset-4 rounded-[1.6rem] border border-dashed border-white/20" />
                <div className="flex size-32 items-center justify-center rounded-[2rem] bg-[#F4510B] shadow-[0_0_70px_rgba(244,81,11,0.28)] sm:size-40"><svg viewBox="0 0 24 24" aria-hidden="true" className="size-16 text-[#071D49] sm:size-20" fill="none"><path d="M3 11.5 20.5 4l-5.5 16-3.2-6.3L3 11.5Z" fill="currentColor" /><path d="m11.8 13.7 3.5-3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" /></svg></div>
                <span className="absolute -right-5 top-8 flex size-12 items-center justify-center rounded-2xl bg-white text-[#F4510B] shadow-xl"><Play className="size-5 fill-current" /></span><span className="absolute -bottom-4 left-6 flex size-11 items-center justify-center rounded-2xl bg-[#F4510B] text-[#071D49] shadow-xl"><Sparkles className="size-5" /></span>
              </div>
              <div className="flex items-end justify-between"><div><p className="text-xs font-medium text-white/50">PAGES PILOT</p><p className="mt-1 font-display text-2xl font-bold text-white">Create. Connect.</p></div><span className="text-sm font-semibold text-[#F4510B]">Grow <ArrowUpRight className="inline size-4" /></span></div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute -bottom-5 -right-3 -z-10 size-32 rounded-full border-[18px] border-[#F4510B]/10 sm:-right-9" />
        </div>
      </div>
    </section>
  )
}
