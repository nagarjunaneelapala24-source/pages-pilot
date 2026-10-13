import { ArrowUpRight, Phone } from 'lucide-react'
import { contacts, formatPhone, generalMessage, telUrl, whatsappUrl } from '@/lib/site-config'
import { ContactForm } from './contact-form'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { WhatsAppIcon } from './whatsapp-icon'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-muted/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            index="05"
            eyebrow="Contact"
            title={
              <>
                {"Let's get your brand"} <span className="text-primary">off the ground.</span>
              </>
            }
            description="Message us on any of our WhatsApp lines — we usually reply within working hours. Prefer a call? Tap the phone icon."
          />

          <ul className="mt-10 flex flex-col gap-3">
            {contacts.map((contact, i) => (
              <Reveal as="li" key={contact.id} delay={i * 80}>
                <div className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-3 pr-3.5 transition-all duration-300 hover:border-whatsapp/60 hover:shadow-[0_16px_40px_-20px] hover:shadow-whatsapp/50">
                  <a
                    href={whatsappUrl(contact.number, generalMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-w-0 flex-1 items-center gap-3 rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-whatsapp/30"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-whatsapp text-whatsapp-foreground transition-transform duration-300 group-hover:scale-105">
                      <WhatsAppIcon className="size-5" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-xs text-muted-foreground">{contact.label}</span>
                      <span className="font-display text-lg font-semibold tabular-nums">{formatPhone(contact.number)}</span>
                    </span>
                    <span className="ml-auto hidden items-center gap-1 text-sm font-semibold sm:flex">
                      WhatsApp
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="sr-only">Chat on WhatsApp with {formatPhone(contact.number)}</span>
                  </a>
                  <a
                    href={telUrl(contact.number)}
                    className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border text-foreground transition-colors outline-none hover:bg-ink hover:text-ink-foreground focus-visible:ring-3 focus-visible:ring-ring/40"
                  >
                    <Phone className="size-4" />
                    <span className="sr-only">Call {formatPhone(contact.number)}</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
