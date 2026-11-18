'use client'

import Image from 'next/image'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, Camera,
  Check, Clapperboard, Compass, UsersRound as Facebook, Film, Camera as Instagram, Lightbulb,
  Megaphone, MessageCircle, MousePointer2, Palette, Phone,
  Play, Rocket, ShoppingBag, Sparkles, Store, Utensils, Video, WandSparkles,
  CirclePlay as Youtube,
} from 'lucide-react'

const whatsapp = (message: string) =>
  `https://wa.me/917675807726?text=${encodeURIComponent(message)}`
const defaultMessage = "Hi Pages Pilot Digital! I'd love to grow my business online."
const instagramUrl = 'https://www.instagram.com/pagespilotdigital/'
const phoneUrl = 'tel:+919059097320'

const services = [
  { icon: Camera, title: 'Social media management', text: 'Plan, post and engage with your audience, consistently.' },
  { icon: Palette, title: 'Content creation', text: 'Photography, graphics, videos and reels made for your brand.' },
  { icon: ShoppingBag, title: 'Promotional content', text: 'Offers, product stories, launches and brand moments.' },
  { icon: Sparkles, title: 'Festival campaigns', text: 'Fresh creative for festivals, occasions and local celebrations.' },
  { icon: Megaphone, title: 'Ads & campaigns', text: 'Purposeful Instagram and Facebook campaigns that get noticed.' },
  { icon: BarChart3, title: 'Brand growth', text: 'Build visibility, reach and stronger customer engagement.' },
]

const plans = [
  { id: '01', name: 'SPARK', total: '6', reels: '2', posts: '4', desc: ['Creative content ideas', 'Basic promotional content', 'Consistent brand presentation'], accent: 'orange', note: 'Creative ideas to start building your digital presence.' },
  { id: '02', name: 'GROW', total: '12', reels: '4', posts: '8', desc: ['Creative captions', 'Promotional content', 'Product and service highlights', 'Brand engagement content'], accent: 'blue', note: 'Build a recognizable rhythm with content that connects.' },
  { id: '03', name: 'ELEVATE', total: '16', reels: '6', posts: '10', desc: ['Premium creative concepts', 'Promotional campaigns', 'Brand storytelling', 'Creative visual content'], accent: 'navy', note: 'Thoughtful, elevated creative for your next chapter.' },
  { id: '04', name: 'DOMINATE', total: null, reels: null, posts: null, desc: ['Multiple ad creative variations', 'Promotional Reels', 'Campaign-focused posts', 'Different creative hooks', 'Special offers and festival campaigns', 'Brand awareness creatives'], accent: 'cream', note: 'Flexible creative built around your campaign goals.' },
]

const adServices = [
  { icon: Lightbulb, label: 'Creative concepts' },
  { icon: Video, label: 'Professional production' },
  { icon: WandSparkles, label: 'Expert editing' },
  { icon: BarChart3, label: 'Results-driven strategy' },
]

const adFormats = [
  { title: 'Basic Ad Reel', image: '/images/reel-fashion.png', text: 'Short-form promo with a simple concept, script, shoot and edit.' },
  { title: 'Standard Promotional Ad', image: '/images/post-product.png', text: 'Multiple shots, polished transitions, captions and editing.' },
  { title: 'Premium Creative Ad', image: '/images/studio.png', text: 'A detailed concept, storyboard, cinematic shots and clear call-to-action.' },
  { title: 'Campaign Ad Creatives', image: '/images/post-cafe.png', text: 'Creative variations, fresh hooks, offers and campaign-ready content.' },
]

const steps = [
  ['01', 'Understand your business', 'Learn about your business, audience and goals.'],
  ['02', 'Plan the content', 'Shape creative ideas, content direction and campaigns.'],
  ['03', 'Create & shoot', 'Produce photos, videos, reels and promotional material.'],
  ['04', 'Edit & design', 'Add editing, graphics, captions, subtitles, music and branding.'],
  ['05', 'Publish & grow', 'Prepare content to publish and build your online presence.'],
]

const sectors = [
  { name: 'Restaurants', icon: Utensils }, { name: 'Cafés', icon: Store },
  { name: 'Salons', icon: Sparkles }, { name: 'Clothing stores', icon: ShoppingBag },
  { name: 'Bakeries', icon: Store }, { name: 'Gyms', icon: Rocket },
  { name: 'Supermarkets', icon: ShoppingBag }, { name: 'Local businesses', icon: Compass },
]

