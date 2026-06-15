import { ReactNode, CSSProperties } from 'react'

interface SectionProps {
  id: string
  background: string
  padding?: string
  children: ReactNode
  style?: CSSProperties
}

export default function Section({ id, background, padding = '108px 52px', children, style }: SectionProps) {
  return (
    <section
      id={id}
      style={{
        padding,
        background,
        ...style,
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  )
}
