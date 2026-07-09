/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { CommunityEducation } from './CommunityEducation'

describe('CommunityEducation', () => {
  it('renders the pull-quote and supporting body copy communicating education, community, and solidarity', () => {
    render(<CommunityEducation />)

    expect(
      screen.getByText(/teach the craft\. build the family\./i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/education, community, and solidarity/i),
    ).toBeInTheDocument()
  })
})
