interface NavLink {
  label: string
  href: string
}

interface HeaderProps {
  logo: React.ReactNode
  links?: NavLink[]
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export default function Header({ logo, links = [], ctaLabel, ctaHref, className = '' }: HeaderProps) {
  return (
    <header className={`w-full px-6 py-4 flex items-center justify-between ${className}`}>
      <div className="text-xl font-bold">{logo}</div>

      {links.length > 0 && (
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      {ctaLabel && ctaHref && (
        <a
          href={ctaHref}
          className="text-sm font-semibold px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
        >
          {ctaLabel}
        </a>
      )}
    </header>
  )
}
