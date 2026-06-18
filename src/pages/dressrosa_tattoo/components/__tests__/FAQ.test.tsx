import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import FAQ from '../FAQ'

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
    q: 'Como faço para agendar?',
    a: 'Preencha o formulário ou entre em contato pelo Instagram.',
  },
  {
    q: 'Qual o cuidado necessário?',
    a: 'Forneço guia completo pós-sessão.',
  },
]

describe('FAQ Component', () => {
  it('renders FAQ section', () => {
    render(
      <FAQ
        theme={mockTheme}
        items={mockItems}
        openIdx={null}
        setOpenIdx={() => {}}
      />
    )
    expect(screen.getByText('Perguntas Frequentes')).toBeInTheDocument()
  })

  it('displays questions label', () => {
    render(
      <FAQ
        theme={mockTheme}
        items={mockItems}
        openIdx={null}
        setOpenIdx={() => {}}
      />
    )
    expect(screen.getByText('Dúvidas')).toBeInTheDocument()
  })

  it('renders FAQ questions', () => {
    render(
      <FAQ
        theme={mockTheme}
        items={mockItems}
        openIdx={null}
        setOpenIdx={() => {}}
      />
    )
    expect(screen.getByText('Como faço para agendar?')).toBeInTheDocument()
    expect(screen.getByText('Qual o cuidado necessário?')).toBeInTheDocument()
  })
})
