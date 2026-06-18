interface SectionHeaderProps {
  subtitle: string
  title: string
  theme: any
  fonts: any
}

export default function SectionHeader({ subtitle, title, theme, fonts }: SectionHeaderProps) {
  return (
    <div data-reveal style={{ textAlign: 'center', marginBottom: '64px' }}>
      <p style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: theme.accent, marginBottom: '14px' }}>
        {subtitle}
      </p>
      <h2 style={{ fontFamily: fonts.title, fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 1 }}>
        {title}
      </h2>
      <div style={{ width: '56px', height: '1px', background: theme.accent, margin: '22px auto 0' }} />
    </div>
  )
}
