/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'

import { NotFound } from './NotFound'

describe('NotFound', () => {
  it('renders a 404 message with a link back home', async () => {
    const rootRoute = createRootRoute({ notFoundComponent: NotFound })
    const indexRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: '/',
      component: () => <div>home</div>,
    })
    const router = createRouter({
      routeTree: rootRoute.addChildren([indexRoute]),
      history: createMemoryHistory({ initialEntries: ['/does-not-exist'] }),
    })

    render(<RouterProvider router={router} />)

    expect(
      await screen.findByText(/nothing on this stand/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute(
      'href',
      '/',
    )
  })
})
