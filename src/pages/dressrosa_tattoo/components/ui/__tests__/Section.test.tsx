import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Section from '../Section'

describe('Section Component', () => {
  it('renders section with id', () => {
    const { container } = render(
      <Section id="test-section" background="#000">
        Content
      </Section>
    )
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'test-section')
  })

  it('applies background color', () => {
    const { container } = render(
      <Section id="test" background="#ff0000">
        Content
      </Section>
    )
    const section = container.querySelector('section')
    expect(section).toHaveStyle('background: #ff0000')
  })

  it('applies custom padding', () => {
    const { container } = render(
      <Section id="test" background="#000" padding="50px 20px">
        Content
      </Section>
    )
    const section = container.querySelector('section')
    expect(section).toHaveStyle('padding: 50px 20px')
  })

  it('uses default padding when not provided', () => {
    const { container } = render(
      <Section id="test" background="#000">
        Content
      </Section>
    )
    const section = container.querySelector('section')
    expect(section).toHaveStyle('padding: 108px 52px')
  })

  it('renders children content', () => {
    const { getByText } = render(
      <Section id="test" background="#000">
        Test Content
      </Section>
    )
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('centers content with maxWidth wrapper', () => {
    const { container } = render(
      <Section id="test" background="#000">
        Content
      </Section>
    )
    const innerDiv = container.querySelector('div > div')
    expect(innerDiv).toHaveStyle('maxWidth: 1240px')
    expect(innerDiv).toHaveStyle('margin: 0 auto')
  })
})
