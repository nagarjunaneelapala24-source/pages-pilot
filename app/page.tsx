import { About } from '@/components/site/about'
import { Contact } from '@/components/site/contact'
import { EnquiryProvider } from '@/components/site/enquiry-provider'
import { FloatingWhatsApp } from '@/components/site/floating-whatsapp'
import { Footer } from '@/components/site/footer'
import { Hero } from '@/components/site/hero'
import { Included } from '@/components/site/included'
import { Marquee } from '@/components/site/marquee'
import { Navbar } from '@/components/site/navbar'
import { Pricing } from '@/components/site/pricing'
import { Services } from '@/components/site/services'

export default function Page() {
  return (
    <EnquiryProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Pricing />
        <Included />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </EnquiryProvider>
  )
}
