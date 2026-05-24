import { render, screen } from '@testing-library/react'
import Divider from '../Divider'
import { C } from '../../constants'

describe('Divider', () => {
  describe('rendering', () => {
    it('renders the divider container', () => {
      render(<Divider />)
      expect(screen.getByTestId('divider')).toBeInTheDocument()
    })

    it('renders the decorative icon', () => {
      render(<Divider />)
      expect(screen.getByTestId('divider-icon')).toBeInTheDocument()
    })

    it('renders both lines', () => {
      render(<Divider />)
      expect(screen.getByTestId('divider-line-left')).toBeInTheDocument()
      expect(screen.getByTestId('divider-line-right')).toBeInTheDocument()
    })
  })

  describe('colors', () => {
    it('applies rose color to left line', () => {
      render(<Divider />)
      expect(screen.getByTestId('divider-line-left')).toHaveStyle({ backgroundColor: C.rose })
    })

    it('applies rose color to right line', () => {
      render(<Divider />)
      expect(screen.getByTestId('divider-line-right')).toHaveStyle({ backgroundColor: C.rose })
    })

    it('applies rose fill to SVG icon path', () => {
      render(<Divider />)
      const path = screen.getByTestId('divider-icon').querySelector('path')
      expect(path?.getAttribute('fill')).toBe(C.rose)
    })
  })

  describe('responsiveness', () => {
    it('uses flex layout for centering', () => {
      render(<Divider />)
      expect(screen.getByTestId('divider').className).toContain('flex')
      expect(screen.getByTestId('divider').className).toContain('items-center')
      expect(screen.getByTestId('divider').className).toContain('justify-center')
    })
  })
})
