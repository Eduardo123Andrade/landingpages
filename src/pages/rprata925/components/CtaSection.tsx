import { C, SERIF, WHATSAPP, INSTAGRAM } from '../constants'

export default function CtaSection() {
  return (
    <section
      data-testid="cta-section"
      id="contato"
      className="px-6 py-24 flex flex-col items-center text-center gap-5 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${C.roseLight}60, transparent 70%)` }}
      />

      <span className="text-4xl">🤍</span>

      <h2
        data-testid="cta-title"
        className="text-3xl md:text-5xl font-bold leading-tight max-w-lg"
        style={{ fontFamily: SERIF, color: C.brown }}
      >
        Pronta para{' '}
        <span className="italic" style={{ color: C.rose }}>brilhar?</span>
      </h2>

      <p
        data-testid="cta-subtitle"
        className="text-sm md:text-base max-w-sm leading-relaxed"
        style={{ color: C.brownLight }}
      >
        Fale com a Rafa pelo WhatsApp ou visite nosso Instagram. Atendimento rápido, peças únicas e muito carinho em cada detalhe.
      </p>

      <div className="flex flex-wrap gap-3 justify-center mt-2">
        <a
          data-testid="cta-whatsapp"
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-85 hover:shadow-lg hover:-translate-y-0.5"
          style={{ backgroundColor: '#25D366', color: '#fff' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/>
          </svg>
          Chamar no WhatsApp
        </a>
        <a
          data-testid="cta-instagram"
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
          style={{ border: `1.5px solid ${C.rose}`, color: C.rose }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0H8z"/>
          </svg>
          @rprata925
        </a>
      </div>
    </section>
  )
}
