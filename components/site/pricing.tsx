import Image from 'next/image'
import { Check, Megaphone, Sparkles } from 'lucide-react'
import { adPackages, packages, type AdPackage, type Package } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { EnquiryButton } from './enquiry-button'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { WhatsAppIcon } from './whatsapp-icon'

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-muted/60 py-24 sm:py-32">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading index="02" eyebrow="Advertisement creation" align="center" className="mx-auto" title={<>Make your next <span className="text-primary">campaign impossible to miss.</span></>} description="Professional ad creatives for launches, offers and everyday visibility. Choose a single ad or a complete campaign package." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {adPackages.map((pkg, i) => <Reveal key={pkg.id} delay={i * 70}><AdCard pkg={pkg} /></Reveal>)}
        </div>
        <div className="mt-8 flex flex-col gap-3 rounded-3xl border border-primary/15 bg-primary/5 p-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <p><strong className="text-foreground">Advertising budget is separate.</strong> Media spend is paid directly to the advertising platform.</p>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm">Transparent pricing</span>
        </div>

        <div className="mt-28"><SectionHeading index="03" eyebrow="Monthly social media packages" align="center" className="mx-auto" title={<>A smarter way to <span className="text-primary">show up every month.</span></>} description="Strategy, creative and consistency — packaged for the stage your business is in." /></div>
        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-5">
          {packages.map((pkg, i) => <Reveal key={pkg.id} delay={i * 70}><SocialCard pkg={pkg} /></Reveal>)}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <aside className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Add-on services</p><ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2"><li className="flex justify-between gap-4 border-b border-border pb-2"><span>Extra reel</span><strong className="text-foreground">₹999</strong></li><li className="flex justify-between gap-4 border-b border-border pb-2"><span>Extra post</span><strong className="text-foreground">₹499</strong></li><li className="flex justify-between gap-4 border-b border-border pb-2"><span>Story set</span><strong className="text-foreground">₹499</strong></li><li className="flex justify-between gap-4 border-b border-border pb-2"><span>Ad creative</span><strong className="text-foreground">₹1,499</strong></li></ul></aside>
          <aside className="rounded-3xl bg-[#091B3C] p-7 text-white shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF8A3D]">Important notes</p><ul className="mt-4 grid gap-2 text-sm leading-relaxed text-white/70"><li>• Content approval is required before publishing.</li><li>• Advertising budget and influencer charges are separate.</li><li>• Prices are in Indian Rupees and subject to applicable taxes.</li></ul></aside>
        </div>
      </div>
    </section>
  )
}

function AdCard({ pkg }: { pkg: AdPackage }) {
  return <article className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-border bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"><div className="relative aspect-[1.25] overflow-hidden"><Image src={pkg.image} alt={`${pkg.name} example`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#091B3C]/70 to-transparent" /><span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-xl bg-[#FF8A3D] text-[#091B3C]"><Megaphone className="size-5" /></span></div><div className="flex flex-1 flex-col p-5"><h3 className="font-display text-xl font-bold text-[#091B3C]">{pkg.name}</h3><p className="mt-2 min-h-10 text-sm leading-relaxed text-muted-foreground">{pkg.tagline}</p><div className="mt-5 flex items-baseline gap-2"><span className="font-display text-3xl font-extrabold text-primary">{pkg.priceLabel}</span><span className="text-xs text-muted-foreground">{pkg.billing}</span></div><ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-border pt-4 text-sm">{pkg.features.map((feature) => <li key={feature} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{feature}</li>)}</ul><EnquiryButton enquiryMessage={`Hi Pages Pilot Digital! I’m interested in the ${pkg.name} (${pkg.priceLabel} ${pkg.billing}). Could you share more details?`} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#091B3C] px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary"><WhatsAppIcon className="size-4" />Enquire now</EnquiryButton></div></article>
}

function SocialCard({ pkg }: { pkg: Package }) {
  return <article className={cn('group flex h-full flex-col rounded-[1.7rem] border p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl', pkg.recommended ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20 lg:-translate-y-3' : 'border-border bg-white')}>
    {pkg.recommended && <span className="mb-4 flex w-fit items-center gap-1 rounded-full bg-[#FF8A3D] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[#091B3C]"><Sparkles className="size-3" />Most popular</span>}
    <h3 className="font-display text-xl font-bold">{pkg.name}</h3><p className={cn('mt-2 min-h-10 text-sm leading-relaxed', pkg.recommended ? 'text-white/75' : 'text-muted-foreground')}>{pkg.tagline}</p><div className="mt-5 flex items-baseline gap-1"><span className="font-display text-3xl font-extrabold">{pkg.priceLabel}</span><span className={cn('text-xs', pkg.recommended ? 'text-white/70' : 'text-muted-foreground')}>{pkg.billing}</span></div><ul className="mt-5 flex flex-1 flex-col gap-2 border-t pt-4 text-sm"><li className={cn('font-semibold', pkg.recommended ? 'border-white/15' : 'border-border')}>Includes:</li>{pkg.features.map((feature) => <li key={feature} className="flex gap-2"><Check className={cn('mt-0.5 size-4 shrink-0', pkg.recommended ? 'text-[#FF8A3D]' : 'text-primary')} />{feature}</li>)}</ul><EnquiryButton packageId={pkg.id} className={cn('mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition', pkg.recommended ? 'bg-[#FF8A3D] text-[#091B3C] hover:bg-white' : 'bg-[#091B3C] text-white hover:bg-primary')}><WhatsAppIcon className="size-4" />Enquire</EnquiryButton></article>
}
