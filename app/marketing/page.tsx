import type { Metadata } from 'next'
import { MarketingLanding } from '@/components/marketing/marketing-landing'

export const metadata: Metadata = {
  title: 'Pages Pilot Digital — We Pilot Your Digital Presence',
  description:
    'Creative social media management, content creation, promotional videos and digital campaigns for local businesses.',
}

export default function MarketingPage() {
  return <MarketingLanding />
}
