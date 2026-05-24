import { render, screen } from '@testing-library/react'
import HowToBuy from '../HowToBuy'
import { C, SERIF, HOW_TO_BUY_STEPS } from '../../constants'

describe('HowToBuy', () => {
  describe('rendering', () => {
    it('renders the section', () => {
      render(<HowToBuy />)
      expect(screen.getByTestId('how-to-buy')).toBeInTheDocument()
    })

    it('renders the grid', () => {
      render(<HowToBuy />)
      expect(screen.getByTestId('how-to-buy-grid')).toBeInTheDocument()
    })

    it('renders all 3 steps', () => {
      render(<HowToBuy />)
      HOW_TO_BUY_STEPS.forEach((_, i) => {
        expect(screen.getByTestId(`how-to-buy-step-${i}`)).toBeInTheDocument()
      })
    })

    it('renders step numbers', () => {
      render(<HowToBuy />)
      HOW_TO_BUY_STEPS.forEach(({ step }, i) => {
        expect(screen.getByTestId(`how-to-buy-step-number-${i}`)).toHaveTextContent(step)
      })
    })

    it('renders step titles', () => {
      render(<HowToBuy />)
      HOW_TO_BUY_STEPS.forEach(({ title }) => {
        expect(screen.getByText(title)).toBeInTheDocument()
      })
    })

    it('renders step descriptions', () => {
      render(<HowToBuy />)
      HOW_TO_BUY_STEPS.forEach(({ text }) => {
        expect(screen.getByText(text)).toBeInTheDocument()
      })
    })
  })

  describe('colors', () => {
    it('applies bgAlt background to section', () => {
      render(<HowToBuy />)
      expect(screen.getByTestId('how-to-buy')).toHaveStyle({ backgroundColor: C.bgAlt })
    })

    it('applies rose color to step numbers', () => {
      render(<HowToBuy />)
      HOW_TO_BUY_STEPS.forEach((_, i) => {
        expect(screen.getByTestId(`how-to-buy-step-number-${i}`)).toHaveStyle({ color: C.rose })
      })
    })

    it('applies white background to step cards', () => {
      render(<HowToBuy />)
      HOW_TO_BUY_STEPS.forEach((_, i) => {
        expect(screen.getByTestId(`how-to-buy-step-${i}`)).toHaveStyle({ backgroundColor: C.bgCard })
      })
    })

    it('applies serif font to step titles', () => {
      render(<HowToBuy />)
      HOW_TO_BUY_STEPS.forEach(({ title }) => {
        expect(screen.getByText(title)).toHaveStyle({ fontFamily: SERIF })
      })
    })
  })

  describe('responsiveness', () => {
    it('grid has responsive column classes', () => {
      render(<HowToBuy />)
      expect(screen.getByTestId('how-to-buy-grid').className).toContain('md:grid-cols-3')
    })

    it('section has responsive padding', () => {
      render(<HowToBuy />)
      const section = screen.getByTestId('how-to-buy')
      expect(section.className).toContain('px-6')
      expect(section.className).toContain('md:px-12')
    })
  })
})
