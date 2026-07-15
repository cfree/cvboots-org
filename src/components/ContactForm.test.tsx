/** @vitest-environment jsdom */
import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders required name, email, and message fields plus an optional phone field', () => {
    render(<ContactForm />)

    expect(screen.getByRole('textbox', { name: /^name$/i })).toBeRequired()
    expect(
      screen.getByRole('textbox', { name: /email address/i }),
    ).toBeRequired()
    expect(screen.getByRole('textbox', { name: /message/i })).toBeRequired()
    expect(
      screen.getByRole('textbox', { name: /phone number/i }),
    ).not.toBeRequired()
    expect(screen.getByRole('form')).toHaveAttribute('name', 'contact')
  })

  it('replaces the form with an inline success message after a successful submission, without navigating away', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal('fetch', fetchMock)

    render(<ContactForm />)

    fireEvent.change(screen.getByRole('textbox', { name: /^name$/i }), {
      target: { value: 'Boots McGee' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: /email address/i }), {
      target: { value: 'boots@example.com' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: /message/i }), {
      target: { value: 'Hello there' },
    })
    fireEvent.submit(screen.getByRole('form'))

    await waitFor(() => {
      expect(screen.getByRole('status')).toHaveTextContent(
        /thanks for reaching out/i,
      )
    })
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledWith(
      '/',
      expect.objectContaining({ method: 'POST' }),
    )
  })

  it('fires a GA generate_lead event after a successful submission', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))
    const gtag = vi.fn()
    window.gtag = gtag

    render(<ContactForm />)

    fireEvent.change(screen.getByRole('textbox', { name: /^name$/i }), {
      target: { value: 'Boots McGee' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: /email address/i }), {
      target: { value: 'boots@example.com' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: /message/i }), {
      target: { value: 'Hello there' },
    })
    fireEvent.submit(screen.getByRole('form'))

    await waitFor(() => {
      expect(gtag).toHaveBeenCalledWith('event', 'generate_lead')
    })

    Reflect.deleteProperty(window, 'gtag')
  })
})
