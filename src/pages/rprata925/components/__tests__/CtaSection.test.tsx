import { render, screen } from '@testing-library/react'
import CtaSection from '../CtaSection'
import { C, SERIF, WHATSAPP, INSTAGRAM } from '../../constants'

describe('CtaSection', () => {
  describe('rendering', () => {
    it('renders the CTA section', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-section')).toBeInTheDocument()
    })

    it('renders the title', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-title')).toBeInTheDocument()
    })

    it('renders title with "brilhar" text', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-title')).toHaveTextContent('brilhar')
    })

    it('renders the subtitle', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-subtitle')).toBeInTheDocument()
    })

    it('renders WhatsApp button', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-whatsapp')).toHaveTextContent('Chamar no WhatsApp')
    })

    it('renders Instagram button', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-instagram')).toHaveTextContent('@rprata925')
    })
  })

  describe('colors', () => {
    it('applies brown color to title', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-title')).toHaveStyle({ color: C.brown })
    })

    it('applies serif font to title', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-title')).toHaveStyle({ fontFamily: SERIF })
    })

    it('applies WhatsApp green to WhatsApp button', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-whatsapp')).toHaveStyle({ backgroundColor: '#25D366' })
    })

    it('applies rose color to Instagram button', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-instagram')).toHaveStyle({ color: C.rose })
    })

    it('applies rose border to Instagram button', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-instagram')).toHaveStyle({ border: `1.5px solid ${C.rose}` })
    })

    it('applies brownLight color to subtitle', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-subtitle')).toHaveStyle({ color: C.brownLight })
    })
  })

  describe('links', () => {
    it('WhatsApp button links correctly', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-whatsapp')).toHaveAttribute('href', WHATSAPP)
    })

    it('Instagram button links correctly', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-instagram')).toHaveAttribute('href', INSTAGRAM)
    })

    it('both buttons open in new tab', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-whatsapp')).toHaveAttribute('target', '_blank')
      expect(screen.getByTestId('cta-instagram')).toHaveAttribute('target', '_blank')
    })
  })

  describe('responsiveness', () => {
    it('title has responsive text sizes', () => {
      render(<CtaSection />)
      const title = screen.getByTestId('cta-title')
      expect(title.className).toContain('text-3xl')
      expect(title.className).toContain('md:text-5xl')
    })

    it('subtitle has responsive text sizes', () => {
      render(<CtaSection />)
      const subtitle = screen.getByTestId('cta-subtitle')
      expect(subtitle.className).toContain('text-sm')
      expect(subtitle.className).toContain('md:text-base')
    })

    it('section has id "contato" for nav anchor', () => {
      render(<CtaSection />)
      expect(screen.getByTestId('cta-section')).toHaveAttribute('id', 'contato')
    })
  })
})
