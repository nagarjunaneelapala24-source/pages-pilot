export const site = {
  name: 'Pages Pilot Digital',
  shortName: 'Pages Pilot',
  tagline: 'We pilot your digital presence',
  description: 'Creative social media support built around your brand, your goals and your next stage of growth.',
}

export const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#pricing', label: 'Packages' },
  { href: '#contact', label: 'Contact' },
] as const

export const COUNTRY_CODE = '91'

export type Contact = { id: string; label: string; number: string }
export const contacts: Contact[] = [
  { id: 'call-1', label: 'Call', number: '9059097320' },
  { id: 'call-2', label: 'Call', number: '7075478819' },
  { id: 'whatsapp', label: 'WhatsApp', number: '7675807726' },
]

export const socialLinks = [
  { label: 'YouTube', handle: 'pagespilotdigital', href: 'https://www.youtube.com/@pagespilotdigital' },
  { label: 'Facebook', handle: 'pagespilotdigital', href: 'https://www.facebook.com/pagespilotdigital' },
  { label: 'Instagram', handle: 'pagespilotdigital', href: 'https://www.instagram.com/pagespilotdigital/' },
]

export type PackageId = 'basic-presence' | 'growth' | 'brand-builder' | 'business-accelerator' | 'premium-brand-partner'
export type AdPackageId = 'basic-ad-reel' | 'standard-promotional-ad' | 'premium-creative-ad' | 'campaign-ad-package'
export type Package = {
  id: PackageId
  name: string
  price: number
  priceLabel: string
  billing: string
  tagline: string
  bestFor: string
  stats: { posts: number; reels: number; platforms: string }
  features: string[]
  recommended?: boolean
}
export type AdPackage = { id: AdPackageId; name: string; price: number; priceLabel: string; billing: string; tagline: string; features: string[]; image: string }
export const adPackages: AdPackage[] = []

export const packages: Package[] = [
  { id: 'basic-presence', name: 'Basic Presence', price: 0, priceLabel: '', billing: '', tagline: '', bestFor: '', stats: { posts: 4, reels: 2, platforms: 'Instagram' }, features: ['2 Promotional Reels', '4 Static Posts', 'Instagram Page Handling', '1 Shoot Session (up to 60 minutes)', 'Captions, Hashtags & Monthly Summary'] },
  { id: 'growth', name: 'Growth', price: 0, priceLabel: '', billing: '', tagline: '', bestFor: '', stats: { posts: 6, reels: 5, platforms: 'Instagram' }, features: ['5 Promotional Reels', '6 Static Posts', '8 Story Creatives', 'Instagram Page Handling', '1 Shoot Session (up to 2 hours)'] },
  { id: 'brand-builder', name: 'Brand Builder', price: 0, priceLabel: '', billing: '', tagline: '', bestFor: '', stats: { posts: 8, reels: 10, platforms: 'Instagram + Facebook' }, features: ['10 Promotional Reels', '8 Static Posts + 2 Carousels', '12 Story Creatives', 'Instagram + Facebook Handling', '2 Shoot Sessions'] },
  { id: 'business-accelerator', name: 'Business Accelerator', price: 0, priceLabel: '', billing: '', tagline: '', bestFor: '', stats: { posts: 10, reels: 16, platforms: 'Instagram + Facebook' }, features: ['16 Promotional Reels', '10 Static Posts + 4 Carousels', '16 Story Creatives', 'Instagram + Facebook Handling', '2 Shoot Sessions + 1 Ad Campaign Management'] },
  { id: 'premium-brand-partner', name: 'Premium Brand Partner', price: 0, priceLabel: '', billing: '', tagline: '', bestFor: '', stats: { posts: 12, reels: 20, platforms: 'Instagram + Facebook' }, features: ['20 Promotional Reels', '12 Static Posts + 4 Carousels', '20 Story Creatives', 'Instagram + Facebook Handling', 'Up to 4 Shoot Sessions + Up to 2 Ad Campaigns Managed'], recommended: true },
]

export const comparisonRows: { label: string; values: Record<PackageId, string | null> }[] = []
export function getPackage(id: PackageId | null | undefined) { return packages.find((pkg) => pkg.id === id) ?? null }
export function formatPhone(number: string) { return `${number.slice(0, 5)} ${number.slice(5)}` }
export function telUrl(number: string) { return `tel:+${COUNTRY_CODE}${number}` }
export function whatsappUrl(number: string, message: string) { return `https://wa.me/${COUNTRY_CODE}${number}?text=${encodeURIComponent(message)}` }
export function packageMessage(pkg: Package) { return `Hi Pages Pilot Digital! I'm interested in the ${pkg.name} package. Could you share more details and how we can get started?` }
export const generalMessage = "Hi Pages Pilot Digital! I'd like to get started."
