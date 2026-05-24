import { render, screen } from '@testing-library/react'
import Features from '../Features'
import { C, SERIF, FEATURES } from '../../constants'

describe('Features', () => {
  describe('rendering', () => {
    it('renders the features section', () => {
      render(<Features />)
      expect(screen.getByTestId('features')).toBeInTheDocument()
    })

    it('renders the grid', () => {
      render(<Features />)
      expect(screen.getByTestId('features-grid')).toBeInTheDocument()
    })

    it('renders all 3 feature cards', () => {
      render(<Features />)
      FEATURES.forEach((_, i) => {
        expect(screen.getByTestId(`feature-card-${i}`)).toBeInTheDocument()
      })
    })

    it('renders correct icons', () => {
      render(<Features />)
      FEATURES.forEach(({ icon }, i) => {
        expect(screen.getByTestId(`feature-icon-${i}`)).toHaveTextContent(icon)
      })
    })

    it('renders correct titles', () => {
      render(<Features />)
      FEATURES.forEach(({ title }, i) => {
        expect(screen.getByTestId(`feature-title-${i}`)).toHaveTextContent(title)
      })
    })

    it('renders correct descriptions', () => {
      render(<Features />)
      FEATURES.forEach(({ description }, i) => {
        expect(screen.getByTestId(`feature-desc-${i}`)).toHaveTextContent(description)
      })
    })
  })

  describe('colors', () => {
    it('applies white background to feature cards', () => {
      render(<Features />)
      FEATURES.forEach((_, i) => {
        expect(screen.getByTestId(`feature-card-${i}`)).toHaveStyle({ backgroundColor: C.bgCard })
      })
    })

    it('applies brown color to feature titles', () => {
      render(<Features />)
      FEATURES.forEach((_, i) => {
        expect(screen.getByTestId(`feature-title-${i}`)).toHaveStyle({ color: C.brown })
      })
    })

    it('applies serif font to feature titles', () => {
      render(<Features />)
      FEATURES.forEach((_, i) => {
        expect(screen.getByTestId(`feature-title-${i}`)).toHaveStyle({ fontFamily: SERIF })
      })
    })

    it('applies rosePale background to icon containers', () => {
      render(<Features />)
      FEATURES.forEach((_, i) => {
        expect(screen.getByTestId(`feature-icon-${i}`)).toHaveStyle({ backgroundColor: C.rosePale })
      })
    })

    it('applies brownLight color to descriptions', () => {
      render(<Features />)
      FEATURES.forEach((_, i) => {
        expect(screen.getByTestId(`feature-desc-${i}`)).toHaveStyle({ color: C.brownLight })
      })
    })
  })

  describe('responsiveness', () => {
    it('grid has responsive column classes', () => {
      render(<Features />)
      expect(screen.getByTestId('features-grid').className).toContain('md:grid-cols-3')
    })

    it('section has responsive padding', () => {
      render(<Features />)
      const section = screen.getByTestId('features')
      expect(section.className).toContain('px-6')
      expect(section.className).toContain('md:px-12')
    })

    it('section has id "diferenciais" for nav anchor', () => {
      render(<Features />)
      expect(screen.getByTestId('features')).toHaveAttribute('id', 'diferenciais')
    })
  })
})
