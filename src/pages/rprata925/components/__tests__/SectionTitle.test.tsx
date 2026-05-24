import { render, screen } from '@testing-library/react'
import SectionTitle from '../SectionTitle'
import { C, SERIF } from '../../constants'

describe('SectionTitle', () => {
  describe('rendering', () => {
    it('renders the title', () => {
      render(<SectionTitle>Nossas Peças</SectionTitle>)
      expect(screen.getByTestId('section-title')).toBeInTheDocument()
    })

    it('renders children text', () => {
      render(<SectionTitle>Título Teste</SectionTitle>)
      expect(screen.getByText('Título Teste')).toBeInTheDocument()
    })

    it('renders as h2', () => {
      render(<SectionTitle>Test</SectionTitle>)
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })
  })

  describe('colors', () => {
    it('applies brown text color', () => {
      render(<SectionTitle>Test</SectionTitle>)
      expect(screen.getByTestId('section-title')).toHaveStyle({ color: C.brown })
    })

    it('applies serif font family', () => {
      render(<SectionTitle>Test</SectionTitle>)
      expect(screen.getByTestId('section-title')).toHaveStyle({ fontFamily: SERIF })
    })
  })

  describe('responsiveness', () => {
    it('has responsive text size classes', () => {
      render(<SectionTitle>Test</SectionTitle>)
      const el = screen.getByTestId('section-title')
      expect(el.className).toContain('text-3xl')
      expect(el.className).toContain('md:text-4xl')
    })

    it('applies text-center when center is true (default)', () => {
      render(<SectionTitle>Test</SectionTitle>)
      expect(screen.getByTestId('section-title').className).toContain('text-center')
    })

    it('does not apply text-center when center is false', () => {
      render(<SectionTitle center={false}>Test</SectionTitle>)
      expect(screen.getByTestId('section-title').className).not.toContain('text-center')
    })
  })
})
