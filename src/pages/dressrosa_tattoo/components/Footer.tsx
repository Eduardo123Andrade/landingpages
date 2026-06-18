export default function Footer({ theme, instagram }: any) {
  const FooterLink = ({ href, children }: any) => (
    <a
      href={href}
      target={href === instagram ? '_blank' : undefined}
      rel={href === instagram ? 'noopener noreferrer' : undefined}
      className="text-xs md:text-sm tracking-widest uppercase transition-colors duration-300 hover:opacity-100"
      style={{
        color: theme.muted,
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
      onMouseLeave={(e) => (e.currentTarget.style.color = theme.muted)}
    >
      {children}
    </a>
  )

  return (
    <footer
      className="text-center py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12 border-t"
      style={{
        background: theme.bg2,
        borderColor: 'rgba(201,169,110,0.15)',
      }}
    >
      <div className="font-title text-3xl md:text-4xl lg:text-5xl tracking-wider mb-1" style={{ color: theme.accent }}>
        DRESSROSA
      </div>
      <p className="text-xs md:text-sm tracking-widest text-gray-500 uppercase mb-8 md:mb-10">
        Tattoo Studio
      </p>

      <div className="flex gap-6 md:gap-8 lg:gap-10 justify-center mb-8 md:mb-10 flex-wrap">
        <FooterLink href={instagram}>Instagram</FooterLink>
        <FooterLink href="#portfolio">Portfólio</FooterLink>
        <FooterLink href="#agendamento">Agendar</FooterLink>
        <FooterLink href="#faq">FAQ</FooterLink>
      </div>

      <div className="w-12 h-px mx-auto mb-6 md:mb-8" style={{ background: 'rgba(201,169,110,0.15)' }} />
      <p className="text-xs text-gray-600 tracking-widest">
        © 2026 Dress Rosa Tattoo · Todos os direitos reservados.
      </p>
    </footer>
  )
}
