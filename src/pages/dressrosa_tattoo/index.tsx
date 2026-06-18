import { useState, useEffect } from 'react'
import '../../styles/dressrosa.css'
import { FONTS, PORTFOLIO_ITEMS, ESTILOS, PRECOS, FAQS, THEMES_DATA, INSTAGRAM } from './constants'

const FONT_OPTIONS = [
  { label: 'DM Serif', family: "'DM Serif Display', Georgia, serif" },
  { label: 'BEBAS NEUE', family: "'Bebas Neue', Impact, sans-serif" },
  { label: 'Playfair', family: "'Playfair Display', Georgia, serif" },
]
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Estilos from './components/Estilos'
import Sobre from './components/Sobre'
import Precos from './components/Precos'
import Agendamento from './components/Agendamento'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

// Old components (not refactored yet)
// import Contact from './components/Contact'
// import FloatingWhatsApp from './components/FloatingWhatsApp'
// import Gallery from './components/Gallery'
// import Header from './components/Header'
// import Services from './components/Services'
// import Artists from './components/Artists'

export default function DressrosaTattoo() {
  const [theme] = useState(THEMES_DATA[0])
  const [navStyle, setNavStyle] = useState({})
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null)
  const [formSent, setFormSent] = useState(false)
  const currentFont = FONT_OPTIONS[0]

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--bg', theme.bg)
    root.style.setProperty('--bg2', theme.bg2)
    root.style.setProperty('--bg3', theme.bg3)
    root.style.setProperty('--accent', theme.accent)
    root.style.setProperty('--accent2', theme.accent2)
    root.style.setProperty('--font-title', currentFont.family)
  }, [theme, currentFont.family])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setNavStyle({
          background: 'rgba(0,0,0,0.88)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid rgba(201,169,110,0.15)`,
        })
      } else {
        setNavStyle({
          background: 'transparent',
          backdropFilter: 'none',
          borderBottom: 'none',
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const target = e.target as HTMLElement
          if (e.isIntersecting) {
            target.style.opacity = '1'
            target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = '0'
      htmlEl.style.transform = 'translateY(28px)'
      htmlEl.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div style={pageStyles}>
      <style>{globalStyles}</style>

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-5 md:px-6 lg:px-8 py-4 md:py-5 lg:py-5 flex items-center justify-between transition-all duration-500"
        style={navStyle}
      >
        <a
          href="#hero"
          className="font-title text-base md:text-lg lg:text-xl tracking-wider uppercase"
          style={{ color: theme.accent }}
        >
          DressRosa
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 lg:gap-9 items-center">
          <NavLink href="#portfolio" theme={theme}>Portfólio</NavLink>
          <NavLink href="#estilos" theme={theme}>Estilos</NavLink>
          <NavLink href="#sobre" theme={theme}>Sobre</NavLink>
          <NavLink href="#precos" theme={theme}>Preços</NavLink>
          <a
            href="#agendamento"
            className="text-xs uppercase tracking-widest font-bold px-6 py-2 transition-opacity hover:opacity-80"
            style={{
              background: theme.accent,
              color: theme.bg,
            }}
          >
            Agendar
          </a>
        </div>

      </nav>


      <Hero theme={theme} fonts={FONTS} />
      <Portfolio theme={theme} fonts={FONTS} items={PORTFOLIO_ITEMS} lightboxIdx={lightboxIdx} setLightboxIdx={setLightboxIdx} />
      <Estilos theme={theme} fonts={FONTS} items={ESTILOS} />
      <Sobre theme={theme} fonts={FONTS} instagram={INSTAGRAM} />
      <Precos theme={theme} fonts={FONTS} items={PRECOS} />
      <Agendamento theme={theme} fonts={FONTS} formSent={formSent} setFormSent={setFormSent} />
      <FAQ theme={theme} fonts={FONTS} items={FAQS} openIdx={openFaqIdx} setOpenIdx={setOpenFaqIdx} />
      <Footer theme={theme} fonts={FONTS} instagram={INSTAGRAM} />
    </div>
  )
}

interface NavLinkProps {
  href: string
  theme: any
  children: React.ReactNode
}

function NavLink({ href, theme, children }: NavLinkProps) {
  return (
    <a
      href={href}
      style={{
        color: 'rgba(240,237,230,0.8)',
        textDecoration: 'none',
        fontSize: '13px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        transition: 'color 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,237,230,0.8)')}
    >
      {children}
    </a>
  )
}

const pageStyles = {
  background: '#080808',
  color: '#f0ede6',
  fontFamily: FONTS.body,
  overflowX: 'hidden' as const,
}

const globalStyles = `
  :root {
    --bg: #080808;
    --bg2: #0a0a0a;
    --bg3: #0f0f0f;
    --accent: #c9a96e;
    --accent2: #c9a96e;
    --text: #f0ede6;
    --muted: #888;
    --font-title: 'DM Serif Display', Georgia, serif;
  }

  body {
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 2px;
  }

  input::placeholder,
  textarea::placeholder {
    color: #444;
    font-style: italic;
  }
`
