import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Estilos from '../Estilos'

const mockTheme = {
  bg: '#0d0010',
  bg2: '#120018',
  bg3: '#1e0028',
  accent: '#c9a96e',
  text: '#f0ede6',
  muted: '#888',
}

const mockItems = [
  {
    num: 'I',
    name: 'Anime',
    desc: 'One Piece, Demon Slayer, JJK, Naruto',
    tags: ['One Piece', 'Demon Slayer'],
  },
  {
    num: 'II',
    name: 'Games',
    desc: 'Dark Souls, Elden Ring, Genshin',
    tags: ['Elden Ring', 'Dark Souls'],
  },
]

describe('Estilos Component', () => {
  it('renders section with title', () => {
    render(<Estilos theme={mockTheme} items={mockItems} />)
    expect(screen.getByText('Estilos que Tatuo')).toBeInTheDocument()
  })

  it('displays section label', () => {
    render(<Estilos theme={mockTheme} items={mockItems} />)
    expect(screen.getByText('Especialidades')).toBeInTheDocument()
  })

  it('renders style items', () => {
    render(<Estilos theme={mockTheme} items={mockItems} />)
    expect(screen.getAllByText('Anime').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Games').length).toBeGreaterThan(0)
  })

  it('displays style descriptions', () => {
    render(<Estilos theme={mockTheme} items={mockItems} />)
    expect(screen.getAllByText(/One Piece/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Dark Souls/).length).toBeGreaterThan(0)
  })
})
