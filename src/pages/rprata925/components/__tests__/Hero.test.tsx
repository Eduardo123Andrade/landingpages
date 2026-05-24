import { render, screen } from '@testing-library/react'
import Hero from '../Hero'
import { C, SERIF, WHATSAPP, INSTAGRAM, TRUST_ITEMS } from '../../constants'

describe('Hero', () => {
  describe('rendering', () => {
    it('renders the hero section', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero')).toBeInTheDocument()
    })

    it('renders the main title', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-title')).toBeInTheDocument()
    })

    it('renders the subtitle', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-subtitle')).toBeInTheDocument()
    })

    it('renders WhatsApp CTA', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-cta-whatsapp')).toHaveTextContent('Pedir pelo WhatsApp')
    })

    it('renders Instagram CTA', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-cta-instagram')).toHaveTextContent('Ver coleção')
    })

    it('renders all trust bar items', () => {
      render(<Hero />)
      const trustBar = screen.getByTestId('hero-trust-bar')
      TRUST_ITEMS.forEach(([, text]) => {
        expect(trustBar).toHaveTextContent(text)
      })
    })

    it('renders the divider', () => {
      render(<Hero />)
      expect(screen.getByTestId('divider')).toBeInTheDocument()
    })
  })

  describe('colors', () => {
    it('applies brown color to title', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-title')).toHaveStyle({ color: C.brown })
    })

    it('applies serif font to title', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-title')).toHaveStyle({ fontFamily: SERIF })
    })

    it('applies rose background to WhatsApp CTA', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-cta-whatsapp')).toHaveStyle({ backgroundColor: C.rose })
    })

    it('applies rose color to Instagram CTA text', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-cta-instagram')).toHaveStyle({ color: C.rose })
    })

    it('applies brownLight color to subtitle', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-subtitle')).toHaveStyle({ color: C.brownLight })
    })
  })

  describe('links', () => {
    it('WhatsApp CTA links correctly', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-cta-whatsapp')).toHaveAttribute('href', WHATSAPP)
    })

    it('Instagram CTA links correctly', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-cta-instagram')).toHaveAttribute('href', INSTAGRAM)
    })

    it('both CTAs open in new tab', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-cta-whatsapp')).toHaveAttribute('target', '_blank')
      expect(screen.getByTestId('hero-cta-instagram')).toHaveAttribute('target', '_blank')
    })
  })

  describe('responsiveness', () => {
    it('title has responsive text sizes', () => {
      render(<Hero />)
      const title = screen.getByTestId('hero-title')
      expect(title.className).toContain('text-4xl')
      expect(title.className).toContain('md:text-6xl')
    })

    it('subtitle has responsive text sizes', () => {
      render(<Hero />)
      const subtitle = screen.getByTestId('hero-subtitle')
      expect(subtitle.className).toContain('text-base')
      expect(subtitle.className).toContain('md:text-lg')
    })

    it('trust bar wraps on small screens', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero-trust-bar').className).toContain('flex-wrap')
    })

    it('section has id "inicio" for nav anchor', () => {
      render(<Hero />)
      expect(screen.getByTestId('hero')).toHaveAttribute('id', 'inicio')
    })
  })
})
