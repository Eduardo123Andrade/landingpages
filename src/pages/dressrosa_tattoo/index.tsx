import { C, SANS } from './constants'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Artists from './components/Artists'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function DressrosaTattoo() {
  return (
    <div style={{ backgroundColor: C.bg, fontFamily: SANS, color: C.text }}>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <Artists />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
