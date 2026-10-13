'use client'

import type { ComponentProps } from 'react'
import type { PackageId } from '@/lib/site-config'
import { useEnquiry } from './enquiry-provider'

type EnquiryButtonProps = Omit<ComponentProps<'button'>, 'onClick' | 'type'> & {
  packageId?: PackageId
}

export function EnquiryButton({ packageId, children, ...props }: EnquiryButtonProps) {
  const { openEnquiry } = useEnquiry()
  return (
    <button type="button" aria-haspopup="dialog" onClick={() => openEnquiry(packageId)} {...props}>
      {children}
    </button>
  )
}
