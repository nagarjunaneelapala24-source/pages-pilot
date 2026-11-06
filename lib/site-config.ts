export const site = {
  name: 'Pages Pilot Digital',
  shortName: 'Pages Pilot',
  tagline: ['BUILD.', 'ENGAGE.', 'GROW.'] as const,
  description:
    'Digital marketing and social media management for businesses in Tadepalligudem and nearby areas — helping your brand show up consistently, connect with the right people and grow with clarity.',
}

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#included', label: 'Included' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
] as const

export const COUNTRY_CODE = '91'

export type Contact = {
  id: string
  label: string
  number: string
}

export const contacts: Contact[] = [
  { id: 'line-1', label: 'Enquiry line 01', number: '7075478819' },
  { id: 'line-2', label: 'Enquiry line 02', number: '9059097320' },
  { id: 'line-3', label: 'Enquiry line 03', number: '8367757760' },
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

export type AdPackage = {
  id: AdPackageId
  name: string
  price: number
  priceLabel: string
  billing: string
  tagline: string
  features: string[]
  image: string
}

export const adPackages: AdPackage[] = [
  { id: 'basic-ad-reel', name: 'Basic Ad Reel', price: 1499, priceLabel: '₹1,499', billing: 'per ad', tagline: 'A crisp, scroll-stopping reel for your next offer.', features: ['15–30 second reel', 'Basic editing and transitions', 'Text overlays and music', 'One revision'], image: '/images/reel-fashion.png' },
  { id: 'standard-promotional-ad', name: 'Standard Promotional Ad', price: 2999, priceLabel: '₹2,999', billing: 'per ad', tagline: 'A polished promotional creative built to convert.', features: ['30–45 second ad', 'Concept and storyboard', 'Brand-led editing and captions', 'Two revisions'], image: '/images/post-product.png' },
  { id: 'premium-creative-ad', name: 'Premium Creative Ad', price: 5999, priceLabel: '₹5,999', billing: 'per ad', tagline: 'A campaign-ready visual with premium production value.', features: ['45–60 second creative ad', 'Creative direction and scripting', 'Advanced motion graphics', 'Three revisions'], image: '/images/studio.png' },
  { id: 'campaign-ad-package', name: 'Campaign Ad Package', price: 9999, priceLabel: '₹9,999', billing: 'per package', tagline: 'A complete set of ads for a focused campaign.', features: ['Three campaign creatives', 'Campaign concept and direction', 'Multiple formats for social', 'Priority delivery'], image: '/images/post-cafe.png' },
]

export const packages: Package[] = [
  { id: 'basic-presence', name: 'Basic Presence', price: 2999, priceLabel: '₹2,999', billing: '/month', tagline: 'Start showing up consistently.', bestFor: 'New and local businesses', stats: { posts: 8, reels: 4, platforms: '1 platform' }, features: ['8 posts per month', '4 reels per month', 'Captions and hashtags', 'Monthly content calendar', 'Publishing on one platform', 'Basic monthly performance report'] },
  { id: 'growth', name: 'Growth', price: 6999, priceLabel: '₹6,999', billing: '/month', tagline: 'Build momentum with strategy-led content.', bestFor: 'Growing brands ready to engage', stats: { posts: 12, reels: 8, platforms: '2 platforms' }, features: ['12 posts per month', '8 reels per month', 'Stories up to 3 days per week', 'Publishing on up to two platforms', 'Monthly content strategy and calendar', 'Competitor and profile review', 'Monthly performance report'], recommended: true },
  { id: 'brand-builder', name: 'Brand Builder', price: 12999, priceLabel: '₹12,999', billing: '/month', tagline: 'Create a recognizable, confident brand.', bestFor: 'Brands ready for deeper creative direction', stats: { posts: 16, reels: 12, platforms: '3 platforms' }, features: ['16 posts per month', '12 reels per month', 'Stories up to 5 days per week', 'Publishing on three platforms', 'Monthly campaign planning', 'Profile optimization', 'Performance analysis and review meeting'] },
  { id: 'business-accelerator', name: 'Business Accelerator', price: 24999, priceLabel: '₹24,999', billing: '/month', tagline: 'Turn content into a dependable growth engine.', bestFor: 'Businesses running regular campaigns', stats: { posts: 24, reels: 16, platforms: '3 platforms' }, features: ['24 posts per month', '16 reels per month', 'Stories six days per week', 'Campaign and promotional planning', 'Priority creative production', 'Profile and competitor analysis', 'Monthly strategy meeting'] },
  { id: 'premium-brand-partner', name: 'Premium Brand Partner', price: 49999, priceLabel: '₹49,999', billing: '/month', tagline: 'A dedicated creative partner for your brand.', bestFor: 'Ambitious brands that want full support', stats: { posts: 30, reels: 20, platforms: 'All platforms' }, features: ['30 posts per month', '20 reels per month', 'Daily stories', 'Full-platform publishing', 'Always-on campaign strategy', 'Dedicated brand direction', 'Priority reporting and strategy support'] },
]


export const comparisonRows: { label: string; values: Record<PackageId, string | null> }[] = [
  { label: 'Posts per month', values: { 'basic-presence': '8', growth: '12', 'brand-builder': '16', 'business-accelerator': '24', 'premium-brand-partner': '30' } },
  { label: 'Reels per month', values: { 'basic-presence': '4', growth: '8', 'brand-builder': '12', 'business-accelerator': '16', 'premium-brand-partner': '20' } },
  { label: 'Stories', values: { 'basic-presence': null, growth: 'Up to 3 days / week', 'brand-builder': 'Up to 5 days / week', 'business-accelerator': 'Six days / week', 'premium-brand-partner': 'Daily' } },
  { label: 'Publishing platforms', values: { 'basic-presence': 'One platform', growth: 'Two platforms', 'brand-builder': 'Three platforms', 'business-accelerator': 'Three platforms', 'premium-brand-partner': 'All platforms' } },
  { label: 'Campaign planning', values: { 'basic-presence': null, growth: null, 'brand-builder': 'Included', 'business-accelerator': 'Included', 'premium-brand-partner': 'Always-on' } },
  { label: 'Reporting', values: { 'basic-presence': 'Basic report', growth: 'Monthly report', 'brand-builder': 'Performance analysis', 'business-accelerator': 'Strategy report', 'premium-brand-partner': 'Priority reporting' } },
]


export function getPackage(id: PackageId | null | undefined) {
  return packages.find((p) => p.id === id) ?? null
}

export function formatPhone(number: string) {
  return `+${COUNTRY_CODE} ${number.slice(0, 5)} ${number.slice(5)}`
}

export function telUrl(number: string) {
  return `tel:+${COUNTRY_CODE}${number}`
}

export function whatsappUrl(number: string, message: string) {
  return `https://wa.me/${COUNTRY_CODE}${number}?text=${encodeURIComponent(message)}`
}

export function packageMessage(pkg: Package) {
  return `Hi Pages Pilot Digital! I'm interested in the ${pkg.name} package (${pkg.priceLabel}${pkg.billing}). Could you share more details and how we can get started?`
}

export const generalMessage =
  "Hi Pages Pilot Digital! I'd like to know more about your social media marketing packages."
