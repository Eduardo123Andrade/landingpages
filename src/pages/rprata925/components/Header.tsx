import { C, SERIF, SANS, NAV_LINKS, WHATSAPP } from '../constants'

export default function Header() {
  return (
    <header
      data-testid="header"
      className="w-full px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50"
      style={{
        backgroundColor: 'rgba(253,246,240,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div data-testid="header-logo" className="flex items-center gap-3">
        <img
          data-testid="header-logo-img"
          src="/images/rprata925/avatar.jpg"
          alt="Rafa Pratas 925"
          className="w-10 h-10 rounded-full object-cover"
          style={{ border: `2px solid ${C.rose}` }}
        />
        <div className="flex flex-col leading-none">
          <span
            data-testid="header-logo-name"
            className="text-base font-bold tracking-wide"
            style={{ fontFamily: SERIF, color: C.brown }}
          >
            Rafa Pratas
          </span>
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: C.rose }}>
            prata 925
          </span>
        </div>
      </div>

      <nav data-testid="header-nav" className="hidden md:flex gap-8">
        {NAV_LINKS.map(([label, href]) => (
          <a
            key={href}
            href={href}
            data-testid={`header-nav-link-${label.toLowerCase()}`}
            className="text-sm font-medium transition-all hover:opacity-60"
            style={{ color: C.brownMid, fontFamily: SANS }}
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        data-testid="header-cta"
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-85 hover:shadow-md"
        style={{ backgroundColor: C.rose, color: C.white, fontFamily: SANS, letterSpacing: '0.02em' }}
      >
        Fazer pedido
      </a>
    </header>
  )
}
