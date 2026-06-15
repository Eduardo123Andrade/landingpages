import { C, SANS, GALLERY } from '../constants'

export default function Gallery() {
  return (
    <section
      id="galeria"
      style={{
        backgroundColor: C.bgAlt,
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
          Portfólio
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {(() => {
            const items = []
            for (let i = 0; i < GALLERY.length; i++) {
              const image = GALLERY[i]
              items.push(
                <div
                  key={i}
                  style={{
                    aspectRatio: '1',
                    backgroundColor: C.gray,
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border: `2px solid ${C.border}`,
                    cursor: 'pointer',
                    transition: 'transform 0.3s, border-color 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.transform = 'scale(1.05)'
                    el.style.borderColor = C.gold
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.transform = 'scale(1)'
                    el.style.borderColor = C.border
                  }}
                >
                  <img
                    src={image}
                    alt={`Tatuagem ${i + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      const el = e.currentTarget
                      el.style.display = 'none'
                      el.parentElement!.style.display = 'flex'
                      el.parentElement!.alignItems = 'center'
                      el.parentElement!.justifyContent = 'center'
                      el.parentElement!.fontSize = '3rem'
                      el.parentElement!.textContent = '🎨'
                    }}
                  />
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
