/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { WhatWeDo } from './WhatWeDo'

describe('WhatWeDo', () => {
  it('renders the pull-quote and supporting body copy communicating services to bootblacks and to bars/venues/events across the Coachella Valley', () => {
    render(<WhatWeDo />)

    expect(screen.getByText(/we show up ready to shine\./i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /bars, parties, and events throughout the coachella valley/i,
      ),
    ).toBeInTheDocument()
  })
})
