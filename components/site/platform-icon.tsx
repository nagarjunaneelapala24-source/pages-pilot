type Platform = 'Instagram' | 'Facebook' | 'YouTube'

type PlatformIconProps = {
  platform: Platform
  className?: string
}

export function PlatformIcon({ platform, className }: PlatformIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {platform === 'Instagram' ? (
        <>
          <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.25" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.8" cy="6.5" r="1.1" fill="currentColor" />
        </>
      ) : null}
      {platform === 'Facebook' ? (
        <path d="M13.6 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.5V13h2.7v8h3.4Z" fill="currentColor" />
      ) : null}
      {platform === 'YouTube' ? (
        <>
          <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2 12a30 30 0 0 0 .4 4.8 2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 22 12a30 30 0 0 0-.4-4.8Z" fill="currentColor" />
          <path d="m10 15.5 5.2-3.5L10 8.5v7Z" fill="var(--background)" />
        </>
      ) : null}
    </svg>
  )
}
