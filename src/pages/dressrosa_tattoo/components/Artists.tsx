import { C, SANS, ARTISTS } from '../constants'

export default function Artists() {
  return (
    <section
      id="artistas"
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
          Nossos Artistas
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {(() => {
            const items = []
            for (let i = 0; i < ARTISTS.length; i++) {
              const artist = ARTISTS[i]
              items.push(
                <div
                  key={i}
                  style={{
                    textAlign: 'center',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      aspectRatio: '1',
                      backgroundColor: C.gray,
                      marginBottom: '1.5rem',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      border: `2px solid ${C.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '4rem',
                    }}
                  >
                    <img
                      src={artist.image}
                      alt={artist.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      onError={(e) => {
                        const el = e.currentTarget
                        el.style.display = 'none'
                        el.parentElement!.textContent = '👤'
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.4rem',
                      color: C.gold,
                      marginBottom: '0.5rem',
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 'bold',
                    }}
                  >
                    {artist.name}
                  </h3>

                  <p
                    style={{
                      color: C.textMuted,
                      fontFamily: SANS,
                      fontSize: '0.95rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {artist.specialty}
                  </p>

                  <p
                    style={{
                      color: C.gold,
                      fontFamily: SANS,
                      fontSize: '0.9rem',
                    }}
                  >
                    {artist.experience}
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
