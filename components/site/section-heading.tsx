import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type SectionHeadingProps = {
  eyebrow: string
  index: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  inverted?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = 'left',
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <span
        className={cn(
          'inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase',
          inverted ? 'text-accent' : 'text-primary',
        )}
      >
        <span className="tabular-nums">{index}</span>
        <span aria-hidden="true" className={cn('h-px w-8', inverted ? 'bg-accent/50' : 'bg-primary/40')} />
        {eyebrow}
      </span>
      <h2 className="max-w-2xl font-display text-4xl leading-[1.02] font-bold tracking-[-0.03em] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-xl text-base leading-relaxed sm:text-lg',
            inverted ? 'text-ink-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
