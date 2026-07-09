import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

if (typeof window !== 'undefined') {
  afterEach(cleanup)

  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })

  class MockIntersectionObserver {
    observe = () => {}
    unobserve = () => {}
    disconnect = () => {}
  }
  // @ts-expect-error jsdom doesn't implement IntersectionObserver
  window.IntersectionObserver = MockIntersectionObserver
}
