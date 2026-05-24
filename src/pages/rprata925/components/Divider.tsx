import { C } from '../constants'

export default function Divider() {
  return (
    <div data-testid="divider" className="flex items-center justify-center gap-3 my-2" aria-hidden>
      <div data-testid="divider-line-left" style={{ width: 40, height: 1, backgroundColor: C.rose, opacity: 0.4 }} />
      <svg data-testid="divider-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8L6 0Z" fill={C.rose} opacity="0.6" />
      </svg>
      <div data-testid="divider-line-right" style={{ width: 40, height: 1, backgroundColor: C.rose, opacity: 0.4 }} />
    </div>
  )
}
