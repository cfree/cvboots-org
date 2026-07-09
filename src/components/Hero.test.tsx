/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the organization name and the "Bootblacks Stand Together" tagline', () => {
    render(<Hero />)

    expect(
      screen.getByText(/coachella valley bootblack association/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/bootblacks stand together/i)).toBeInTheDocument()
  })

  it('renders the CVBA logo inside the collage graphic', () => {
    render(<Hero />)

    const logo = screen.getByRole('img', {
      name: /coachella valley bootblack association logo/i,
    })
    expect(logo).toHaveAttribute('src', '/logo.png')
  })
})
