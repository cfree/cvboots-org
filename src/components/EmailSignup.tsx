import { useState } from 'react'

import { ScrollReveal } from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import { trackSignUp } from '@/lib/analytics'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function EmailSignup() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const body = new URLSearchParams(
      new FormData(event.currentTarget) as unknown as Record<string, string>,
    ).toString()

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!response.ok) throw new Error('Signup failed')
      setStatus('success')
      trackSignUp()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="signup"
      className="mx-auto max-w-2xl px-4 py-16 text-center md:py-24"
    >
      <ScrollReveal className="flex flex-col items-center gap-6">
        <div>
          <h2 className="font-display text-accent text-4xl leading-[0.95] md:text-5xl">
            Stay in the Loop.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Get updates on stands, events, and everything CVBA.
          </p>
        </div>

        {status === 'success' ? (
          <p
            role="status"
            className="collage-tape rounded-md px-6 py-4 text-lg font-medium"
          >
            You&#39;re on the list. Watch your inbox.
          </p>
        ) : (
          <form
            name="signup"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="flex w-full max-w-sm flex-col gap-3 sm:flex-row"
          >
            <input type="hidden" name="form-name" value="signup" />
            <div className="hidden">
              <label>
                Don&#39;t fill this out if you&#39;re human:
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <label htmlFor="signup-email" className="sr-only">
              Email address
            </label>
            <input
              id="signup-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="border-input bg-background flex-1 rounded-md border px-4 py-2 text-base"
            />
            <Button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Joining…' : 'Join'}
            </Button>
          </form>
        )}

        {status === 'error' && (
          <p role="alert" className="text-destructive text-sm">
            Something went wrong — please try again.
          </p>
        )}

        <p className="text-muted-foreground text-xs">
          No spam, unsubscribe anytime. This site uses analytics cookies.
        </p>
      </ScrollReveal>
    </section>
  )
}
