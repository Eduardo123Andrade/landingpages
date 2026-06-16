export default function Hero({ theme, fonts }: any) {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '140px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg,transparent,transparent 88px,rgba(201,169,110,0.06) 88px,rgba(201,169,110,0.06) 89px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '28%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', background: `radial-gradient(circle,rgba(155,89,182,0.20) 0%,transparent 68%)`, pointerEvents: 'none' }} />

      {[
        { top: '88px', left: '52px', borderTop: '1px solid rgba(201,169,110,0.15)', borderLeft: '1px solid rgba(201,169,110,0.15)' },
        { top: '88px', right: '52px', borderTop: '1px solid rgba(201,169,110,0.15)', borderRight: '1px solid rgba(201,169,110,0.15)' },
        { bottom: '48px', left: '52px', borderBottom: '1px solid rgba(201,169,110,0.15)', borderLeft: '1px solid rgba(201,169,110,0.15)' },
        { bottom: '48px', right: '52px', borderBottom: '1px solid rgba(201,169,110,0.15)', borderRight: '1px solid rgba(201,169,110,0.15)' },
      ].map((style, i) => (
        <div key={i} style={{ position: 'absolute', width: '56px', height: '56px', ...style }} />
      ))}

      <div style={{ animation: 'fadeUp 1s ease both', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', color: theme.accent, marginBottom: '28px' }}>Anime · Games · Gothic</p>

        <h1
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: 'clamp(72px, 11vw, 152px)',
            lineHeight: 0.88,
            letterSpacing: '-2px',
            animation: 'glitch 9s infinite 2s',
          }}
        >
          DRESS
          <em style={{ fontStyle: 'italic', color: theme.accent2 }}>ROSA</em>
        </h1>

        <p style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(12px, 1.4vw, 16px)', letterSpacing: '8px', textTransform: 'uppercase', color: 'rgba(240,237,230,0.3)', marginTop: '16px' }}>TATTOO STUDIO</p>

        <div style={{ width: '1px', height: '48px', background: `linear-gradient(to bottom, ${theme.accent}, transparent)`, margin: '36px auto' }} />

        <p style={{ fontSize: 'clamp(17px, 2vw, 22px)', fontWeight: 300, color: 'rgba(240,237,230,0.5)', maxWidth: '440px', margin: '0 auto 52px', fontStyle: 'italic', lineHeight: 1.7 }}>
          Arte permanente que conta a sua história — do mangá à pele.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#portfolio"
            style={{
              border: `1px solid rgba(201,169,110,0.30)`,
              color: theme.accent,
              padding: '14px 40px',
              fontSize: '12px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.35s',
              cursor: 'pointer',
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
            Ver Portfólio
          </a>
          <a
            href="#agendamento"
            style={{
              background: theme.accent,
              color: theme.bg,
              padding: '14px 40px',
              fontSize: '12px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: '700',
              transition: 'opacity 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.84')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Agendar Agora
          </a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '36px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', animation: 'pulse 2.5s infinite' }}>
        <p style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(201,169,110,0.30)' }}>scroll</p>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom,rgba(201,169,110,0.30),transparent)' }} />
      </div>
    </section>
  )
}
