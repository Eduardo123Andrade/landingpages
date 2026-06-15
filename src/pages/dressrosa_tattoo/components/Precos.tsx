export default function Precos({ theme, fonts, items }: any) {
  return (
    <section id="precos" style={{ padding: '108px 52px', background: theme.bg }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div data-reveal style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '14px' }}>Investimento</p>
          <h2 style={{ fontFamily: fonts.title, fontSize: 'clamp(40px, 5vw, 68px)' }}>Preços</h2>
          <div style={{ width: '56px', height: '1px', background: theme.accent, margin: '22px auto 0' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(201,169,110,0.15)' }} data-reveal>
          {items.map((preco: any, i: number) => (
            <div
              key={i}
              style={{
                background: theme.bg,
                padding: '52px 40px',
                textAlign: 'center',
                position: 'relative',
                transition: 'background 0.35s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = theme.bg2)}
              onMouseLeave={(e) => (e.currentTarget.style.background = theme.bg)}
            >
              {preco.destaque && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)` }} />}
              <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '20px' }}>{preco.tier}</p>
              <p style={{ fontFamily: fonts.title, fontSize: '52px', color: theme.text, lineHeight: 1 }}>{preco.valor}</p>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '36px', letterSpacing: '1px', fontStyle: 'italic' }}>{preco.sub}</p>
              <div style={{ width: '32px', height: '1px', background: 'rgba(201,169,110,0.15)', margin: '0 auto 36px' }} />
              {preco.items.map((item: string, j: number) => (
                <p key={j} style={{ fontSize: '15px', color: theme.muted, lineHeight: 2.2, fontStyle: 'italic' }}>
                  {item}
                </p>
              ))}
              <div style={{ marginTop: '36px' }}>
                <a
                  href="#agendamento"
                  style={{
                    display: 'block',
                    border: `1px solid rgba(201,169,110,0.15)`,
                    color: theme.accent,
                    padding: '12px',
                    fontSize: '11px',
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
                    e.currentTarget.style.borderColor = 'rgba(201,169,110,0.15)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  Solicitar
                </a>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '28px', fontSize: '13px', color: '#444', fontStyle: 'italic' }} data-reveal>
          * Valores finais conforme complexidade e tamanho. Orçamentos personalizados via formulário.
        </p>
      </div>
    </section>
  )
}
