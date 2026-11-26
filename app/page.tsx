import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'
import { Hero } from '@/components/site/hero'
import { Included } from '@/components/site/included'
import { Navbar } from '@/components/site/navbar'
import { Pricing } from '@/components/site/pricing'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Included />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
