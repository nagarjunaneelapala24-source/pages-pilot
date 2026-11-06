'use client'

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { PackageId } from '@/lib/site-config'
import { EnquiryDialog } from './enquiry-dialog'

type EnquiryContextValue = {
  openEnquiry: (packageId?: PackageId | null, message?: string) => void
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null)

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [packageId, setPackageId] = useState<PackageId | null>(null)
  const [customMessage, setCustomMessage] = useState<string | null>(null)

  const openEnquiry = useCallback((id?: PackageId | null, message?: string) => {
    setPackageId(id ?? null)
    setCustomMessage(message ?? null)
    setOpen(true)
  }, [])

  const value = useMemo(() => ({ openEnquiry }), [openEnquiry])

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryDialog open={open} onOpenChange={setOpen} packageId={packageId} customMessage={customMessage} />
    </EnquiryContext.Provider>
  )
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext)
  if (!ctx) throw new Error('useEnquiry must be used within EnquiryProvider')
  return ctx
}
