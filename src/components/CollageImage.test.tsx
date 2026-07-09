/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { CollageImage } from './CollageImage'

describe('CollageImage', () => {
  it('renders an image cropped to fill its frame regardless of its source size', () => {
    render(<CollageImage src="/stand.jpg" alt="Bootblack stand" />)

    const img = screen.getByRole('img', { name: /bootblack stand/i })
    expect(img).toHaveAttribute('src', '/stand.jpg')
    expect(img.className).toContain('object-cover')
    expect(img.className).toContain('h-full')
    expect(img.className).toContain('w-full')
  })

  it('sits inset within the collage frame so the torn-paper edge and tape stay visible', () => {
    render(<CollageImage src="/stand.jpg" alt="Bootblack stand" />)

    const img = screen.getByRole('img', { name: /bootblack stand/i })
    const frame = img.parentElement
    expect(frame?.className).toContain('inset-6')
    expect(frame?.className).not.toContain('inset-0')
  })
})
