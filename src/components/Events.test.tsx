/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { Events } from './Events'
import type { CvbaEvent } from '@/lib/events'

const event: CvbaEvent = {
  id: 'shine-night',
  title: 'Shine Night',
  date: '2999-06-05',
  startTime: '19:00',
  endTime: '22:30',
  venue: 'The Barn',
  address: '123 Main St, Palm Springs, CA',
  image: '/images/chair.jpg',
  imageAlt: 'Bootblack stand',
  summary: 'Free shines all night.',
  description: 'First paragraph.\n\nSecond paragraph.',
  link: { label: 'RSVP', url: 'https://example.com/rsvp' },
}

describe('Events', () => {
  it('renders an upcoming event card with its date, time, and link', () => {
    render(<Events events={[event]} />)

    expect(
      screen.getByRole('heading', { name: /upcoming events/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Shine Night')).toBeInTheDocument()
    expect(screen.getByText(/wed\. jun\. 5th/i)).toBeInTheDocument()
    expect(screen.getByText(/7PM – 10:30PM/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'RSVP' })).toHaveAttribute(
      'href',
      'https://example.com/rsvp',
    )
  })

  it('opens a details modal with the full description and venue when the card is clicked', () => {
    render(<Events events={[event]} />)

    fireEvent.click(
      screen.getByRole('button', { name: /view details for shine night/i }),
    )

    const dialog = screen.getByRole('dialog', { name: 'Shine Night' })
    expect(dialog).toHaveTextContent('Second paragraph.')
    expect(dialog).toHaveTextContent('123 Main St, Palm Springs, CA')

    fireEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows a "next date coming soon" placeholder once every event has passed', () => {
    render(<Events events={[{ ...event, date: '2000-01-01' }]} />)

    expect(screen.queryByText('Shine Night')).not.toBeInTheDocument()
    expect(screen.getByText(/next date coming soon/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /boots & bullshit/i }),
    ).toBeInTheDocument()
  })
})
