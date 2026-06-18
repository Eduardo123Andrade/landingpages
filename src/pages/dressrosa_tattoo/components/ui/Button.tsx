import type { ReactNode, CSSProperties } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  theme: any
  style?: CSSProperties
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, onClick, href, variant = 'primary', theme, style, type = 'button' }: ButtonProps) {
  const baseStyle: CSSProperties = {
    fontSize: '12px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.35s',
    border: 'none',
    padding: '14px 40px',
    fontWeight: variant === 'primary' ? 700 : 400,
  }

  const variants = {
    primary: {
      background: theme.accent,
      color: theme.bg,
    },
    secondary: {
      border: `1px solid rgba(201,169,110,0.30)`,
      color: theme.accent,
      background: 'transparent',
    },
    ghost: {
      border: `1px solid rgba(201,169,110,0.15)`,
      color: theme.accent,
      background: 'transparent',
    },
  }

  const finalStyle = { ...baseStyle, ...variants[variant], ...style }

  if (href) {
    return (
      <a
        href={href}
        style={finalStyle}
        onMouseEnter={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.opacity = '0.84'
          } else {
            e.currentTarget.style.borderColor = theme.accent
            e.currentTarget.style.background = 'rgba(201,169,110,0.06)'
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.opacity = '1'
          } else {
            e.currentTarget.style.borderColor = variant === 'secondary' ? 'rgba(201,169,110,0.30)' : 'rgba(201,169,110,0.15)'
            e.currentTarget.style.background = 'transparent'
          }
        }}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={finalStyle}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.opacity = '0.84'
        } else {
          e.currentTarget.style.borderColor = theme.accent
          e.currentTarget.style.background = 'rgba(201,169,110,0.06)'
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.opacity = '1'
        } else {
          e.currentTarget.style.borderColor = variant === 'secondary' ? 'rgba(201,169,110,0.30)' : 'rgba(201,169,110,0.15)'
          e.currentTarget.style.background = 'transparent'
        }
      }}
    >
      {children}
    </button>
  )
}
