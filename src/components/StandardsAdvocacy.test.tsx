/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { StandardsAdvocacy } from './StandardsAdvocacy'

describe('StandardsAdvocacy', () => {
  it('renders the pull-quote and supporting body copy communicating advocacy, peer support, and protective standards', () => {
    render(<StandardsAdvocacy />)

    expect(screen.getByText(/we've got your back\./i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /fair, collaborative relationships between bootblacks and bars/i,
      ),
    ).toBeInTheDocument()
  })
})
