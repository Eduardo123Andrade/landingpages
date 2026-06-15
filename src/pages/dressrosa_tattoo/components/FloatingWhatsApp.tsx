import { C, WHATSAPP } from '../constants'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '60px',
        height: '60px',
        backgroundColor: C.gold,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.8rem',
        cursor: 'pointer',
        zIndex: 50,
        boxShadow: `0 4px 12px rgba(212, 175, 55, 0.3)`,
        transition: 'all 0.3s',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = 'scale(1.1)'
        el.style.boxShadow = `0 6px 20px rgba(212, 175, 55, 0.5)`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = 'scale(1)'
        el.style.boxShadow = `0 4px 12px rgba(212, 175, 55, 0.3)`
      }}
    >
      💬
    </a>
  )
}
