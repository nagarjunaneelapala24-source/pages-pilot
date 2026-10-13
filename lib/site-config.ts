export const site = {
  name: 'Pages Pilot Digital',
  shortName: 'Pages Pilot',
  tagline: ['BUILD.', 'ENGAGE.', 'GROW.'] as const,
  description:
    'We plan, create and publish scroll-stopping social content every month — so your brand shows up consistently, connects with the right people and grows with clarity.',
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

export type PackageId = 'starter' | 'growth' | 'premium'

export type Package = {
  id: PackageId
  name: string
  price: number
  priceLabel: string
  tagline: string
  bestFor: string
  stats: { posts: number; reels: number; platforms: string }
  features: string[]
  recommended?: boolean
}

export const packages: Package[] = [
  {
    id: 'starter',
    name: 'Starter Presence',
    price: 2999,
    priceLabel: '₹2,999',
    tagline: 'Get consistent on one platform.',
    bestFor: 'New and local businesses building a steady presence',
    stats: { posts: 8, reels: 4, platforms: '1 platform' },
    features: [
      '8 posts per month',
      '4 reels per month',
      'Captions and hashtags',
      'Monthly content calendar',
      'Publishing on one platform',
      'Basic monthly performance report',
    ],
  },
  {
    id: 'growth',
    name: 'Growth Presence',
    price: 5999,
    priceLabel: '₹5,999',
    tagline: 'Strategy-led content across two platforms.',
    bestFor: 'Growing brands ready to engage audiences daily',
    stats: { posts: 12, reels: 8, platforms: 'Up to 2 platforms' },
    features: [
      '12 posts per month',
      '8 reels per month',
      'Stories up to 3 days per week',
      'Publishing on up to two platforms',
      'Monthly content strategy and calendar',
      'Competitor and profile review',
      'Monthly performance report and review meeting',
    ],
    recommended: true,
  },
  {
    id: 'premium',
    name: 'Premium Presence',
    price: 9999,
    priceLabel: '₹9,999',
    tagline: 'Full-stack presence with campaigns.',
    bestFor: 'Established brands running promotions and campaigns',
    stats: { posts: 16, reels: 12, platforms: '3 platforms' },
    features: [
      '16 posts per month',
      '12 reels per month',
      'Stories up to 5 days per week',
      'Publishing on three platforms',
      'Monthly campaign and promotional planning',
      'Profile optimization and performance analysis',
      'Competitor review and monthly strategy meeting',
    ],
  },
]

export const comparisonRows: { label: string; values: Record<PackageId, string | null> }[] = [
  { label: 'Posts per month', values: { starter: '8', growth: '12', premium: '16' } },
  { label: 'Reels per month', values: { starter: '4', growth: '8', premium: '12' } },
  {
    label: 'Stories',
    values: { starter: null, growth: 'Up to 3 days / week', premium: 'Up to 5 days / week' },
  },
  {
    label: 'Publishing platforms',
    values: { starter: 'One platform', growth: 'Up to two platforms', premium: 'Three platforms' },
  },
  {
    label: 'Planning',
    values: {
      starter: 'Monthly content calendar',
      growth: 'Monthly content strategy and calendar',
      premium: 'Monthly campaign and promotional planning',
    },
  },
  {
    label: 'Profile work',
    values: {
      starter: null,
      growth: 'Profile review',
      premium: 'Profile optimization',
    },
  },
  {
    label: 'Competitor review',
    values: { starter: null, growth: 'Included', premium: 'Included' },
  },
  {
    label: 'Reporting',
    values: {
      starter: 'Basic monthly performance report',
      growth: 'Monthly performance report',
      premium: 'Performance analysis',
    },
  },
  {
    label: 'Monthly meeting',
    values: { starter: null, growth: 'Review meeting', premium: 'Strategy meeting' },
  },
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
  return `Hi Pages Pilot Digital! I'm interested in the ${pkg.name} package (${pkg.priceLabel}/month). Could you share more details and how we can get started?`
}

export const generalMessage =
  "Hi Pages Pilot Digital! I'd like to know more about your social media marketing packages."
