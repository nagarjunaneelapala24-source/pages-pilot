const items = [
  'Posts',
  'Reels',
  'Stories',
  'Captions & hashtags',
  'Content calendars',
  'Profile optimization',
  'Competitor reviews',
  'Performance reports',
  'Campaign planning',
]

export function Marquee() {
  return (
    <div className="overflow-x-clip py-3">
    <div className="relative -mx-4 -rotate-1 overflow-hidden border-y border-ink bg-ink py-4 text-ink-foreground">
      <div className="group flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? 'true' : undefined}>
            {items.map((item) => (
              <li key={item} className="flex items-center gap-6 px-6 font-display text-xl font-semibold tracking-tight whitespace-nowrap sm:text-2xl">
                {item}
                <span aria-hidden="true" className="size-2 rotate-45 bg-accent" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
    </div>
  )
}
