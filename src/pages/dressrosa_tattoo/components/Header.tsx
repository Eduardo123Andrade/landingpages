import { C, SANS, NAV_LINKS } from '../constants'

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: C.bg,
        borderBottom: `2px solid ${C.gold}`,
        padding: '1.5rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: C.gold,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Dressrosa Tattoo
        </div>

        <nav style={{ display: 'flex', gap: '2rem', fontFamily: SANS }}>
          {(() => {
            const items = []
            for (let i = 0; i < NAV_LINKS.length; i++) {
              const [label, href] = NAV_LINKS[i]
              items.push(
                <a
                  key={href}
                  href={href}
                  style={{
                    color: C.text,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.text)}
                >
                  {label}
                </a>,
              )
            }
            return items
          })()}
        </nav>
      </div>
    </header>
  )
}
