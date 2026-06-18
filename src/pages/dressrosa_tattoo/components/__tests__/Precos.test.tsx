import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Precos from '../Precos'

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
    tier: 'Mini Tattoo',
    valor: 'R$250',
    sub: 'a partir de',
    destaque: false,
    items: ['Até 5cm', 'Traço limpo'],
  },
  {
    tier: 'Tattoo Média',
    valor: 'R$450',
    sub: 'a partir de',
    destaque: true,
    items: ['5cm a 15cm', 'Média complexidade'],
  },
]

describe('Precos Component', () => {
  it('renders pricing section', () => {
    render(<Precos theme={mockTheme} items={mockItems} />)
    expect(screen.getByText('Preços')).toBeInTheDocument()
  })

  it('displays investment label', () => {
    render(<Precos theme={mockTheme} items={mockItems} />)
    expect(screen.getByText('Investimento')).toBeInTheDocument()
  })

  it('renders pricing tiers', () => {
    render(<Precos theme={mockTheme} items={mockItems} />)
    expect(screen.getAllByText('Mini Tattoo').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Tattoo Média').length).toBeGreaterThan(0)
  })

  it('displays prices', () => {
    render(<Precos theme={mockTheme} items={mockItems} />)
    expect(screen.getAllByText('R$250').length).toBeGreaterThan(0)
    expect(screen.getAllByText('R$450').length).toBeGreaterThan(0)
  })

  it('shows pricing details', () => {
    render(<Precos theme={mockTheme} items={mockItems} />)
    expect(screen.getAllByText('Até 5cm').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Média complexidade').length).toBeGreaterThan(0)
  })
})
