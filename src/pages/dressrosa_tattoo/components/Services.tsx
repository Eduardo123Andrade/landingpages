import { C, SANS, SERVICES } from '../constants'

export default function Services() {
  return (
    <section
      id="servicos"
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
          Nossos Serviços
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          {(() => {
            const items = []
            for (let i = 0; i < SERVICES.length; i++) {
              const service = SERVICES[i]
              items.push(
                <div
                  key={i}
                  style={{
                    backgroundColor: C.bgCard,
                    padding: '2rem',
                    borderRadius: '4px',
                    border: `1px solid ${C.border}`,
                    textAlign: 'center',
                    transition: 'border-color 0.3s, transform 0.3s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = C.gold
                    el.style.transform = 'translateY(-5px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = C.border
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  <div
                    style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {service.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.3rem',
                      color: C.gold,
                      marginBottom: '0.8rem',
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 'bold',
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      color: C.textMuted,
                      fontFamily: SANS,
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                    }}
                  >
                    {service.description}
                  </p>
                </div>,
              )
            }
            return items
          })()}
        </div>
      </div>
    </section>
  )
}