const reasons = [
  'Creative content with a clear point of view', 'An organized, hassle-free process',
  'A consistent social media presence', 'Professional editing and design',
  'Business-focused strategy', 'Timely content delivery',
  'Personalized creative ideas', 'Growth-oriented marketing',
]

function SectionTitle({ kicker, title, intro, light = false }: { kicker: string; title: React.ReactNode; intro?: string; light?: boolean }) {
  return <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
    <p className={`mb-4 text-xs font-bold uppercase tracking-[.22em] ${light ? 'text-orange-300' : 'text-orange-600'}`}>{kicker}</p>
    <h2 className={`font-display text-3xl font-semibold tracking-[-.045em] sm:text-4xl md:text-5xl ${light ? 'text-white' : 'text-[#071A46]'}`}>{title}</h2>
    {intro && <p className={`mx-auto mt-5 max-w-xl text-base leading-7 ${light ? 'text-blue-100/75' : 'text-slate-600'}`}>{intro}</p>}
  </div>
}

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const isCampaign = plan.total === null
  const featured = plan.accent === 'navy'
  const exploreMessage = whatsapp(`Hi Pages Pilot Digital! I'd like to explore the ${plan.name} ${isCampaign ? 'custom campaign' : 'content plan'}. Please share more details.`)
  const startMessage = whatsapp(`Hi Pages Pilot Digital! I'd like to get started with the ${plan.name} ${isCampaign ? 'custom campaign' : 'content plan'}.`)
  return <article className={`group relative flex flex-col overflow-hidden rounded-[1.6rem] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-32px_rgba(7,26,70,.3)] sm:p-7 ${featured ? 'border-[#071A46] bg-[#071A46] text-white' : plan.accent === 'orange' ? 'border-orange-200 bg-[#fffaf5] text-[#071A46]' : plan.accent === 'blue' ? 'border-blue-200 bg-[#f5f9ff] text-[#071A46]' : 'border-slate-200 bg-white text-[#071A46]'}`}>
    <div className="flex items-center justify-between">
      <span className={`text-xs font-bold tracking-[.16em] ${featured ? 'text-orange-300' : 'text-slate-400'}`}>PLAN {plan.id}</span>
      {isCampaign && <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[.1em] text-orange-700">Custom Campaign</span>}
      {!isCampaign && featured && <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[.1em] text-orange-200">Creative partner</span>}
    </div>
    <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{plan.name}</h3>
    <p className={`mt-1 min-h-10 text-sm leading-5 ${featured ? 'text-blue-100/70' : 'text-slate-500'}`}>{plan.note}</p>
    <div className={`my-6 rounded-2xl p-5 ${featured ? 'bg-white/[.08]' : 'bg-white/75'}`}>
      {isCampaign ? <><p className="font-display text-2xl font-semibold leading-tight">Custom<br />Campaign</p><p className="mt-2 text-xs font-semibold uppercase tracking-[.14em] text-orange-600">Built around your goals</p></> : <>
        <div className="flex items-end gap-2"><span className={`font-display text-6xl font-bold leading-none tracking-[-.07em] ${plan.accent === 'orange' ? 'text-orange-500' : featured ? 'text-orange-300' : 'text-[#123C83]'}`}>{plan.total}</span><span className="pb-1 text-[11px] font-bold uppercase tracking-[.14em]">contents</span></div>
        <div className={`mt-4 grid grid-cols-2 gap-2 border-t pt-3 ${featured ? 'border-white/15' : 'border-slate-200'}`}>
          <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[.08em] ${featured ? 'text-blue-100' : 'text-slate-600'}`}><Film className="size-3.5 text-orange-500" /> {plan.reels} Reels</span>
          <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[.08em] ${featured ? 'text-blue-100' : 'text-slate-600'}`}><Camera className="size-3.5 text-orange-500" /> {plan.posts} Posts</span>
        </div>
      </>}
    </div>
    <ul className="flex flex-1 flex-col gap-3">
      {plan.desc.map((item) => <li key={item} className={`flex items-start gap-2.5 text-sm ${featured ? 'text-blue-50/85' : 'text-slate-600'}`}><Check className="mt-0.5 size-4 shrink-0 text-orange-500" strokeWidth={2.5} />{item}</li>)}
    </ul>
    <div className="mt-7 grid gap-2">
      <a href={exploreMessage} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-semibold transition-colors ${featured ? 'border-white/20 text-white hover:bg-white/10' : 'border-[#071A46]/15 text-[#071A46] hover:border-orange-400 hover:bg-orange-50'}`}>
        Explore Plan <ArrowUpRight className="size-4" />
      </a>
      <a href={startMessage} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition-colors ${featured ? 'bg-orange-500 text-white hover:bg-orange-400' : 'bg-[#071A46] text-white hover:bg-[#123C83]'}`}>
        <MessageCircle className="size-4" /> Get Started
      </a>
    </div>
  </article>
}

