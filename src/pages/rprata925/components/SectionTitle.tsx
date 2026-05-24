import type { ReactNode } from 'react'
import { C, SERIF } from '../constants'

interface Props { children: ReactNode; center?: boolean }

export default function SectionTitle({ children, center = true }: Props) {
  return (
    <h2
      data-testid="section-title"
      className={`text-3xl md:text-4xl font-bold leading-snug${center ? ' text-center' : ''}`}
      style={{ fontFamily: SERIF, color: C.brown }}
    >
      {children}
    </h2>
  )
}
