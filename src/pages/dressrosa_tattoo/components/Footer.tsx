export default function Footer({ theme, fonts, instagram }: any) {
  return (
    <footer style={{ background: theme.bg2, padding: '72px 52px 48px', textAlign: 'center', borderTop: `1px solid rgba(201,169,110,0.15)` }}>
      <div style={{ fontFamily: fonts.title, fontSize: '36px', letterSpacing: '5px', color: theme.accent, marginBottom: '4px' }}>DRESSROSA</div>
      <p style={{ fontSize: '11px', letterSpacing: '5px', color: '#444', textTransform: 'uppercase', marginBottom: '40px' }}>Tattoo Studio</p>

      <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.muted,
            textDecoration: 'none',
            fontSize: '12px',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = theme.muted)}
        >
          Instagram
        </a>
        <a
          href="#portfolio"
          style={{
            color: theme.muted,
            textDecoration: 'none',
            fontSize: '12px',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = theme.muted)}
        >
          Portfólio
        </a>
        <a
          href="#agendamento"
          style={{
            color: theme.muted,
            textDecoration: 'none',
            fontSize: '12px',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = theme.muted)}
        >
          Agendar
        </a>
        <a
          href="#faq"
          style={{
            color: theme.muted,
            textDecoration: 'none',
            fontSize: '12px',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = theme.muted)}
        >
          FAQ
        </a>
      </div>

      <div style={{ width: '48px', height: '1px', background: 'rgba(201,169,110,0.15)', margin: '0 auto 28px' }} />
      <p style={{ fontSize: '11px', color: '#333', letterSpacing: '1px' }}>© 2026 Dress Rosa Tattoo · Todos os direitos reservados.</p>
    </footer>
  )
}
