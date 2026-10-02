import { createFileRoute, redirect } from '@tanstack/react-router'

// Shareable link (cvboots.org/events) that lands on the homepage's events section.
export const Route = createFileRoute('/events')({
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'events' })
  },
})
