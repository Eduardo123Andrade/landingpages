export default function Agendamento({ theme, fonts, formSent, setFormSent }: any) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
  }

  return (
    <section id="agendamento" style={{ padding: '108px 52px', background: theme.bg2 }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }} data-reveal>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '14px' }}>Contato</p>
          <h2 style={{ fontFamily: fonts.title, fontSize: 'clamp(36px, 5vw, 60px)' }}>Agendar Tattoo</h2>
          <div style={{ width: '56px', height: '1px', background: theme.accent, margin: '22px auto 0' }} />
        </div>

        {formSent ? (
          <div style={{ textAlign: 'center', padding: '48px 32px', border: `1px solid rgba(201,169,110,0.15)`, animation: 'fadeUp 0.5s ease both' }}>
            <p style={{ fontFamily: fonts.title, fontSize: '28px', color: theme.accent, marginBottom: '12px' }}>Mensagem enviada</p>
            <p style={{ fontSize: '16px', color: theme.muted, fontStyle: 'italic', lineHeight: 1.8 }}>Entraremos em contato em breve. ♥</p>
            <button
              onClick={() => setFormSent(false)}
              style={{
                marginTop: '32px',
                background: 'none',
                border: `1px solid rgba(201,169,110,0.15)`,
                color: theme.accent,
                padding: '12px 28px',
                fontSize: '11px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = theme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.15)')}
            >
              Nova mensagem
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '10px' }}>Nome *</label>
                <input type="text" required placeholder="Seu nome" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid rgba(201,169,110,0.15)`, padding: '12px 0', color: theme.text, fontSize: '17px', outline: 'none', transition: 'border-color 0.3s' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '10px' }}>WhatsApp / E-mail *</label>
                <input type="text" required placeholder="Contato" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid rgba(201,169,110,0.15)`, padding: '12px 0', color: theme.text, fontSize: '17px', outline: 'none', transition: 'border-color 0.3s' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '10px' }}>Anime / Game / Estilo</label>
              <input type="text" placeholder="Ex: One Piece, Elden Ring…" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid rgba(201,169,110,0.15)`, padding: '12px 0', color: theme.text, fontSize: '17px', outline: 'none', transition: 'border-color 0.3s' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '10px' }}>Região do Corpo</label>
                <input type="text" placeholder="Braço, costela…" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid rgba(201,169,110,0.15)`, padding: '12px 0', color: theme.text, fontSize: '17px', outline: 'none', transition: 'border-color 0.3s' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '10px' }}>Tamanho estimado</label>
                <input type="text" placeholder="Ex: 10cm" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid rgba(201,169,110,0.15)`, padding: '12px 0', color: theme.text, fontSize: '17px', outline: 'none', transition: 'border-color 0.3s' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '10px' }}>Descrição do Projeto</label>
              <textarea required rows={4} placeholder="Descreva sua ideia…" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid rgba(201,169,110,0.15)`, padding: '12px 0', color: theme.text, fontSize: '17px', outline: 'none', resize: 'none', transition: 'border-color 0.3s', fontFamily: fonts.body }} />
            </div>

            <button
              type="submit"
              style={{
                background: theme.accent,
                color: theme.bg,
                border: 'none',
                padding: '18px',
                fontSize: '12px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                fontWeight: '700',
                cursor: 'pointer',
                marginTop: '8px',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.84')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Enviar Pedido
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
