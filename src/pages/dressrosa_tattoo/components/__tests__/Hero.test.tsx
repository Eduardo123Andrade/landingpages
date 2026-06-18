import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

const mockTheme = {
  bg: '#080808',
  bg2: '#0a0a0a',
  bg3: '#0f0f0f',
  accent: '#c9a96e',
  text: '#f0ede6',
  muted: '#888',
}

describe('Hero Component', () => {
  it('renders hero section', () => {
    render(<Hero theme={mockTheme} />)
    expect(screen.getByText('DRESSROSA')).toBeInTheDocument()
  })

  it('displays main heading DRESSROSA', () => {
    render(<Hero theme={mockTheme} />)
    const heading = screen.getByText('DRESSROSA')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H1')
  })

  it('displays subtitle', () => {
    render(<Hero theme={mockTheme} />)
    expect(screen.getByText('TATTOO STUDIO')).toBeInTheDocument()
  })

  it('displays tagline', () => {
    render(<Hero theme={mockTheme} />)
    expect(screen.getByText(/Arte permanente/i)).toBeInTheDocument()
  })

  it('displays tagline with correct text', () => {
    render(<Hero theme={mockTheme} />)
    expect(screen.getByText(/do mangá à pele/i)).toBeInTheDocument()
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

  it('displays anime games gothic tagline', () => {
    render(<Hero theme={mockTheme} />)
    expect(screen.getByText(/Anime · Games · Gothic/i)).toBeInTheDocument()
  })

  it('displays scroll indicator', () => {
    render(<Hero theme={mockTheme} />)
    expect(screen.getByText(/scroll/i)).toBeInTheDocument()
  })
})
