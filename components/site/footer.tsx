import { ArrowUp } from 'lucide-react'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="bg-[#071D49] px-5 pb-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
        <a href="#top" aria-label="Pages Pilot Digital home"><Logo inverted /></a>
        <a href="#top" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-[#F4510B] hover:text-[#F4510B]">Back to top <ArrowUp className="size-4" /></a>
      </div>
    </footer>
  )
}
