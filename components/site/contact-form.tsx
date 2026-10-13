'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, Loader2 } from 'lucide-react'
import { contacts, formatPhone, getPackage, packages, whatsappUrl, type PackageId } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { WhatsAppIcon } from './whatsapp-icon'

const fieldClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20 aria-invalid:border-destructive'

type Status = 'idle' | 'opening' | 'opened'

export function ContactForm() {
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [packageId, setPackageId] = useState<PackageId | ''>('')
  const [details, setDetails] = useState('')
  const [lineId, setLineId] = useState(contacts[0].id)
  const [nameError, setNameError] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [lastUrl, setLastUrl] = useState<string | null>(null)

  function buildMessage() {
    const pkg = getPackage(packageId || null)
    const lines = [
      `Hi Pages Pilot Digital! My name is ${name.trim()}.`,
      business.trim() ? `Business: ${business.trim()}` : null,
      pkg ? `Interested in: ${pkg.name} (${pkg.priceLabel}/month)` : 'Interested in: Not sure yet — would love a recommendation',
      details.trim() ? `Details: ${details.trim()}` : null,
    ]
    return lines.filter(Boolean).join('\n')
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name.trim()) {
      setNameError(true)
      document.getElementById('cf-name')?.focus()
      return
    }
    const contact = contacts.find((c) => c.id === lineId) ?? contacts[0]
    const url = whatsappUrl(contact.number, buildMessage())
    setLastUrl(url)
    setStatus('opening')
    const win = window.open(url, '_blank', 'noopener,noreferrer')
    if (!win) window.location.href = url
    setTimeout(() => setStatus('opened'), 900)
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-[2rem] border border-border bg-card p-6 shadow-[0_40px_80px_-50px] shadow-ink/40 sm:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-whatsapp text-whatsapp-foreground">
          <WhatsAppIcon className="size-5" />
        </span>
        <div>
          <h3 className="font-display text-xl font-bold tracking-tight">Send a quick enquiry</h3>
          <p className="text-sm text-muted-foreground">We&apos;ll prefill a WhatsApp message for you.</p>
        </div>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-sm font-medium">
            Your name <span className="text-destructive">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              if (nameError) setNameError(false)
            }}
            aria-invalid={nameError || undefined}
            aria-describedby={nameError ? 'cf-name-error' : undefined}
            placeholder="e.g. Priya Sharma"
            className={fieldClass}
          />
          {nameError ? (
            <p id="cf-name-error" className="text-xs text-destructive">
              Please enter your name.
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-business" className="text-sm font-medium">
            Business name
          </label>
          <input
            id="cf-business"
            name="business"
            autoComplete="organization"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="e.g. Brew & Co."
            className={fieldClass}
          />
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-medium">Package</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[...packages.map((p) => ({ id: p.id as PackageId | '', label: p.name.replace(' Presence', ''), sub: p.priceLabel })), { id: '' as const, label: 'Not sure', sub: 'Advise me' }].map(
            (opt) => {
              const checked = packageId === opt.id
              return (
                <label
                  key={opt.id || 'none'}
                  className={cn(
                    'flex cursor-pointer flex-col rounded-xl border px-3 py-2.5 transition-all has-focus-visible:ring-3 has-focus-visible:ring-primary/25',
                    checked ? 'border-primary bg-primary/5' : 'border-input hover:border-foreground/30',
                  )}
                >
                  <input
                    type="radio"
                    name="package"
                    value={opt.id}
                    checked={checked}
                    onChange={() => setPackageId(opt.id)}
                    className="sr-only"
                  />
                  <span className="text-sm font-semibold">{opt.label}</span>
                  <span className="text-xs text-muted-foreground">{opt.sub}</span>
                </label>
              )
            },
          )}
        </div>
      </fieldset>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="cf-details" className="text-sm font-medium">
          Tell us about your goals
        </label>
        <textarea
          id="cf-details"
          name="details"
          rows={3}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Which platforms, what you sell, and what you'd like to achieve…"
          className={cn(fieldClass, 'resize-none')}
        />
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="cf-line" className="text-sm font-medium">
          Send to
        </label>
        <select
          id="cf-line"
          name="line"
          value={lineId}
          onChange={(e) => setLineId(e.target.value)}
          className={cn(fieldClass, 'appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10')}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          {contacts.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label} · {formatPhone(c.number)}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'opening'}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-whatsapp px-6 py-4 text-sm font-bold text-whatsapp-foreground shadow-[0_16px_30px_-16px] shadow-whatsapp transition-all outline-none hover:-translate-y-0.5 hover:brightness-105 focus-visible:ring-3 focus-visible:ring-whatsapp/40 active:translate-y-0 disabled:opacity-80"
      >
        {status === 'opening' ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Opening WhatsApp…
          </>
        ) : (
          <>
            <WhatsAppIcon className="size-4" />
            Send on WhatsApp
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>

      <div aria-live="polite" className="min-h-5">
        {status === 'opened' && lastUrl ? (
          <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
            <Check className="size-3.5 text-whatsapp" />
            {"WhatsApp didn't open?"}{' '}
            <a href={lastUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline underline-offset-2">
              Tap here
            </a>
          </p>
        ) : null}
      </div>
    </form>
  )
}
