import { render, screen } from '@testing-library/react'
import FloatingWhatsApp from '../FloatingWhatsApp'
import { WHATSAPP } from '../../constants'

describe('FloatingWhatsApp', () => {
  describe('rendering', () => {
    it('renders the floating button', () => {
      render(<FloatingWhatsApp />)
      expect(screen.getByTestId('floating-whatsapp')).toBeInTheDocument()
    })

    it('renders the WhatsApp SVG icon', () => {
      render(<FloatingWhatsApp />)
      expect(screen.getByTestId('floating-whatsapp').querySelector('svg')).toBeInTheDocument()
    })
  })

  describe('colors', () => {
    it('applies WhatsApp green background', () => {
      render(<FloatingWhatsApp />)
      expect(screen.getByTestId('floating-whatsapp')).toHaveStyle({ backgroundColor: '#25D366' })
    })
  })

  describe('links', () => {
    it('links to WhatsApp', () => {
      render(<FloatingWhatsApp />)
      expect(screen.getByTestId('floating-whatsapp')).toHaveAttribute('href', WHATSAPP)
    })

    it('opens in new tab', () => {
      render(<FloatingWhatsApp />)
      expect(screen.getByTestId('floating-whatsapp')).toHaveAttribute('target', '_blank')
    })
  })

  describe('accessibility', () => {
    it('has aria-label for screen readers', () => {
      render(<FloatingWhatsApp />)
      expect(screen.getByTestId('floating-whatsapp')).toHaveAttribute('aria-label', 'Chamar no WhatsApp')
    })
  })

  describe('responsiveness', () => {
    it('is fixed positioned', () => {
      render(<FloatingWhatsApp />)
      expect(screen.getByTestId('floating-whatsapp').className).toContain('fixed')
    })

    it('is positioned at bottom-right', () => {
      render(<FloatingWhatsApp />)
      const el = screen.getByTestId('floating-whatsapp')
      expect(el.className).toContain('bottom-6')
      expect(el.className).toContain('right-6')
    })

    it('has high z-index to stay above content', () => {
      render(<FloatingWhatsApp />)
      expect(screen.getByTestId('floating-whatsapp').className).toContain('z-50')
    })
  })
})
