import { C, SERIF, WHATSAPP, INSTAGRAM, TRUST_ITEMS } from '../constants'
import Divider from './Divider'
import SectionLabel from './SectionLabel'

export default function Hero() {
  return (
    <section
      data-testid="hero"
      id="inicio"
      className="relative overflow-hidden flex flex-col items-center text-center px-6 pt-24 pb-20 gap-5"
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.rose}, transparent 70%)` }} />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.rose}, transparent 70%)` }} />

      <SectionLabel>✨ Joias Artesanais</SectionLabel>

      <h1
        data-testid="hero-title"
        className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl"
        style={{ fontFamily: SERIF, color: C.brown }}
      >
        Peças delicadas para{' '}
        <span className="italic" style={{ color: C.rose }}>brilhar</span>
        <br />todos os dias
      </h1>

      <p
        data-testid="hero-subtitle"
        className="text-base md:text-lg max-w-md leading-relaxed"
        style={{ color: C.brownLight }}
      >
        Joias em prata 925 feitas com amor e cuidado. Cada peça é única — elegância e leveza para cada momento da sua vida.
      </p>

      <div className="flex flex-wrap gap-3 justify-center mt-2">
        <a
          data-testid="hero-cta-whatsapp"
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-85 hover:shadow-lg hover:-translate-y-0.5"
          style={{ backgroundColor: C.rose, color: C.white }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/>
          </svg>
          Pedir pelo WhatsApp
        </a>
        <a
          data-testid="hero-cta-instagram"
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
          style={{ border: `1.5px solid ${C.rose}`, color: C.rose, backgroundColor: 'transparent' }}
        >
          Ver coleção
        </a>
      </div>

      <Divider />

      <div
        data-testid="hero-trust-bar"
        className="flex flex-wrap items-center justify-center gap-6 mt-2"
      >
        {TRUST_ITEMS.map(([icon, text]) => (
          <span key={text} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: C.muted }}>
            <span>{icon}</span> {text}
          </span>
        ))}
      </div>
    </section>
  )
}
