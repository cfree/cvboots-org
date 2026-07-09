/** @vitest-environment jsdom */
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'

import { ScrollReveal } from './ScrollReveal'

describe('ScrollReveal', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query.includes('prefers-reduced-motion'),
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    })
  })

  it('renders content already visible when the user prefers reduced motion', () => {
    const { getByTestId } = render(
      <ScrollReveal>
        <p data-testid="content">Hello</p>
      </ScrollReveal>,
    )

    const wrapper = getByTestId('content').parentElement
    expect(wrapper).toHaveClass('opacity-100')
    expect(wrapper).not.toHaveClass('opacity-0')
  })
})
