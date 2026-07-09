/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ImagePlaceholder } from './ImagePlaceholder'

describe('ImagePlaceholder', () => {
  it('renders the placeholder label as decorative, non-focusable content', () => {
    render(<ImagePlaceholder label="Photo placeholder" />)

    const placeholder = screen.getByText(/photo placeholder/i)
    expect(placeholder).toBeInTheDocument()
    expect(placeholder.closest('[aria-hidden]')).not.toBeNull()
  })
})
