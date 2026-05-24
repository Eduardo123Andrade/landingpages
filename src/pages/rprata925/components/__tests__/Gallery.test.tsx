import { render, screen } from '@testing-library/react'
import Gallery from '../Gallery'
import { C, INSTAGRAM, GALLERY } from '../../constants'

describe('Gallery', () => {
  describe('rendering', () => {
    it('renders the gallery section', () => {
      render(<Gallery />)
      expect(screen.getByTestId('gallery')).toBeInTheDocument()
    })

    it('renders the grid container', () => {
      render(<Gallery />)
      expect(screen.getByTestId('gallery-grid')).toBeInTheDocument()
    })

    it('renders all 8 gallery items', () => {
      render(<Gallery />)
      GALLERY.forEach((_, i) => {
        expect(screen.getByTestId(`gallery-item-${i}`)).toBeInTheDocument()
      })
    })

    it('renders the CTA link', () => {
      render(<Gallery />)
      expect(screen.getByTestId('gallery-cta')).toHaveTextContent('Ver toda a coleção no Instagram')
    })

    it('renders images with correct src attributes', () => {
      render(<Gallery />)
      const item0 = screen.getByTestId('gallery-item-0')
      expect(item0.querySelector('img')).toHaveAttribute('src', GALLERY[0])
    })

    it('all images have alt text', () => {
      render(<Gallery />)
      const images = screen.getAllByAltText('Joia em prata 925')
      expect(images).toHaveLength(GALLERY.length)
    })
  })

  describe('colors', () => {
    it('applies bgAlt background to section', () => {
      render(<Gallery />)
      expect(screen.getByTestId('gallery')).toHaveStyle({ backgroundColor: C.bgAlt })
    })

    it('applies rose border to CTA', () => {
      render(<Gallery />)
      expect(screen.getByTestId('gallery-cta')).toHaveStyle({ border: `1.5px solid ${C.rose}` })
    })

    it('applies rose color to CTA text', () => {
      render(<Gallery />)
      expect(screen.getByTestId('gallery-cta')).toHaveStyle({ color: C.rose })
    })
  })

  describe('links', () => {
    it('all gallery items link to Instagram', () => {
      render(<Gallery />)
      GALLERY.forEach((_, i) => {
        expect(screen.getByTestId(`gallery-item-${i}`)).toHaveAttribute('href', INSTAGRAM)
      })
    })

    it('CTA links to Instagram', () => {
      render(<Gallery />)
      expect(screen.getByTestId('gallery-cta')).toHaveAttribute('href', INSTAGRAM)
    })

    it('all links open in new tab', () => {
      render(<Gallery />)
      GALLERY.forEach((_, i) => {
        expect(screen.getByTestId(`gallery-item-${i}`)).toHaveAttribute('target', '_blank')
      })
    })
  })

  describe('responsiveness', () => {
    it('grid has responsive column classes', () => {
      render(<Gallery />)
      const grid = screen.getByTestId('gallery-grid')
      expect(grid.className).toContain('grid-cols-2')
      expect(grid.className).toContain('md:grid-cols-4')
    })

    it('section has responsive padding', () => {
      render(<Gallery />)
      const section = screen.getByTestId('gallery')
      expect(section.className).toContain('px-6')
      expect(section.className).toContain('md:px-12')
    })

    it('section has id "produtos" for nav anchor', () => {
      render(<Gallery />)
      expect(screen.getByTestId('gallery')).toHaveAttribute('id', 'produtos')
    })
  })
})
