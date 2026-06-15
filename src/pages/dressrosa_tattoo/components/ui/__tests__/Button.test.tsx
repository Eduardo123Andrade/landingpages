import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../Button'

const mockTheme = {
  accent: '#c9a96e',
  bg: '#0d0010',
}

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button theme={mockTheme}>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders as link when href is provided', () => {
    render(
      <Button theme={mockTheme} href="#test">
        Link
      </Button>
    )
    const link = screen.getByText('Link')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '#test')
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button theme={mockTheme} onClick={handleClick}>Click me</Button>)

    await userEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('renders with primary variant by default', () => {
    const { container } = render(<Button theme={mockTheme}>Primary</Button>)
    const button = container.querySelector('button')
    expect(button).toHaveStyle(`background: ${mockTheme.accent}`)
  })

  it('renders with secondary variant', () => {
    const { container } = render(
      <Button theme={mockTheme} variant="secondary">
        Secondary
      </Button>
    )
    const button = container.querySelector('button')
    expect(button).toHaveStyle('color: #c9a96e')
  })

  it('renders as submit button with correct type', () => {
    const { container } = render(
      <Button theme={mockTheme} type="submit">
        Submit
      </Button>
    )
    const button = container.querySelector('button')
    expect(button).toHaveAttribute('type', 'submit')
  })
})
