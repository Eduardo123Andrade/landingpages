import { render, screen } from '@testing-library/react'
import SectionLabel from '../SectionLabel'
import { C } from '../../constants'

describe('SectionLabel', () => {
  describe('rendering', () => {
    it('renders the label', () => {
      render(<SectionLabel>Coleção</SectionLabel>)
      expect(screen.getByTestId('section-label')).toBeInTheDocument()
    })

    it('renders children text', () => {
      render(<SectionLabel>Minha Label</SectionLabel>)
      expect(screen.getByText('Minha Label')).toBeInTheDocument()
    })
  })

  describe('colors', () => {
    it('applies rose background color', () => {
      render(<SectionLabel>Test</SectionLabel>)
      expect(screen.getByTestId('section-label')).toHaveStyle({ backgroundColor: C.roseLight })
    })

    it('applies rose text color', () => {
      render(<SectionLabel>Test</SectionLabel>)
      expect(screen.getByTestId('section-label')).toHaveStyle({ color: C.rose })
    })
  })

  describe('responsiveness', () => {
    it('uses inline-block display', () => {
      render(<SectionLabel>Test</SectionLabel>)
      expect(screen.getByTestId('section-label').className).toContain('inline-block')
    })

    it('has rounded-full shape', () => {
      render(<SectionLabel>Test</SectionLabel>)
      expect(screen.getByTestId('section-label').className).toContain('rounded-full')
    })
  })
})
