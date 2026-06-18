import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

const mockTheme = {
  bg: '#0d0010',
  bg2: '#120018',
  bg3: '#1e0028',
  accent: '#c9a96e',
  text: '#f0ede6',
  muted: '#888',
}

const mockInstagram = 'https://instagram.com/dressrosatattoo'

describe('Footer Component', () => {
  it('renders footer', () => {
    render(<Footer theme={mockTheme} instagram={mockInstagram} />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('displays studio name', () => {
    render(<Footer theme={mockTheme} instagram={mockInstagram} />)
    expect(screen.getByText('DRESSROSA')).toBeInTheDocument()
    expect(screen.getByText('Tattoo Studio')).toBeInTheDocument()
  })

  it('has Instagram link', () => {
    render(<Footer theme={mockTheme} instagram={mockInstagram} />)
    const instagramLink = screen.getByText('Instagram')
    expect(instagramLink).toHaveAttribute('href', mockInstagram)
  })

  it('has portfolio link', () => {
    render(<Footer theme={mockTheme} instagram={mockInstagram} />)
    const portfolioLink = screen.getByText('Portfólio')
    expect(portfolioLink).toHaveAttribute('href', '#portfolio')
  })

  it('has schedule link', () => {
    render(<Footer theme={mockTheme} instagram={mockInstagram} />)
    const scheduleLink = screen.getByText('Agendar')
    expect(scheduleLink).toHaveAttribute('href', '#agendamento')
  })

  it('has FAQ link', () => {
    render(<Footer theme={mockTheme} instagram={mockInstagram} />)
    const faqLink = screen.getByText('FAQ')
    expect(faqLink).toHaveAttribute('href', '#faq')
  })

  it('displays copyright', () => {
    render(<Footer theme={mockTheme} instagram={mockInstagram} />)
    expect(screen.getByText(/2026 Dress Rosa Tattoo/)).toBeInTheDocument()
  })
})
