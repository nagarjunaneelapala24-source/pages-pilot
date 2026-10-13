'use client'

import { WhatsAppIcon } from './whatsapp-icon'
import { useEnquiry } from './enquiry-provider'

export function FloatingWhatsApp() {
  const { openEnquiry } = useEnquiry()
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={() => openEnquiry()}
      className="group fixed right-4 bottom-4 z-30 flex items-center gap-2 rounded-full bg-whatsapp p-4 text-whatsapp-foreground shadow-[0_16px_40px_-12px] shadow-whatsapp/70 transition-all duration-300 outline-none hover:pr-6 focus-visible:ring-4 focus-visible:ring-whatsapp/40 sm:right-6 sm:bottom-6"
    >
      <span aria-hidden="true" className="absolute inset-0 -z-10 rounded-full bg-whatsapp animate-ping-slow" />
      <WhatsAppIcon className="size-6" />
      <span className="max-w-0 overflow-hidden text-sm font-bold whitespace-nowrap transition-all duration-300 group-hover:max-w-40 group-focus-visible:max-w-40">
        Chat with us
      </span>
      <span className="sr-only">Open WhatsApp enquiry</span>
    </button>
  )
}
