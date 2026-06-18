import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '../Input'

const mockTheme = {
  accent: '#c9a96e',
  text: '#f0ede6',
}

describe('Input Component', () => {
  it('renders input field', () => {
    const { container } = render(<Input theme={mockTheme} />)
    const input = container.querySelector('input')
    expect(input).toBeInTheDocument()
  })

  it('renders with label when provided', () => {
    render(<Input theme={mockTheme} label="Name" />)
    expect(screen.getByText('Name')).toBeInTheDocument()
  })

  it('renders required asterisk when required', () => {
    render(<Input theme={mockTheme} label="Email" required />)
    expect(screen.getByText(/Email/)).toBeInTheDocument()
  })

  it('applies correct input type', () => {
    const { container } = render(<Input theme={mockTheme} type="email" />)
    const input = container.querySelector('input')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('has correct placeholder text', () => {
    const { container } = render(<Input theme={mockTheme} placeholder="Enter your name" />)
    const input = container.querySelector('input') as HTMLInputElement
    expect(input.placeholder).toBe('Enter your name')
  })

  it('accepts user input', async () => {
    const { container } = render(<Input theme={mockTheme} />)
    const input = container.querySelector('input') as HTMLInputElement

    await userEvent.type(input, 'test value')
    expect(input.value).toBe('test value')
  })

  it('marks as required when required prop is true', () => {
    const { container } = render(<Input theme={mockTheme} required />)
    const input = container.querySelector('input')
    expect(input).toHaveAttribute('required')
  })
})
