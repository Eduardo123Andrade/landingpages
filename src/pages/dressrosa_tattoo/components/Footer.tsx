import { C, SANS, INSTAGRAM, WHATSAPP } from '../constants'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: C.bg,
        borderTop: `2px solid ${C.gold}`,
        padding: '2rem',
        textAlign: 'center',
        fontFamily: SANS,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          {(() => {
            const links = [
              { label: 'Instagram', url: INSTAGRAM },
              { label: 'WhatsApp', url: WHATSAPP },
            ]
            const items = []
            for (let i = 0; i < links.length; i++) {
              const link = links[i]
              items.push(
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: C.gold,
                    textDecoration: 'none',
                    fontSize: '1.3rem',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.goldLight)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.gold)}
                >
                  {link.label}
                </a>,
              )
            }
            return items
          })()}
        </div>

        <p
          style={{
            color: C.textMuted,
            fontSize: '0.9rem',
            margin: 0,
          }}
        >
          © 2024 Dressrosa Tattoo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
