declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = 'G-1P8NX4YV72'

export function getAnalyticsScripts(isProd: boolean) {
  if (!isProd) return []

  return [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
      async: true,
    },
    {
      children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`,
    },
  ]
}

export function trackSignUp() {
  window.gtag?.('event', 'sign_up')
}

export function trackContactSubmit() {
  window.gtag?.('event', 'generate_lead')
}
