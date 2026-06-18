import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Portfolio from '../Portfolio'

const mockTheme = {
  bg: '#0d0010',
  bg2: '#120018',
  bg3: '#1e0028',
  accent: '#c9a96e',
  text: '#f0ede6',
  muted: '#888',
}

const mockItems = [
  { title: 'Going Merry', cat: 'One Piece', style: 'Anime', image: '' },
  { title: 'Nezuko', cat: 'Demon Slayer', style: 'Anime', image: '' },
]

describe('Portfolio Component', () => {
  it('renders portfolio section', () => {
    render(
      <Portfolio
        theme={mockTheme}
        items={mockItems}
        lightboxIdx={null}
        setLightboxIdx={() => {}}
      />
    )
    expect(screen.getByText('Trabalhos Recentes')).toBeInTheDocument()
  })

  it('displays gallery label', () => {
    render(
      <Portfolio
        theme={mockTheme}
        items={mockItems}
        lightboxIdx={null}
        setLightboxIdx={() => {}}
      />
    )
    expect(screen.getByText('Galeria')).toBeInTheDocument()
  })

  it('renders portfolio items', () => {
    render(
      <Portfolio
        theme={mockTheme}
        items={mockItems}
        lightboxIdx={null}
        setLightboxIdx={() => {}}
      />
    )
    expect(screen.getAllByText('Going Merry').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Nezuko').length).toBeGreaterThan(0)
  })
})
