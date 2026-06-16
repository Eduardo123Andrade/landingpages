export default function Sobre({ theme, fonts, instagram }: any) {
  return (
    <section id="sobre" style={{ padding: '108px 52px', background: theme.bg2 }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '88px', alignItems: 'center' }} data-reveal>
        <div style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '3/4', background: theme.bg3, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: `repeating-linear-gradient(135deg, ${theme.bg3}, ${theme.bg3} 18px, ${theme.bg2} 18px, ${theme.bg2} 36px)` }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/dressrosa-tattoo/tatuadora/587652654_17868795972472898_4056990377599748810_n.jpg" alt="Karol" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div style={{ position: 'absolute', top: '-14px', left: '-14px', width: '48px', height: '48px', borderTop: `2px solid ${theme.accent}`, borderLeft: `2px solid ${theme.accent}` }} />
          <div style={{ position: 'absolute', bottom: '-14px', right: '-14px', width: '48px', height: '48px', borderBottom: `2px solid ${theme.accent}`, borderRight: `2px solid ${theme.accent}` }} />
        </div>

        <div>
          <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '18px' }}>A Artista</p>
          <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, marginBottom: '36px' }}>
            A Arte que
            <br />
            <em style={{ fontStyle: 'italic', color: theme.accent2 }}>Vive</em> na Pele
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.95, color: theme.muted, fontWeight: 300, marginBottom: '22px' }}>
            Sou tatuadora especializada em universos de anime e games — de One Piece a Elden Ring — com uma estética gótica e editorial única. Cada traço é um capítulo da sua história, gravado para sempre.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.95, color: theme.muted, fontWeight: 300, marginBottom: '44px' }}>Trabalho com hora marcada e projeto personalizado, garantindo que cada peça seja tão única quanto você.</p>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              border: `1px solid rgba(201,169,110,0.30)`,
              color: theme.accent,
              padding: '14px 32px',
              fontSize: '12px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.35s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.accent
              e.currentTarget.style.background = 'rgba(201,169,110,0.06)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(201,169,110,0.30)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            ◈ @dressrosatattoo
          </a>
        </div>
      </div>
    </section>
  )
}
