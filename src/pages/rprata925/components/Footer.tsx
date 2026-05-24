import { C, SERIF, WHATSAPP, INSTAGRAM } from '../constants'

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="px-6 py-10 text-center"
      style={{ backgroundColor: C.bgAlt, borderTop: `1px solid ${C.border}` }}
    >
      <div className="flex flex-col items-center gap-2">
        <img
          data-testid="footer-avatar"
          src="/images/rprata925/avatar.jpg"
          alt="Rafa Pratas 925"
          className="w-10 h-10 rounded-full object-cover opacity-80"
          style={{ border: `2px solid ${C.border}` }}
        />
        <p
          data-testid="footer-name"
          className="font-bold text-sm"
          style={{ fontFamily: SERIF, color: C.brown }}
        >
          Rafa Pratas 925
        </p>
        <p className="text-xs" style={{ color: C.muted }}>
          Joias em Prata 925 · Peças delicadas para brilhar todos os dias ✨
        </p>
        <div className="flex gap-4 mt-2">
          <a
            data-testid="footer-instagram"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-opacity hover:opacity-60"
            style={{ color: C.rose }}
          >
            Instagram
          </a>
          <span style={{ color: C.border }}>·</span>
          <a
            data-testid="footer-whatsapp"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-opacity hover:opacity-60"
            style={{ color: C.rose }}
          >
            WhatsApp
          </a>
        </div>
        <p data-testid="footer-copyright" className="text-xs mt-3" style={{ color: C.border }}>
          © {new Date().getFullYear()} Rafa Pratas 925
        </p>
      </div>
    </footer>
  )
}
