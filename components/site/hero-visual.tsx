import Image from 'next/image'
import { BarChart3, CalendarDays, Heart, MessageCircle, Play, Send } from 'lucide-react'

const calendarDots = [0, 2, 3, 5, 8, 9, 11, 12, 15, 17, 18, 20, 22, 24, 25, 27]
const bars = [38, 52, 46, 64, 58, 76, 88]

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none" aria-hidden="true">
      <div className="relative mx-auto aspect-[4/4.4] w-full max-w-[30rem]">
        {/* Phone */}
        <div className="absolute top-0 left-1/2 w-[62%] -translate-x-1/2 rounded-[2.4rem] bg-ink p-2.5 shadow-[0_40px_80px_-30px] shadow-ink/60 animate-in fade-in-0 zoom-in-95 duration-1000">
          <div className="overflow-hidden rounded-[1.9rem] bg-card">
            <div className="flex items-center justify-between px-4 pt-3 pb-2">
              <span className="text-[0.6rem] font-semibold">9:41</span>
              <span className="h-4 w-14 rounded-full bg-ink" />
              <span className="flex gap-0.5">
                <span className="size-1 rounded-full bg-foreground" />
                <span className="size-1 rounded-full bg-foreground" />
                <span className="size-1 rounded-full bg-foreground/40" />
              </span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent p-[2px]">
                <span className="flex size-full items-center justify-center rounded-full bg-card font-display text-[0.6rem] font-bold">YB</span>
              </span>
              <div className="flex flex-1 flex-col gap-1">
                <span className="h-2 w-20 rounded-full bg-foreground/80" />
                <span className="h-1.5 w-14 rounded-full bg-muted-foreground/40" />
              </div>
              <span className="rounded-md bg-primary px-2 py-1 text-[0.55rem] font-semibold text-primary-foreground">Follow</span>
            </div>
            <div className="flex gap-2 overflow-hidden px-4 py-2">
              {['bg-accent', 'bg-primary/80', 'bg-whatsapp/70', 'bg-muted-foreground/30'].map((c, i) => (
                <span key={i} className="flex size-9 shrink-0 items-center justify-center rounded-full ring-2 ring-primary/30 ring-offset-2 ring-offset-card">
                  <span className={`size-full rounded-full ${c}`} />
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-0.5 pt-1">
              <div className="relative col-span-2 row-span-2 aspect-square">
                <Image src="/images/post-cafe.png" alt="" fill sizes="200px" className="object-cover" priority />
              </div>
              <div className="relative aspect-square">
                <Image src="/images/post-product.png" alt="" fill sizes="100px" className="object-cover" />
              </div>
              <div className="relative aspect-square bg-accent">
                <span className="absolute inset-0 flex items-center justify-center p-1 text-center font-display text-[0.6rem] leading-tight font-extrabold text-accent-foreground">
                  NEW
                  <br />
                  DROP
                </span>
              </div>
              <div className="relative aspect-square bg-primary">
                <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-extrabold text-primary-foreground">%</span>
              </div>
              <div className="relative aspect-square">
                <Image src="/images/reel-fashion.png" alt="" fill sizes="100px" className="object-cover" />
                <Play className="absolute top-1 right-1 size-3 fill-white text-white" />
              </div>
              <div className="relative aspect-square bg-ink">
                <span className="absolute inset-0 flex items-center justify-center font-display text-[0.55rem] font-bold tracking-widest text-accent">
                  TIPS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reel card */}
        <div className="absolute top-[8%] left-0 w-[32%] animate-float">
          <div className="overflow-hidden rounded-2xl border-4 border-card bg-card shadow-2xl shadow-ink/25">
            <div className="relative aspect-[9/14]">
              <Image src="/images/reel-fashion.png" alt="" fill sizes="160px" className="object-cover" />
              <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />
              <span className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-card/90 px-2 py-0.5 text-[0.55rem] font-semibold">
                <Play className="size-2.5 fill-current" />
                Reel
              </span>
              <span className="absolute right-2 bottom-2 flex flex-col items-center gap-2 text-white">
                <Heart className="size-3.5 fill-white" />
                <MessageCircle className="size-3.5" />
                <Send className="size-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Calendar card */}
        <div className="absolute right-0 top-[30%] w-[40%] rounded-2xl border border-border bg-card p-3.5 shadow-2xl shadow-ink/15 animate-float-delayed">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CalendarDays className="size-3.5" />
            </span>
            <span className="text-[0.65rem] leading-tight font-semibold">
              Content
              <br />
              calendar
            </span>
          </div>
          <div className="mt-3 grid grid-cols-7 gap-1">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className={`aspect-square rounded-[3px] ${
                  calendarDots.includes(i) ? (i % 3 === 0 ? 'bg-accent' : 'bg-primary') : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Report card */}
        <div className="absolute bottom-[2%] left-[4%] w-[46%] rounded-2xl bg-ink p-4 text-ink-foreground shadow-2xl shadow-ink/40 animate-float-delayed">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[0.65rem] font-semibold">
              <BarChart3 className="size-3.5 text-accent" />
              Monthly report
            </span>
            <span className="rounded-full bg-accent/15 px-1.5 py-0.5 text-[0.5rem] font-semibold text-accent">Insights</span>
          </div>
          <div className="mt-4 flex h-16 items-end gap-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-t-[4px] ${i === bars.length - 1 ? 'bg-accent' : 'bg-ink-foreground/20'}`}
              />
            ))}
          </div>
        </div>

        {/* Engagement chip */}
        <div className="absolute right-[6%] bottom-[12%] flex items-center gap-2 rounded-full border border-border bg-card py-2 pr-4 pl-2 shadow-xl shadow-ink/15 animate-float">
          <span className="flex size-7 items-center justify-center rounded-full bg-accent">
            <Heart className="size-3.5 fill-accent-foreground text-accent-foreground" />
          </span>
          <span className="text-[0.7rem] font-semibold">Engage daily</span>
        </div>
      </div>
    </div>
  )
}
