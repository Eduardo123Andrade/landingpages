import { useState, useEffect } from 'react'
import { THEME, FONTS, PORTFOLIO_ITEMS, ESTILOS, PRECOS, FAQS, THEMES_DATA, INSTAGRAM, WHATSAPP } from './constants'
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
  const [navStyle, setNavStyle] = useState({})
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null)
  const [formSent, setFormSent] = useState(false)
  const [switcherOpen, setSwitcherOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--bg', theme.bg)
    root.style.setProperty('--bg2', theme.bg2)
    root.style.setProperty('--bg3', theme.bg3)
    root.style.setProperty('--accent', theme.accent)
    root.style.setProperty('--accent2', theme.accent2)
  }, [theme])

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
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: '22px 52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.5s, backdrop-filter 0.5s',
          ...navStyle,
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: FONTS.title,
            fontSize: '20px',
            letterSpacing: '4px',
            color: theme.accent,
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          Dress Rosa
        </a>

        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          <NavLink href="#portfolio" theme={theme}>Portfólio</NavLink>
          <NavLink href="#estilos" theme={theme}>Estilos</NavLink>
          <NavLink href="#sobre" theme={theme}>Sobre</NavLink>
          <NavLink href="#precos" theme={theme}>Preços</NavLink>
          <a
            href="#agendamento"
            style={{
              background: theme.accent,
              color: theme.bg,
              padding: '10px 26px',
              fontSize: '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: '700',
              transition: 'opacity 0.3s',
              cursor: 'pointer',
            }}
          >
            Agendar
          </a>
        </div>
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
                  onClick={() => {
                    setTheme(t)
                    setSwitcherOpen(false)
                  }}
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
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: ${FONTS.body};
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

  @keyframes glitch {
    0%, 84%, 100% { text-shadow: none; transform: none; }
    85% { text-shadow: -4px 0 rgba(255,0,58,0.5), 4px 0 rgba(0,212,255,0.5); transform: skewX(-2deg) translateX(-3px); }
    86% { text-shadow: 4px 0 rgba(255,0,58,0.5), -4px 0 rgba(0,212,255,0.5); transform: skewX(2deg) translateX(3px); }
    87% { text-shadow: none; transform: none; }
    88% { text-shadow: -2px 0 var(--accent); transform: translateX(-1px); }
    89% { text-shadow: none; transform: translateX(0); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.9; }
  }

  @keyframes panelIn {
    from { opacity: 0; transform: translateY(8px) scale(0.97); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes faqOpen {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  input::placeholder,
  textarea::placeholder {
    color: #444;
    font-family: ${FONTS.body};
    font-style: italic;
  }

  input, textarea {
    font-family: ${FONTS.body};
  }
`
