import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SectionHeader from '../SectionHeader'

const mockTheme = {
  accent: '#c9a96e',
}

const mockFonts = {
  title: "'DM Serif Display', serif",
}

describe('SectionHeader Component', () => {
  it('renders subtitle', () => {
    render(<SectionHeader subtitle="Gallery" title="Works" theme={mockTheme} fonts={mockFonts} />)
    expect(screen.getByText('Gallery')).toBeInTheDocument()
  })

  it('renders title', () => {
    render(<SectionHeader subtitle="Gallery" title="Recent Works" theme={mockTheme} fonts={mockFonts} />)
    expect(screen.getByText('Recent Works')).toBeInTheDocument()
  })

  it('renders with h2 heading element', () => {
    const { container } = render(
      <SectionHeader subtitle="Gallery" title="Works" theme={mockTheme} fonts={mockFonts} />
    )
    const title = container.querySelector('h2')
    expect(title).toBeInTheDocument()
    expect(title?.textContent).toBe('Works')
  })

  it('renders divider element', () => {
    const { container } = render(
      <SectionHeader subtitle="Gallery" title="Works" theme={mockTheme} fonts={mockFonts} />
    )
    const dividers = container.querySelectorAll('div')
    expect(dividers.length).toBeGreaterThan(0)
  })

  it('has data-reveal attribute for animations', () => {
    const { container } = render(
      <SectionHeader subtitle="Gallery" title="Works" theme={mockTheme} fonts={mockFonts} />
    )
    const wrapper = container.querySelector('[data-reveal]')
    expect(wrapper).toBeInTheDocument()
  })

  it('renders all required elements', () => {
    const { container } = render(
      <SectionHeader subtitle="Gallery" title="Works" theme={mockTheme} fonts={mockFonts} />
    )
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Works')).toBeInTheDocument()
    expect(container.querySelector('[data-reveal]')).toBeInTheDocument()
  })
})
