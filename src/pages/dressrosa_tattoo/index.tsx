import { useState, useEffect } from 'react'
import '../../styles/dressrosa.css'
import { THEME, FONTS, PORTFOLIO_ITEMS, ESTILOS, PRECOS, FAQS, THEMES_DATA, INSTAGRAM, WHATSAPP } from './constants'

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

export default function DressrosaTattoo() {
  const [theme, setTheme] = useState(THEMES_DATA[1])
  const [fontIdx, setFontIdx] = useState(0)
  const [navStyle, setNavStyle] = useState({})
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null)
  const [formSent, setFormSent] = useState(false)
  const [switcherOpen, setSwitcherOpen] = useState(false)
  const currentFont = FONT_OPTIONS[fontIdx]

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--bg', theme.bg)
    root.style.setProperty('--bg2', theme.bg2)
    root.style.setProperty('--bg3', theme.bg3)
    root.style.setProperty('--accent', theme.accent)
    root.style.setProperty('--accent2', theme.accent2)
    root.style.setProperty('--font-title', currentFont.family)
  }, [theme, fontIdx])

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
          if (e.isIntersecting) {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
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

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setSwitcherOpen(!switcherOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span className="w-6 h-px block" style={{ background: theme.accent }}></span>
          <span className="w-6 h-px block" style={{ background: theme.accent }}></span>
          <span className="w-4 h-px block" style={{ background: theme.accent }}></span>
        </button>
      </nav>

      {/* Theme Switcher */}
      <div style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 500, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
        {switcherOpen && (
          <div style={{ background: theme.bg2, border: `1px solid rgba(201,169,110,0.15)`, padding: '20px 18px', minWidth: '176px', backdropFilter: 'blur(16px)', animation: 'panelIn 0.22s ease both' }}>
            <p style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '14px' }}>Paleta</p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              {THEMES_DATA.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setTheme(t)}
                  title={t.name}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: `2px solid ${theme === t ? 'rgba(255,255,255,0.8)' : 'transparent'}`,
                    background: t.accent,
                    transition: 'border-color 0.2s, transform 0.2s',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <p style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '12px' }}>Tipografia</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {FONT_OPTIONS.map((font, i) => (
                <button
                  key={i}
                  onClick={() => setFontIdx(i)}
                  style={{
                    background: 'none',
                    border: `1px solid ${i === fontIdx ? theme.accent : 'rgba(201,169,110,0.15)'}`,
                    color: i === fontIdx ? theme.accent : '#555',
                    padding: '8px 10px',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontFamily: font.family,
                    textAlign: 'left',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = theme.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = i === fontIdx ? theme.accent : 'rgba(201,169,110,0.15)')}
                >
                  {font.label}
                </button>
              ))}
            </div>
          </div>
        )}
        <button
          onClick={() => setSwitcherOpen(!switcherOpen)}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: theme.accent,
            border: 'none',
            cursor: 'pointer',
            color: theme.bg,
            fontSize: '18px',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 4px 20px rgba(201,169,110,0.3)`,
            transition: 'opacity 0.3s',
          }}
          title="Personalizar tema"
        >
          ◈
        </button>
      </div>

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
  background: THEME.bg,
  color: THEME.text,
  fontFamily: FONTS.body,
  overflowX: 'hidden' as const,
}

const globalStyles = `
  :root {
    --bg: ${THEME.bg};
    --bg2: ${THEME.bg2};
    --bg3: ${THEME.bg3};
    --accent: ${THEME.accent};
    --accent2: ${THEME.accent2};
    --text: ${THEME.text};
    --muted: ${THEME.muted};
    --font-title: ${FONTS.title};
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
