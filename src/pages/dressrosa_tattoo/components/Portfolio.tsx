export default function Portfolio({ theme, fonts, items, lightboxIdx, setLightboxIdx }: any) {
  return (
    <>
      <section id="portfolio" style={{ padding: '108px 52px', background: theme.bg2 }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div data-reveal style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '14px' }}>Galeria</p>
            <h2 style={{ fontFamily: fonts.title, fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 1 }}>Trabalhos Recentes</h2>
            <div style={{ width: '56px', height: '1px', background: theme.accent, margin: '22px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px' }} data-reveal>
            {items.map((item: any, i: number) => (
              <div
                key={i}
                onClick={() => setLightboxIdx(i)}
                style={{
                  aspectRatio: '1',
                  background: theme.bg3,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div style={{ position: 'absolute', inset: 0, background: `repeating-linear-gradient(-45deg, ${theme.bg3}, ${theme.bg3} 12px, ${theme.bg2} 12px, ${theme.bg2} 24px)` }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '24px', textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: theme.accent }}>{item.style}</p>
                  <p style={{ fontFamily: fonts.title, fontSize: '20px', color: theme.text }}>{item.title}</p>
                  <p style={{ fontSize: '13px', color: theme.muted, fontStyle: 'italic' }}>{item.cat}</p>
                </div>
                <div style={{ position: 'absolute', inset: 0, border: '1px solid transparent', transition: 'border-color 0.35s' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIdx !== null && (
        <div
          onClick={() => setLightboxIdx(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.94)',
            zIndex: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '680px',
              width: '92%',
              aspectRatio: '1',
              background: theme.bg3,
              position: 'relative',
              border: `1px solid rgba(201,169,110,0.15)`,
              animation: 'fadeUp 0.3s ease both',
            }}
          >
            <div style={{ position: 'absolute', inset: 0, background: `repeating-linear-gradient(-45deg, ${theme.bg3}, ${theme.bg3} 12px, ${theme.bg2} 12px, ${theme.bg2} 24px)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '14px' }}>
              <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent }}>{items[lightboxIdx].style}</p>
              <p style={{ fontFamily: fonts.title, fontSize: '32px', color: theme.text }}>{items[lightboxIdx].title}</p>
              <p style={{ fontSize: '15px', color: theme.muted, fontStyle: 'italic' }}>{items[lightboxIdx].cat}</p>
              <div style={{ width: '40px', height: '1px', background: 'rgba(201,169,110,0.15)', margin: '8px 0' }} />
              <p style={{ fontSize: '10px', color: '#333', letterSpacing: '3px', textTransform: 'uppercase' }}>foto do portfólio</p>
            </div>

            {[
              { top: '16px', left: '16px', borderTop: `2px solid ${theme.accent}`, borderLeft: `2px solid ${theme.accent}` },
              { top: '16px', right: '16px', borderTop: `2px solid ${theme.accent}`, borderRight: `2px solid ${theme.accent}` },
              { bottom: '16px', left: '16px', borderBottom: `2px solid ${theme.accent}`, borderLeft: `2px solid ${theme.accent}` },
              { bottom: '16px', right: '16px', borderBottom: `2px solid ${theme.accent}`, borderRight: `2px solid ${theme.accent}` },
            ].map((style, i) => (
              <div key={i} style={{ position: 'absolute', width: '28px', height: '28px', ...style }} />
            ))}

            <button
              onClick={() => setLightboxIdx(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                background: 'none',
                border: 'none',
                color: theme.accent,
                fontSize: '28px',
                cursor: 'pointer',
                lineHeight: 1,
                opacity: 0.7,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
            >
              ×
            </button>

            <div style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '24px' }}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIdx((lightboxIdx - 1 + items.length) % items.length)
                }}
                style={{
                  background: 'none',
                  border: `1px solid rgba(201,169,110,0.15)`,
                  color: theme.accent,
                  padding: '8px 20px',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s',
                }}
              >
                ← Anterior
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIdx((lightboxIdx + 1) % items.length)
                }}
                style={{
                  background: 'none',
                  border: `1px solid rgba(201,169,110,0.15)`,
                  color: theme.accent,
                  padding: '8px 20px',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s',
                }}
              >
                Próximo →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
