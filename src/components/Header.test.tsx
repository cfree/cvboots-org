/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Header } from './Header'

describe('Header', () => {
  it('renders a "Join the list" CTA that jump-scrolls to the email signup section', () => {
    render(<Header />)

    const cta = screen.getByRole('link', { name: /join the list/i })
    expect(cta).toHaveAttribute('href', '#signup')
  })
})
