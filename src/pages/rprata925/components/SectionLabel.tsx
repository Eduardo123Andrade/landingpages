import type { ReactNode } from 'react'
import { C, SANS } from '../constants'

interface Props { children: ReactNode }

export default function SectionLabel({ children }: Props) {
  return (
    <span
      data-testid="section-label"
      className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
      style={{ backgroundColor: C.roseLight, color: C.rose, fontFamily: SANS }}
    >
      {children}
    </span>
  )
}
