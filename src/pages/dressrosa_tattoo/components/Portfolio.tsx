import React from "react"

export default function Portfolio({ theme, items, lightboxIdx, setLightboxIdx }: any) {
  const [touchStart, setTouchStart] = React.useState(0)
  const [touchEnd, setTouchEnd] = React.useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientY)
    handleSwipe()
  }

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      setLightboxIdx((lightboxIdx + 1) % items.length)
    }
    if (touchEnd - touchStart > 50) {
      setLightboxIdx((lightboxIdx - 1 + items.length) % items.length)
    }
  }

  return (
    <>
      <section id="portfolio" className="py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12" style={{ background: theme.bg2 }}>
        <div className="max-w-6xl mx-auto">
          <div data-reveal className="text-center mb-12 md:mb-16 lg:mb-20">
            <p className="text-xs md:text-sm lg:text-base tracking-widest uppercase mb-3 md:mb-4" style={{ color: theme.accent }}>Galeria</p>
            <h2 className="font-title text-4xl md:text-5xl lg:text-6xl leading-tight">Trabalhos Recentes</h2>
            <div className="w-14 h-px mx-auto mt-4 md:mt-6" style={{ background: theme.accent }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1" data-reveal>
            {items.map((item: any, i: number) => {
              const imageUrl = `/images/dressrosa-tattoo/${item.image || `tattoo${i + 1}.jpg`}`
              return (
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
                  <img
                    src={imageUrl}
                    alt={item.title}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const div = e.currentTarget.nextElementSibling as HTMLElement
                      if (div) div.style.display = 'flex'
                    }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `repeating-linear-gradient(-45deg, ${theme.bg3}, ${theme.bg3} 12px, ${theme.bg2} 12px, ${theme.bg2} 24px)`,
                      display: 'none',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '24px',
                      textAlign: 'center',
                    }}
                  >
                    <p style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: theme.accent }}>{item.style}</p>
                    <p style={{ fontFamily: 'var(--font-title)', fontSize: '20px', color: theme.text }}>{item.title}</p>
                    <p style={{ fontSize: '13px', color: theme.muted, fontStyle: 'italic' }}>{item.cat}</p>
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '24px',
                      textAlign: 'center',
                      opacity: 0,
                      transition: 'opacity 0.35s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                  >
                    <p style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: theme.accent }}>{item.style}</p>
                    <p style={{ fontFamily: 'var(--font-title)', fontSize: '20px', color: theme.text }}>{item.title}</p>
                    <p style={{ fontSize: '13px', color: theme.muted, fontStyle: 'italic' }}>{item.cat}</p>
                  </div>

                  <div style={{ position: 'absolute', inset: 0, border: '1px solid transparent', transition: 'border-color 0.35s' }} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {lightboxIdx !== null && (
        <div
          onClick={() => setLightboxIdx(null)}
          onWheel={(e) => {
            // e.preventDefault()
            if (e.deltaY > 0) {
              setLightboxIdx((lightboxIdx + 1) % items.length)
            } else {
              setLightboxIdx((lightboxIdx - 1 + items.length) % items.length)
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.94)',
            zIndex: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
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
              overflow: 'hidden',
            }}
          >
            {/* Image */}
            <img
              src={`/images/dressrosa-tattoo/${items[lightboxIdx].image || `tattoo${lightboxIdx + 1}.jpg`}`}
              alt={items[lightboxIdx].title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.parentElement?.querySelector('.lightbox-fallback') as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
            />

            {/* Fallback pattern when image fails */}
            <div style={{ position: 'absolute', inset: 0, background: `repeating-linear-gradient(-45deg, ${theme.bg3}, ${theme.bg3} 12px, ${theme.bg2} 12px, ${theme.bg2} 24px)`, display: 'none', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '14px' }} className="lightbox-fallback">
              <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent }}>{items[lightboxIdx].style}</p>
              <p style={{ fontFamily: 'var(--font-title)', fontSize: '32px', color: theme.text }}>{items[lightboxIdx].title}</p>
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
