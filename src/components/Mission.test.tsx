/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Mission } from './Mission'

describe('Mission', () => {
  it('renders the pull-quote and supporting body copy communicating care, service, and preservation', () => {
    render(<Mission />)

    expect(
      screen.getByText(/service is sacred\. so is the shine\./i),
    ).toBeInTheDocument()
    expect(screen.getByText(/bootblack tradition alive/i)).toBeInTheDocument()
  })
})
