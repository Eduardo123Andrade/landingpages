import { C, SANS, WHATSAPP } from '../constants'

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        backgroundColor: C.bg,
        padding: '6rem 2rem',
        textAlign: 'center',
        backgroundImage: `linear-gradient(135deg, ${C.bg} 0%, ${C.bgAlt} 100%)`,
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '3.5rem',
            fontFamily: "'Playfair Display', serif",
            color: C.gold,
            marginBottom: '1rem',
            fontWeight: 'bold',
          }}
        >
          Arte no Corpo
        </h1>

        <p
          style={{
            fontSize: '1.2rem',
            color: C.textMuted,
            marginBottom: '2rem',
            fontFamily: SANS,
            lineHeight: 1.6,
          }}
        >
          Transformamos suas ideias em tatuagens únicas e inesquecíveis. Qualidade, criatividade e cuidado em cada traço.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.9rem 2rem',
              backgroundColor: C.gold,
              color: C.black,
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'none',
              fontFamily: SANS,
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.goldLight)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.gold)}
          >
            Agendar Agora
          </a>

          <a
            href="#galeria"
            style={{
              padding: '0.9rem 2rem',
              backgroundColor: 'transparent',
              color: C.gold,
              border: `2px solid ${C.gold}`,
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'none',
              fontFamily: SANS,
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.gold
              e.currentTarget.style.color = C.black
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.gold
            }}
          >
            Ver Portfólio
          </a>
        </div>
      </div>
    </section>
  )
}
