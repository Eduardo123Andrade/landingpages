import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Sobre from '../Sobre'

const mockTheme = {
  bg: '#0d0010',
  bg2: '#120018',
  bg3: '#1e0028',
  accent: '#c9a96e',
  accent2: '#9b59b6',
  text: '#f0ede6',
  muted: '#888',
}

const mockInstagram = 'https://instagram.com/dressrosatattoo'

describe('Sobre Component', () => {
  it('renders about section', () => {
    render(<Sobre theme={mockTheme} instagram={mockInstagram} />)
    expect(screen.getByText('A Artista')).toBeInTheDocument()
  })

  it('displays artist title', () => {
    render(<Sobre theme={mockTheme} instagram={mockInstagram} />)
    expect(screen.getByText(/A Arte que/i)).toBeInTheDocument()
  })

  it('displays artist description', () => {
    render(<Sobre theme={mockTheme} instagram={mockInstagram} />)
    expect(screen.getByText(/especializada em universos/i)).toBeInTheDocument()
  })

  it('has Instagram link', () => {
    render(<Sobre theme={mockTheme} instagram={mockInstagram} />)
    const instagramLink = screen.getByText(/@dressrosatattoo/)
    expect(instagramLink).toHaveAttribute('href', mockInstagram)
  })
})
