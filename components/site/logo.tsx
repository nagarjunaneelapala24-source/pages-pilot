import { cn } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        aria-hidden="true"
        className={cn(
          'relative flex size-9 items-center justify-center rounded-xl',
          inverted ? 'bg-accent text-accent-foreground' : 'bg-ink text-ink-foreground',
        )}
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path d="M3 11.5 20.5 4l-5.5 16-3.2-6.3L3 11.5Z" fill="currentColor" />
          <path d="m11.8 13.7 3.5-3.5" stroke={inverted ? 'var(--accent)' : 'var(--ink)'} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-accent ring-2 ring-background" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-bold tracking-tight">Pages Pilot</span>
        <span
          className={cn(
            'mt-0.5 text-[0.65rem] font-medium tracking-[0.22em] uppercase',
            inverted ? 'text-ink-foreground/60' : 'text-muted-foreground',
          )}
        >
          Digital
        </span>
      </span>
    </span>
  )
}
