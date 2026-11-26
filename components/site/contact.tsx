import { ArrowUpRight, Phone } from 'lucide-react'
import { PlatformIcon } from './platform-icon'
import { contacts, formatPhone, socialLinks, telUrl, whatsappUrl } from '@/lib/site-config'
import { SectionHeading } from './section-heading'
import { WhatsAppIcon } from './whatsapp-icon'

export function Contact() {
  return (
    <section id="contact" className="bg-[#071D49] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionHeading index="03" eyebrow="Let’s get started" inverted title={<>Your next move <span className="text-[#F4510B]">starts here.</span></>} description="Reach out to Pages Pilot Digital and let us know what you have in mind." />
            <a href={whatsappUrl('7675807726', "Hi Pages Pilot Digital! I'd like to get started.")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#F4510B] px-6 py-4 text-sm font-extrabold text-[#071D49] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4510B]">DM us to get started <ArrowUpRight className="size-4" /></a>
          </div>
          <div className="grid gap-7 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">Call</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {contacts.filter((contact) => contact.id.startsWith('call')).map((contact) => <li key={contact.id}><a href={telUrl(contact.number)} className="inline-flex items-center gap-3 text-lg font-semibold tabular-nums text-white transition hover:text-[#F4510B]"><Phone className="size-4 text-[#F4510B]" />{formatPhone(contact.number)}</a></li>)}
              </ul>
              <h3 className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-white/55">WhatsApp</h3>
              <a href={whatsappUrl('7675807726', "Hi Pages Pilot Digital! I'd like to get started.")} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-3 text-lg font-semibold tabular-nums text-white transition hover:text-[#F4510B]"><WhatsAppIcon className="size-5 text-[#F4510B]" />{formatPhone('7675807726')}</a>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">Follow along</h3>
              <ul className="mt-4 flex flex-col gap-4">
                {socialLinks.map((social) => {
                  return <li key={social.label}><a href={social.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-white transition hover:text-[#F4510B]"><span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-[#F4510B] transition group-hover:bg-[#F4510B] group-hover:text-[#071D49]"><PlatformIcon platform={social.label as 'YouTube' | 'Facebook' | 'Instagram'} className="size-5" /></span><span><span className="block text-sm font-semibold">{social.label}</span><span className="text-xs text-white/55">{social.handle}</span></span><ArrowUpRight className="ml-1 size-4 opacity-50" /></a></li>
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-6 text-xs text-white/50">© {new Date().getFullYear()} Pages Pilot Digital. All rights reserved.</div>
      </div>
    </section>
  )
}
