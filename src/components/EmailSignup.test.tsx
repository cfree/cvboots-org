/** @vitest-environment jsdom */
import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { EmailSignup } from './EmailSignup'

describe('EmailSignup', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders an email-only signup form with a honeypot field and trust line', () => {
    render(<EmailSignup />)

    expect(
      screen.getByRole('textbox', { name: /email address/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('form')).toHaveAttribute('name', 'signup')
    expect(
      screen.getByText(/no spam, unsubscribe anytime/i),
    ).toBeInTheDocument()
  })

  it('replaces the form with an inline success message after a successful submission, without navigating away', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal('fetch', fetchMock)

    render(<EmailSignup />)

    fireEvent.change(screen.getByRole('textbox', { name: /email address/i }), {
      target: { value: 'boots@example.com' },
    })
    fireEvent.submit(screen.getByRole('form'))

    await waitFor(() => {
      expect(screen.getByRole('status')).toHaveTextContent(
        /you're on the list/i,
      )
    })
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledWith(
      '/',
      expect.objectContaining({ method: 'POST' }),
    )
  })

  it('fires a GA sign_up event after a successful submission', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))
    const gtag = vi.fn()
    window.gtag = gtag

    render(<EmailSignup />)

    fireEvent.change(screen.getByRole('textbox', { name: /email address/i }), {
      target: { value: 'boots@example.com' },
    })
    fireEvent.submit(screen.getByRole('form'))

    await waitFor(() => {
      expect(gtag).toHaveBeenCalledWith('event', 'sign_up')
    })

    Reflect.deleteProperty(window, 'gtag')
  })
})
