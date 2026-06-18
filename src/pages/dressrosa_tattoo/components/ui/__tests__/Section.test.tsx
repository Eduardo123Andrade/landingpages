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

  it('renders section element', () => {
    const { container } = render(
      <Section id="test" background="#ff0000">
        Content
      </Section>
    )
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('renders with custom padding prop', () => {
    const { container } = render(
      <Section id="test" background="#000" padding="50px 20px">
        Content
      </Section>
    )
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('renders with default configuration', () => {
    const { container } = render(
      <Section id="test" background="#000">
        Content
      </Section>
    )
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('renders children content', () => {
    const { getByText } = render(
      <Section id="test" background="#000">
        Test Content
      </Section>
    )
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('has wrapper div structure', () => {
    const { container } = render(
      <Section id="test" background="#000">
        Content
      </Section>
    )
    const innerDiv = container.querySelector('section > div')
    expect(innerDiv).toBeInTheDocument()
  })
})
