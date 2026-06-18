interface MobileMenuProps {
  theme: any
  mobileMenuOpen: boolean
  setMobileMenuOpen: (value: boolean) => void
}

export default function MobileMenu({ theme, mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '100vh',
        background: mobileMenuOpen ? 'rgba(0,0,0,0.5)' : 'transparent',
        opacity: mobileMenuOpen ? 1 : 0,
        pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        transition: 'opacity 0.3s ease, background 0.3s ease',
        zIndex: 40,
      }}
      onClick={() => setMobileMenuOpen(false)}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '280px',
          height: '100vh',
          background: theme.bg2,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          padding: '100px 24px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          borderLeft: `1px solid rgba(201,169,110,0.15)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <MobileMenuLink href="#portfolio" theme={theme} onClick={() => setMobileMenuOpen(false)}>
          Portfólio
        </MobileMenuLink>
        <MobileMenuLink href="#estilos" theme={theme} onClick={() => setMobileMenuOpen(false)}>
          Estilos
        </MobileMenuLink>
        <MobileMenuLink href="#sobre" theme={theme} onClick={() => setMobileMenuOpen(false)}>
          Sobre
        </MobileMenuLink>
        <MobileMenuLink href="#precos" theme={theme} onClick={() => setMobileMenuOpen(false)}>
          Preços
        </MobileMenuLink>
        <MobileMenuLink href="#faq" theme={theme} onClick={() => setMobileMenuOpen(false)}>
          FAQ
        </MobileMenuLink>
        <a
          href="#agendamento"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            background: theme.accent,
            color: theme.bg,
            padding: '12px 24px',
            textDecoration: 'none',
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginTop: '16px',
            textAlign: 'center',
            transition: 'opacity 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Agendar Agora
        </a>
      </div>
    </div>
  )
}

interface MobileMenuLinkProps {
  href: string
  theme: any
  children: React.ReactNode
  onClick: () => void
}

function MobileMenuLink({ href, theme, children, onClick }: MobileMenuLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        color: theme.accent,
        textDecoration: 'none',
        fontSize: '14px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        transition: 'opacity 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {children}
    </a>
  )
}
