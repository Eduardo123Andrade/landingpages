interface NavigationProps {
  theme: any
  navStyle: any
  mobileMenuOpen: boolean
  setMobileMenuOpen: (value: boolean) => void
}

export default function Navigation({ theme, navStyle, mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-5 md:px-6 lg:px-8 py-4 md:py-5 lg:py-5 flex items-center justify-between transition-all duration-500"
      style={navStyle}
    >
      <a
        href="#hero"
        className="font-title text-base md:text-lg lg:text-xl tracking-wider uppercase"
        style={{ color: theme.accent }}
      >
        DressRosa
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8 lg:gap-9 items-center">
        <NavLink href="#portfolio" theme={theme}>Portfólio</NavLink>
        <NavLink href="#estilos" theme={theme}>Estilos</NavLink>
        <NavLink href="#sobre" theme={theme}>Sobre</NavLink>
        <NavLink href="#precos" theme={theme}>Preços</NavLink>
        <a
          href="#agendamento"
          className="text-xs uppercase tracking-widest font-bold px-6 py-2 transition-opacity hover:opacity-80"
          style={{
            background: theme.accent,
            color: theme.bg,
          }}
        >
          Agendar
        </a>
      </div>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex flex-col gap-1.5"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
        }}
      >
        <span className="w-6 h-px block" style={{ background: theme.accent, transition: 'all 0.3s' }}></span>
        <span className="w-5 h-px block" style={{ background: theme.accent, transition: 'all 0.3s' }}></span>
        <span className="w-4 h-px block" style={{ background: theme.accent, transition: 'all 0.3s' }}></span>
      </button>
    </nav>
  )
}

interface NavLinkProps {
  href: string
  theme: any
  children: React.ReactNode
}

function NavLink({ href, theme, children }: NavLinkProps) {
  return (
    <a
      href={href}
      style={{
        color: 'rgba(240,237,230,0.8)',
        textDecoration: 'none',
        fontSize: '13px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        transition: 'color 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,237,230,0.8)')}
    >
      {children}
    </a>
  )
}
