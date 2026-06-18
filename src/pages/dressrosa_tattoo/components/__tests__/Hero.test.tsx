import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

const mockTheme = {
  bg: '#0d0010',
  bg2: '#120018',
  bg3: '#1e0028',
  accent: '#c9a96e',
  accent2: '#9b59b6',
  text: '#f0ede6',
  muted: '#888',
}

describe('Hero Component', () => {
  it('renders hero section', () => {
    render(<Hero theme={mockTheme} />)
    expect(screen.getByText(/DRESS/i)).toBeInTheDocument()
  })

  it('displays main heading', () => {
    render(<Hero theme={mockTheme} />)
    expect(screen.getByText(/DRESS/i)).toBeInTheDocument()
    expect(screen.getByText(/ROSA/i)).toBeInTheDocument()
  })

  it('displays subtitle', () => {
    render(<Hero theme={mockTheme} />)
    expect(screen.getByText('TATTOO STUDIO')).toBeInTheDocument()
  })

  it('displays tagline', () => {
    render(<Hero theme={mockTheme} />)
    expect(screen.getByText(/Arte permanente/i)).toBeInTheDocument()
  })

  it('has portfolio link', () => {
    render(<Hero theme={mockTheme} />)
    const portfolioLink = screen.getByText('Ver Portfólio')
    expect(portfolioLink).toHaveAttribute('href', '#portfolio')
  })

  it('has schedule link', () => {
    render(<Hero theme={mockTheme} />)
    const scheduleLink = screen.getByText('Agendar Agora')
    expect(scheduleLink).toHaveAttribute('href', '#agendamento')
  })
})
