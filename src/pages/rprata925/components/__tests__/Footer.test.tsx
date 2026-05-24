import { render, screen } from '@testing-library/react'
import Footer from '../Footer'
import { C, SERIF, WHATSAPP, INSTAGRAM } from '../../constants'

describe('Footer', () => {
  describe('rendering', () => {
    it('renders the footer', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer')).toBeInTheDocument()
    })

    it('renders the avatar image', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer-avatar')).toBeInTheDocument()
    })

    it('avatar has correct src', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer-avatar')).toHaveAttribute('src', '/images/rprata925/avatar.jpg')
    })

    it('renders store name', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer-name')).toHaveTextContent('Rafa Pratas 925')
    })

    it('renders Instagram link', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer-instagram')).toBeInTheDocument()
    })

    it('renders WhatsApp link', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer-whatsapp')).toBeInTheDocument()
    })

    it('renders copyright with current year', () => {
      render(<Footer />)
      const year = new Date().getFullYear().toString()
      expect(screen.getByTestId('footer-copyright')).toHaveTextContent(year)
    })
  })

  describe('colors', () => {
    it('applies bgAlt background to footer', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer')).toHaveStyle({ backgroundColor: C.bgAlt })
    })

    it('applies brown color to store name', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer-name')).toHaveStyle({ color: C.brown })
    })

    it('applies serif font to store name', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer-name')).toHaveStyle({ fontFamily: SERIF })
    })

    it('applies rose color to Instagram link', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer-instagram')).toHaveStyle({ color: C.rose })
    })

    it('applies rose color to WhatsApp link', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer-whatsapp')).toHaveStyle({ color: C.rose })
    })
  })

  describe('links', () => {
    it('Instagram link has correct href', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer-instagram')).toHaveAttribute('href', INSTAGRAM)
    })

    it('WhatsApp link has correct href', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer-whatsapp')).toHaveAttribute('href', WHATSAPP)
    })

    it('links open in new tab', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer-instagram')).toHaveAttribute('target', '_blank')
      expect(screen.getByTestId('footer-whatsapp')).toHaveAttribute('target', '_blank')
    })
  })

  describe('responsiveness', () => {
    it('footer uses centered text layout', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer').className).toContain('text-center')
    })

    it('footer has top border', () => {
      render(<Footer />)
      expect(screen.getByTestId('footer')).toHaveStyle({ borderTop: `1px solid ${C.border}` })
    })
  })
})
