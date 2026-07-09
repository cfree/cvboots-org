/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Collage } from './Collage'

describe('Collage', () => {
  it('renders its children inside the collage frame', () => {
    render(
      <Collage side="right">
        <img src="/logo.png" alt="Test logo" />
      </Collage>,
    )

    expect(screen.getByRole('img', { name: /test logo/i })).toBeInTheDocument()
  })
})
