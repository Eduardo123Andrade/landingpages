import { render, screen } from '@testing-library/react'
import Header from '../Header'
import { C, WHATSAPP, NAV_LINKS } from '../../constants'

describe('Header', () => {
  describe('rendering', () => {
    it('renders the header element', () => {
      render(<Header />)
      expect(screen.getByTestId('header')).toBeInTheDocument()
    })

    it('renders the logo image', () => {
      render(<Header />)
      expect(screen.getByTestId('header-logo-img')).toBeInTheDocument()
    })

    it('renders the store name', () => {
      render(<Header />)
      expect(screen.getByTestId('header-logo-name')).toHaveTextContent('Rafa Pratas')
    })

    it('renders navigation', () => {
      render(<Header />)
      expect(screen.getByTestId('header-nav')).toBeInTheDocument()
    })

    it('renders all nav links', () => {
      render(<Header />)
      NAV_LINKS.forEach(([label]) => {
        expect(screen.getByTestId(`header-nav-link-${label.toLowerCase()}`)).toBeInTheDocument()
      })
    })

    it('renders the CTA button', () => {
      render(<Header />)
      expect(screen.getByTestId('header-cta')).toHaveTextContent('Fazer pedido')
    })
  })

  describe('colors', () => {
    it('applies rose border to avatar', () => {
      render(<Header />)
      expect(screen.getByTestId('header-logo-img')).toHaveStyle({ border: `2px solid ${C.rose}` })
    })

    it('applies brown color to store name', () => {
      render(<Header />)
      expect(screen.getByTestId('header-logo-name')).toHaveStyle({ color: C.brown })
    })

    it('applies rose background to CTA', () => {
      render(<Header />)
      expect(screen.getByTestId('header-cta')).toHaveStyle({ backgroundColor: C.rose })
    })

    it('applies white text to CTA', () => {
      render(<Header />)
      expect(screen.getByTestId('header-cta')).toHaveStyle({ color: C.white })
    })
  })

  describe('links', () => {
    it('CTA links to WhatsApp', () => {
      render(<Header />)
      expect(screen.getByTestId('header-cta')).toHaveAttribute('href', WHATSAPP)
    })

    it('CTA opens in new tab', () => {
      render(<Header />)
      expect(screen.getByTestId('header-cta')).toHaveAttribute('target', '_blank')
    })

    it('nav links have correct hrefs', () => {
      render(<Header />)
      NAV_LINKS.forEach(([label, href]) => {
        expect(screen.getByTestId(`header-nav-link-${label.toLowerCase()}`)).toHaveAttribute('href', href)
      })
    })
  })

  describe('responsiveness', () => {
    it('nav is hidden on mobile and visible on md+', () => {
      render(<Header />)
      const nav = screen.getByTestId('header-nav')
      expect(nav.className).toContain('hidden')
      expect(nav.className).toContain('md:flex')
    })

    it('header has responsive horizontal padding', () => {
      render(<Header />)
      const header = screen.getByTestId('header')
      expect(header.className).toContain('px-6')
      expect(header.className).toContain('md:px-12')
    })

    it('header is sticky', () => {
      render(<Header />)
      expect(screen.getByTestId('header').className).toContain('sticky')
    })
  })
})
