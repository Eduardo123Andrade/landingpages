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

  it('applies correct typography styles', () => {
    const { container } = render(
      <SectionHeader subtitle="Gallery" title="Works" theme={mockTheme} fonts={mockFonts} />
    )
    const title = container.querySelector('h2')
    expect(title).toHaveStyle(`fontFamily: ${mockFonts.title}`)
  })

  it('renders decorative divider line', () => {
    const { container } = render(
      <SectionHeader subtitle="Gallery" title="Works" theme={mockTheme} fonts={mockFonts} />
    )
    const divider = container.querySelector('div > div')
    expect(divider).toHaveStyle(`background: ${mockTheme.accent}`)
  })

  it('has data-reveal attribute for animations', () => {
    const { container } = render(
      <SectionHeader subtitle="Gallery" title="Works" theme={mockTheme} fonts={mockFonts} />
    )
    const wrapper = container.querySelector('[data-reveal]')
    expect(wrapper).toBeInTheDocument()
  })

  it('centers content with text-align center', () => {
    const { container } = render(
      <SectionHeader subtitle="Gallery" title="Works" theme={mockTheme} fonts={mockFonts} />
    )
    const wrapper = container.querySelector('[data-reveal]')
    expect(wrapper).toHaveStyle('textAlign: center')
  })
})
