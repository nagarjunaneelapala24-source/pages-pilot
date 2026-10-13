'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Loader2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  contacts,
  formatPhone,
  generalMessage,
  getPackage,
  packageMessage,
  whatsappUrl,
  type PackageId,
} from '@/lib/site-config'
import { WhatsAppIcon } from './whatsapp-icon'
import { cn } from '@/lib/utils'

type EnquiryDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  packageId: PackageId | null
}

export function EnquiryDialog({ open, onOpenChange, packageId }: EnquiryDialogProps) {
  const pkg = getPackage(packageId)
  const [message, setMessage] = useState('')
  const [openedId, setOpenedId] = useState<string | null>(null)

  useEffect(() => {
    if (open) {
      setMessage(pkg ? packageMessage(pkg) : generalMessage)
      setOpenedId(null)
    }
  }, [open, pkg])

  useEffect(() => {
    if (!openedId) return
    const timer = setTimeout(() => setOpenedId((current) => (current === openedId ? `${openedId}:done` : current)), 900)
    return () => clearTimeout(timer)
  }, [openedId])

  const finalMessage = message.trim() || (pkg ? packageMessage(pkg) : generalMessage)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 overflow-hidden rounded-3xl p-0 sm:max-w-md [&>[data-slot=dialog-close]]:text-ink-foreground [&>[data-slot=dialog-close]]:hover:bg-ink-foreground/10">
        <div className="relative bg-ink px-6 pt-6 pb-5 text-ink-foreground">
          <div aria-hidden="true" className="bg-grid-ink absolute inset-0 opacity-60" />
          <DialogHeader className="relative gap-2 text-left">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-whatsapp/15 px-2.5 py-1 text-xs font-medium text-whatsapp">
              <WhatsAppIcon className="size-3.5" />
              WhatsApp enquiry
            </span>
            <DialogTitle className="font-display text-2xl leading-tight font-semibold text-ink-foreground">
              {pkg ? `Enquire about ${pkg.name}` : 'Start a conversation'}
            </DialogTitle>
            <DialogDescription className="text-ink-foreground/70">
              {pkg
                ? `${pkg.priceLabel}/month · Pick any line below and we'll reply on WhatsApp.`
                : "Pick any line below — your message is prefilled and ready to send."}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="flex flex-col gap-5 px-6 py-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="enquiry-message" className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Your message
            </label>
            <textarea
              id="enquiry-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full resize-none rounded-2xl border border-input bg-muted/60 px-3.5 py-3 text-sm leading-relaxed text-foreground outline-none transition focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20"
            />
          </div>

          <fieldset className="flex flex-col gap-2">
            <legend className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Choose a number
            </legend>
            <ul className="flex flex-col gap-2">
              {contacts.map((contact) => {
                const isOpening = openedId === contact.id
                const isDone = openedId === `${contact.id}:done`
                return (
                  <li key={contact.id}>
                    <a
                      href={whatsappUrl(contact.number, finalMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpenedId(contact.id)}
                      className={cn(
                        'group flex items-center gap-3 rounded-2xl border border-border bg-card px-3.5 py-3 transition-all duration-200 outline-none hover:-translate-y-0.5 hover:border-whatsapp hover:shadow-[0_10px_30px_-12px] hover:shadow-whatsapp/50 focus-visible:border-whatsapp focus-visible:ring-3 focus-visible:ring-whatsapp/30',
                        isDone && 'border-whatsapp bg-whatsapp/5',
                      )}
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-whatsapp text-whatsapp-foreground transition-transform group-hover:scale-105">
                        <WhatsAppIcon className="size-5" />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="text-xs text-muted-foreground">{contact.label}</span>
                        <span className="font-display text-base font-semibold tabular-nums">
                          {formatPhone(contact.number)}
                        </span>
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-foreground" aria-live="polite">
                        {isOpening ? (
                          <>
                            <Loader2 className="size-4 animate-spin" />
                            <span>Opening</span>
                          </>
                        ) : isDone ? (
                          <>
                            <Check className="size-4 text-whatsapp" />
                            <span>Opened</span>
                          </>
                        ) : (
                          <>
                            <span className="hidden sm:inline">Chat</span>
                            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </fieldset>

          <p className="text-center text-xs text-muted-foreground">
            Opens WhatsApp in a new tab or the app on your phone.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
