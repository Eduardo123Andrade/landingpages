export default function Estilos({ theme, fonts, items }: any) {
  return (
    <section id="estilos" style={{ padding: '108px 52px', background: theme.bg }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div data-reveal style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '14px' }}>Especialidades</p>
          <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(40px, 5vw, 68px)' }}>Estilos que Tatuo</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(201,169,110,0.15)' }} data-reveal>
          {items.map((estilo: any, i: number) => (
            <div
              key={i}
              style={{
                background: theme.bg,
                padding: '56px 40px',
                textAlign: 'center',
                transition: 'background 0.35s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = theme.bg2)}
              onMouseLeave={(e) => (e.currentTarget.style.background = theme.bg)}
            >
              <div style={{ fontFamily: 'var(--font-title)', fontStyle: 'italic', fontSize: '28px', color: theme.accent, marginBottom: '20px' }}>{estilo.num}</div>
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '26px', marginBottom: '18px', color: theme.text }}>{estilo.name}</h3>
              <div style={{ width: '32px', height: '1px', background: 'rgba(201,169,110,0.30)', margin: '0 auto 20px' }} />
              <p style={{ fontSize: '16px', lineHeight: 1.85, color: theme.muted, fontWeight: 300, fontStyle: 'italic' }}>{estilo.desc}</p>
              <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                {estilo.tags.map((tag: string, j: number) => (
                  <span key={j} style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: theme.accent, border: `1px solid rgba(201,169,110,0.15)`, padding: '4px 12px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
