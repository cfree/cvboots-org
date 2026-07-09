/** @vitest-environment jsdom */
import { afterEach, describe, expect, it, vi } from 'vitest'

import { getAnalyticsScripts, trackSignUp } from './analytics'

describe('getAnalyticsScripts', () => {
  it('returns no scripts when not a production build', () => {
    expect(getAnalyticsScripts(false)).toEqual([])
  })

  it('includes the gtag.js snippet for G-MNB8N157DQ when it is a production build', () => {
    const scripts = getAnalyticsScripts(true)

    expect(scripts).toContainEqual(
      expect.objectContaining({
        src: 'https://www.googletagmanager.com/gtag/js?id=G-MNB8N157DQ',
      }),
    )
    expect(scripts).toContainEqual(
      expect.objectContaining({
        children: expect.stringContaining("gtag('config','G-MNB8N157DQ')"),
      }),
    )
  })
})

describe('trackSignUp', () => {
  afterEach(() => {
    Reflect.deleteProperty(window, 'gtag')
  })

  it('fires a sign_up event through window.gtag when it is available', () => {
    const gtag = vi.fn()
    window.gtag = gtag

    trackSignUp()

    expect(gtag).toHaveBeenCalledWith('event', 'sign_up')
  })
})