export function MarketingLanding() {
  return <main className="min-h-screen overflow-hidden bg-white text-[#071A46]">
    <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 sm:px-8 lg:px-12">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Pages Pilot Digital home">
          <span className="flex size-10 items-center justify-center rounded-xl bg-orange-500 text-white"><Compass className="size-5" /></span>
          <span className="leading-tight"><span className="block text-sm font-extrabold uppercase tracking-[.08em]">Pages Pilot</span><span className="text-[10px] font-semibold uppercase tracking-[.28em] text-slate-500">Digital</span></span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {[['Services','#services'],['Content plans','#plans'],['Ad creation','#ads'],['Our process','#process']].map(([label,href]) => <a key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-orange-600">{label}</a>)}
          <a href={whatsapp(defaultMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#071A46] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123C83]">Let&apos;s talk <ArrowUpRight className="size-4" /></a>
        </div>
        <a href={whatsapp(defaultMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#071A46] px-4 py-2.5 text-xs font-semibold text-white lg:hidden"><MessageCircle className="size-4" /> WhatsApp</a>
      </nav>
    </header>

    <section id="home" className="relative isolate overflow-hidden bg-[#f7faff] px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:min-h-[740px] lg:px-12 lg:pt-40">
      <div className="pointer-events-none absolute -right-20 top-20 size-[460px] rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-36 bottom-0 size-[340px] rounded-full bg-orange-100/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
        <div className="relative z-10">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#123C83]"><span className="size-2 rounded-full bg-orange-500" /> We pilot your digital presence</p>
          <h1 className="max-w-3xl font-display text-[clamp(3.15rem,7vw,6rem)] font-semibold leading-[.94] tracking-[-.07em] text-[#071A46]">More visibility.<br />More engagement.<br /><span className="text-orange-500">More customers.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">We help local businesses grow online with creative content, smart social media management and targeted digital advertising.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600">Explore our services <ArrowDown className="size-4" /></a>
            <a href={whatsapp(defaultMessage)} target="_blank" rel="noreferrer" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-[#071A46]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#071A46] transition hover:-translate-y-0.5 hover:border-[#071A46]/40"><MessageCircle className="size-4 text-[#168b58]" /> Contact us on WhatsApp</a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-slate-500"><span className="flex -space-x-2"><span className="flex size-8 items-center justify-center rounded-full border-2 border-[#f7faff] bg-[#123C83] text-white"><Camera className="size-3.5" /></span><span className="flex size-8 items-center justify-center rounded-full border-2 border-[#f7faff] bg-orange-500 text-white"><Film className="size-3.5" /></span><span className="flex size-8 items-center justify-center rounded-full border-2 border-[#f7faff] bg-[#d7e6ff] text-[#071A46]"><Megaphone className="size-3.5" /></span></span><span>Creative thinking, made for local business.</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px] lg:mr-0">
          <div className="absolute -right-1 top-12 z-10 hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl shadow-blue-950/10 backdrop-blur sm:block animate-[float_6s_ease-in-out_infinite]"><span className="flex items-center gap-2 text-xs font-semibold text-[#071A46]"><span className="flex size-8 items-center justify-center rounded-xl bg-orange-100 text-orange-600"><Rocket className="size-4" /></span> Content that moves brands forward</span></div>
          <div className="relative mx-auto aspect-[.94] w-[min(100%,460px)] rounded-[2.5rem] border-[8px] border-[#071A46] bg-[#071A46] p-2 shadow-[0_35px_80px_-28px_rgba(7,26,70,.45)] sm:rotate-2">
            <div className="relative h-full overflow-hidden rounded-[1.85rem] bg-[#eaf2ff]">
              <Image src="/images/post-cafe.png" alt="Cafe promotional content created for social media" fill priority sizes="(max-width: 768px) 90vw, 460px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A46]/85 via-transparent to-[#071A46]/10" />
              <div className="absolute left-4 right-4 top-4 flex items-center justify-between rounded-2xl bg-white/90 px-3 py-2.5 backdrop-blur"><span className="flex items-center gap-2"><span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-white"><Instagram className="size-4" /></span><span><b className="block text-[11px] text-[#071A46]">Your next post</b><span className="block text-[9px] text-slate-500">Made to stop the scroll</span></span></span><span className="text-xs font-bold text-slate-500">•••</span></div>
              <div className="absolute bottom-5 left-5 right-5 text-white"><span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.15em]"><Play className="size-3 fill-current" /> Your story, in motion</span><p className="font-display text-3xl font-semibold leading-tight tracking-tight">Make them<br />stop & look.</p><p className="mt-2 text-xs text-white/80">Thoughtful creative for your everyday business.</p></div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-3 flex items-center gap-3 rounded-2xl border border-white bg-white p-3.5 shadow-xl shadow-blue-950/10 sm:-left-8"><span className="flex size-10 items-center justify-center rounded-xl bg-[#eaf2ff] text-[#123C83]"><MousePointer2 className="size-5" /></span><span><b className="block text-xs">Scroll-stopping ideas</b><span className="text-[10px] text-slate-500">Strategy meets creativity</span></span></div>
          <div className="absolute -right-4 bottom-24 hidden size-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/25 sm:flex animate-[float_7s_ease-in-out_1s_infinite]"><Clapperboard className="size-6" /></div>
        </div>
      </div>
    </section>

    <section className="border-y border-blue-100 bg-white px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"><h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">Your local business deserves a strong online presence.</h2><p className="max-w-lg text-sm leading-6 text-slate-500">We handle your digital marketing, so you can focus on what you do best — running your business.</p></div></section>

    <section id="services" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-7xl"><SectionTitle kicker="What we do" title={<>The right content.<br className="hidden sm:block" /> The right kind of attention.</>} intro="From the first idea to the final post, we build a digital presence that feels unmistakably yours." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(({icon:Icon,title,text},i)=><article key={title} className="group rounded-[1.4rem] border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_20px_55px_-35px_rgba(7,26,70,.4)] sm:p-7"><span className={`mb-6 flex size-12 items-center justify-center rounded-2xl ${i%2===0?'bg-orange-50 text-orange-600':'bg-blue-50 text-[#123C83]'} transition duration-300 group-hover:rotate-[-5deg] group-hover:scale-105`}><Icon className="size-5" /></span><h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p><span className="mt-6 flex items-center gap-1 text-xs font-bold text-[#123C83]">Explore service <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></span></article>)}</div>
    </div></section>

    <section id="plans" className="scroll-mt-20 bg-[#f5f8fd] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-7xl"><SectionTitle kicker="Content made with intention" title="Our Creative Content Plans" intro="Creative ideas. Consistent content. Stronger brands." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{plans.map((plan)=><PlanCard key={plan.id} plan={plan} />)}</div>
      <p className="mt-7 text-center text-xs text-slate-500">Every plan is a creative content program, built to make your brand more consistent and recognizable.</p>
    </div></section>

    <section id="ads" className="scroll-mt-20 bg-[#071A46] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-7xl"><SectionTitle kicker="Advertisement creation services" title={<>Big ideas, built<br className="hidden sm:block" /> for the scroll.</>} intro="High-quality creative ads that convert attention into customers." light />
      <div className="mb-12 grid grid-cols-2 gap-3 lg:grid-cols-4">{adServices.map(({icon:Icon,label})=><div key={label} className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-center sm:flex-row sm:justify-center sm:text-left"><Icon className="size-5 text-orange-300" /><span className="text-xs font-semibold sm:text-sm">{label}</span></div>)}</div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{adFormats.map((item,i)=><article key={item.title} className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[.06] transition duration-300 hover:-translate-y-1 hover:bg-white/[.1]"><div className="relative aspect-[1.25] overflow-hidden"><Image src={item.image} alt={`${item.title} creative example`} fill sizes="(max-width: 768px) 90vw, 280px" className="object-cover transition duration-500 hover:scale-105" /><span className="absolute left-3 top-3 rounded-full bg-[#071A46]/80 px-3 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-orange-200">0{i+1} / creative</span></div><div className="p-5"><h3 className="font-display text-lg font-semibold">{item.title}</h3><p className="mt-2 text-xs leading-5 text-blue-100/65">{item.text}</p></div></article>)}</div>
      <div className="mt-9 text-center"><a href={whatsapp("Hi Pages Pilot Digital! I'd like to talk about an advertisement creative.")} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-400">Talk about your campaign <ArrowUpRight className="size-4" /></a></div>
    </div></section>

    <section id="process" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-7xl"><SectionTitle kicker="Our creative process" title="A clear path from idea to impact." intro="Good work comes from a thoughtful process. Here’s how we bring your business to life online." />
      <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">{steps.map(([num,title,text],i)=><article key={num} className="relative"><div className="mb-5 flex items-center gap-3"><span className={`flex size-12 shrink-0 items-center justify-center rounded-2xl font-display text-sm font-bold ${i===2?'bg-orange-500 text-white':'bg-[#eaf2ff] text-[#123C83]'}`}>{num}</span>{i<steps.length-1&&<span aria-hidden="true" className="hidden h-px flex-1 bg-blue-200 lg:block" />}</div><h3 className="font-display text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></article>)}</div>
    </div></section>

    <section className="bg-[#f5f8fd] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-orange-600">Made for your neighborhood</p><h2 className="font-display text-3xl font-semibold tracking-[-.045em] sm:text-4xl">We help local businesses grow.</h2><p className="mt-5 max-w-md text-base leading-7 text-slate-600">Every business has a story. We help the right people find yours with creative that feels local, relevant and real.</p><a href={whatsapp(defaultMessage)} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#123C83] hover:text-orange-600">Tell us about your business <ArrowRight className="size-4" /></a></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{sectors.map(({name,icon:Icon},i)=><div key={name} className={`flex min-h-32 flex-col justify-between rounded-2xl p-4 transition hover:-translate-y-1 ${i%3===0?'bg-[#071A46] text-white':i%3===1?'bg-white text-[#071A46]':'bg-[#eaf2ff] text-[#071A46]'}`}><Icon className={`size-5 ${i%3===0?'text-orange-300':'text-orange-500'}`} /><span className="font-display text-sm font-semibold sm:text-base">{name}</span></div>)}</div></div>
    </div></section>

    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-orange-600">Why Pages Pilot Digital</p><h2 className="font-display text-3xl font-semibold tracking-[-.045em] sm:text-4xl">A creative partner who gets your business.</h2><p className="mt-5 text-base leading-7 text-slate-600">Thoughtful creative, clear communication and a reliable process — all working together for your online presence.</p></div><div className="grid gap-3 sm:grid-cols-2">{reasons.map((reason,i)=><div key={reason} className="flex items-center gap-3 rounded-xl border border-slate-200/80 p-4"><span className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${i%2===0?'bg-orange-50 text-orange-600':'bg-blue-50 text-[#123C83]'}`}><BadgeCheck className="size-4" /></span><span className="text-sm font-medium text-slate-700">{reason}</span></div>)}</div></div></section>

    <section className="overflow-hidden bg-[#f5f8fd] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-7xl"><SectionTitle kicker="A little creative inspiration" title="Made to look good in the feed." intro="A peek at the kind of visual storytelling we bring to your brand." />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">{[
        {src:'/images/post-cafe.png',label:'Food & café stories',ratio:'aspect-[.82]'},
        {src:'/images/reel-fashion.png',label:'Promotional reels',ratio:'aspect-[.82]'},
        {src:'/images/post-product.png',label:'Product features',ratio:'aspect-[.82]'},
        {src:'/images/studio.png',label:'Brand-led visuals',ratio:'aspect-[.82]'},
      ].map((item,i)=><figure key={item.label} className={`group relative overflow-hidden rounded-2xl ${item.ratio} ${i%2===1?'md:mt-8':''}`}><Image src={item.src} alt={item.label} fill sizes="(max-width: 768px) 45vw, 300px" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#071A46]/75 via-transparent to-transparent" /><figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2 text-white"><span className="text-sm font-semibold">{item.label}</span><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur"><ArrowUpRight className="size-4" /></span></figcaption></figure>)}</div>
    </div></section>

    <section id="contact" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071A46] px-6 py-12 sm:px-12 sm:py-16 lg:px-16"><div className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full bg-[#123C83] blur-3xl" /><div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-orange-300">Let&apos;s make something meaningful</p><h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-[-.05em] text-white sm:text-5xl">Your next great idea starts with a hello.</h2><p className="mt-5 max-w-xl text-sm leading-6 text-blue-100/70">Tell us what you&apos;re building. We&apos;ll help you find the right content plan for your business.</p><div className="mt-8 flex flex-wrap gap-3"><a href={whatsapp(defaultMessage)} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-400"><MessageCircle className="size-4" /> Chat on WhatsApp <ArrowUpRight className="size-4" /></a><a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"><Instagram className="size-4" /> Follow on Instagram</a></div></div><div className="flex flex-col gap-3 lg:min-w-56"><a href={phoneUrl} className="flex items-center gap-3 rounded-xl bg-white/8 px-4 py-3 text-sm text-white transition hover:bg-white/15"><Phone className="size-4 text-orange-300" /><span><span className="block text-[10px] text-blue-100/55">Call us</span>90590 97320</span></a><a href="https://www.youtube.com/@pagespilotdigital" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-white/8 px-4 py-3 text-sm text-white transition hover:bg-white/15"><Youtube className="size-4 text-orange-300" /><span>pagespilotdigital</span></a><a href="https://www.facebook.com/pagespilotdigital" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-white/8 px-4 py-3 text-sm text-white transition hover:bg-white/15"><Facebook className="size-4 text-orange-300" /><span>pagespilotdigital</span></a></div></div></div></section>

    <footer className="border-t border-slate-200 px-5 pb-24 pt-9 sm:px-8 sm:pb-9 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><a href="#home" className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-xl bg-orange-500 text-white"><Compass className="size-4" /></span><span><b className="block text-xs font-extrabold uppercase tracking-[.08em]">Pages Pilot Digital</b><span className="text-[10px] text-slate-500">We pilot your digital presence.</span></span></a><nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-slate-500">{[['Home','#home'],['Services','#services'],['Content plans','#plans'],['Ad creation','#ads'],['Contact','#contact']].map(([label,href])=><a key={href} href={href} className="transition hover:text-orange-600">{label}</a>)}</nav><div className="flex gap-3"><a aria-label="Instagram" href={instagramUrl} target="_blank" rel="noreferrer" className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-[#071A46] hover:bg-orange-100"><Instagram className="size-4" /></a><a aria-label="Facebook" href="https://www.facebook.com/pagespilotdigital" target="_blank" rel="noreferrer" className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-[#071A46] hover:bg-orange-100"><Facebook className="size-4" /></a><a aria-label="YouTube" href="https://www.youtube.com/@pagespilotdigital" target="_blank" rel="noreferrer" className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-[#071A46] hover:bg-orange-100"><Youtube className="size-4" /></a><a aria-label="WhatsApp" href={whatsapp(defaultMessage)} target="_blank" rel="noreferrer" className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-[#071A46] hover:bg-orange-100"><MessageCircle className="size-4" /></a></div></div><p className="mx-auto mt-7 max-w-7xl border-t border-slate-100 pt-5 text-xs text-slate-400">Let&apos;s create content that gets noticed and helps your business grow.</p></footer>

    <a href={whatsapp(defaultMessage)} target="_blank" rel="noreferrer" aria-label="Chat with Pages Pilot Digital on WhatsApp" className="fixed bottom-4 right-4 z-30 flex min-h-13 items-center gap-2 rounded-full bg-[#168b58] px-4 py-3 text-sm font-bold text-white shadow-xl shadow-[#168b58]/25 transition hover:-translate-y-1 hover:bg-[#117547] sm:bottom-6 sm:right-6"><MessageCircle className="size-5" /> <span className="hidden sm:inline">Chat on WhatsApp</span></a>
  </main>
}
