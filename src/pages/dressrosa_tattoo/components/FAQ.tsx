export default function FAQ({ theme, fonts, items, openIdx, setOpenIdx }: any) {
  return (
    <section id="faq" style={{ padding: '108px 52px', background: theme.bg }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div data-reveal style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '14px' }}>Dúvidas</p>
          <h2 style={{ fontFamily: fonts.title, fontSize: 'clamp(36px, 4vw, 56px)' }}>Perguntas Frequentes</h2>
        </div>

        {items.map((faq: any, i: number) => (
          <div key={i} data-reveal style={{ borderBottom: `1px solid rgba(201,169,110,0.15)` }}>
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                padding: '26px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '24px',
              }}
            >
              <span style={{ fontFamily: fonts.title, fontSize: '19px', color: theme.text, fontWeight: 400, lineHeight: 1.3 }}>{faq.q}</span>
              <span style={{ color: theme.accent, fontSize: '22px', lineHeight: 1, flexShrink: 0, width: '24px', textAlign: 'center' }}>{openIdx === i ? '−' : '+'}</span>
            </button>

            {openIdx === i && (
              <div style={{ padding: '0 0 26px', animation: 'faqOpen 0.3s ease both' }}>
                <p style={{ fontSize: '16px', lineHeight: 1.9, color: theme.muted, fontWeight: 300, fontStyle: 'italic' }}>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
