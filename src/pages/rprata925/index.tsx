import { C, SANS } from './constants'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Features from './components/Features'
import HowToBuy from './components/HowToBuy'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function RafaPratas925() {
  return (
    <div style={{ backgroundColor: C.bg, fontFamily: SANS, color: C.brownLight }}>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Features />
        <HowToBuy />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
