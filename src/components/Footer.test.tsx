/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the geography statement and a copyright line for the current year', () => {
    render(<Footer />)

    expect(
      screen.getByText(
        /based in the coachella valley — serving all of southern california/i,
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        new RegExp(
          `©\\s*${new Date().getFullYear()}\\s*coachella valley bootblack association`,
          'i',
        ),
      ),
    ).toBeInTheDocument()
  })
})
