'use client'

import { useState } from 'react'
import { ChevronDown, Minus } from 'lucide-react'
import { comparisonRows, packages } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { EnquiryButton } from './enquiry-button'

export function ComparisonTable() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-14">
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="comparison-table"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold shadow-sm transition-all outline-none hover:border-primary/40 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/40"
        >
          {open ? 'Hide comparison' : 'Compare all packages'}
          <ChevronDown className={cn('size-4 transition-transform duration-300', open && 'rotate-180')} />
        </button>
      </div>

      <div
        id="comparison-table"
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-500 ease-out',
          open ? 'mt-8 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
        inert={!open}
      >
        <div className="overflow-hidden">
          <div className="overflow-x-auto rounded-3xl border border-border bg-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Feature comparison of Pages Pilot Digital packages</caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="w-1/4 p-5 font-medium text-muted-foreground">
                    Feature
                  </th>
                  {packages.map((pkg) => (
                    <th
                      key={pkg.id}
                      scope="col"
                      className={cn('p-5 align-bottom', pkg.recommended && 'bg-primary/[0.04]')}
                    >
                      <span className="block font-display text-base font-bold">{pkg.name}</span>
                      <span className="mt-0.5 block text-xs font-medium text-muted-foreground">
                        {pkg.priceLabel}/month
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-0 transition-colors hover:bg-muted/50">
                    <th scope="row" className="p-5 font-medium">
                      {row.label}
                    </th>
                    {packages.map((pkg) => {
                      const value = row.values[pkg.id]
                      return (
                        <td key={pkg.id} className={cn('p-5 text-muted-foreground', pkg.recommended && 'bg-primary/[0.04]')}>
                          {value ? (
                            <span className="text-foreground">{value}</span>
                          ) : (
                            <>
                              <Minus aria-hidden="true" className="size-4 text-muted-foreground/50" />
                              <span className="sr-only">Not included</span>
                            </>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
                <tr>
                  <td className="p-5" />
                  {packages.map((pkg) => (
                    <td key={pkg.id} className={cn('p-5', pkg.recommended && 'bg-primary/[0.04]')}>
                      <EnquiryButton
                        packageId={pkg.id}
                        className="inline-flex items-center rounded-xl bg-ink px-4 py-2.5 text-xs font-semibold text-ink-foreground transition-colors hover:bg-primary"
                      >
                        Enquire<span className="sr-only"> about {pkg.name}</span>
                      </EnquiryButton>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
