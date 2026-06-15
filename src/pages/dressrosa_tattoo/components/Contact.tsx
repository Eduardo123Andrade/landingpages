import { C, SANS, WHATSAPP, PHONE, EMAIL, ADDRESS, SCHEDULE } from '../constants'

export default function Contact() {
  return (
    <section
      id="contato"
      style={{
        backgroundColor: C.bg,
        padding: '4rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            fontFamily: "'Playfair Display', serif",
            color: C.gold,
            marginBottom: '3rem',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Entre em Contato
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              backgroundColor: C.bgCard,
              padding: '2rem',
              borderRadius: '4px',
              border: `1px solid ${C.border}`,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📱</div>
            <h3
              style={{
                color: C.gold,
                marginBottom: '0.8rem',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 'bold',
              }}
            >
              WhatsApp
            </h3>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: C.textMuted,
                textDecoration: 'none',
                fontFamily: SANS,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
            >
              Clique aqui para agendar
            </a>
          </div>

          <div
            style={{
              backgroundColor: C.bgCard,
              padding: '2rem',
              borderRadius: '4px',
              border: `1px solid ${C.border}`,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📞</div>
            <h3
              style={{
                color: C.gold,
                marginBottom: '0.8rem',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 'bold',
              }}
            >
              Telefone
            </h3>
            <a
              href={`tel:${PHONE}`}
              style={{
                color: C.textMuted,
                textDecoration: 'none',
                fontFamily: SANS,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
            >
              {PHONE}
            </a>
          </div>

          <div
            style={{
              backgroundColor: C.bgCard,
              padding: '2rem',
              borderRadius: '4px',
              border: `1px solid ${C.border}`,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📍</div>
            <h3
              style={{
                color: C.gold,
                marginBottom: '0.8rem',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 'bold',
              }}
            >
              Localização
            </h3>
            <p
              style={{
                color: C.textMuted,
                fontFamily: SANS,
                lineHeight: 1.6,
              }}
            >
              {ADDRESS}
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: C.bgCard,
            padding: '2.5rem',
            borderRadius: '4px',
            border: `2px solid ${C.gold}`,
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              color: C.gold,
              marginBottom: '1.5rem',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 'bold',
            }}
          >
            Horário de Funcionamento
          </h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
            }}
          >
            {SCHEDULE.map((item, index) => (
              <p
                key={index}
                style={{
                  color: C.text,
                  fontFamily: SANS,
                  fontSize: '1rem',
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
