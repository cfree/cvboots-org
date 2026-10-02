/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from '@tanstack/react-router'

import { routeTree } from '@/routeTree.gen'

describe('/events', () => {
  it('redirects to the events section on the homepage', async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ['/events'] }),
    })

    await router.load()

    expect(router.state.location.pathname).toBe('/')
    expect(router.state.location.hash).toBe('events')
  })
})
