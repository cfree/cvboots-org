import { useState } from 'react'

import { ScrollReveal } from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { trackContactSubmit } from '@/lib/analytics'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
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
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      trackContactSubmit()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-2xl px-4 py-16 text-center md:py-24"
    >
      <ScrollReveal className="flex flex-col items-center gap-6">
        <div>
          <h2 className="font-display text-accent text-4xl leading-[0.95] md:text-5xl">
            Get in Touch.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Questions, ideas, or want to get involved? Send us a message.
          </p>
        </div>

        {status === 'success' ? (
          <p
            role="status"
            className="collage-tape rounded-md px-6 py-4 text-lg font-medium"
          >
            Thanks for reaching out. We&#39;ll be in touch soon.
          </p>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="flex w-full max-w-sm flex-col gap-3"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <label>
                Don&#39;t fill this out if you&#39;re human:
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <Label htmlFor="contact-name" className="sr-only">
              Name
            </Label>
            <Input
              id="contact-name"
              type="text"
              name="name"
              required
              placeholder="Name"
            />

            <Label htmlFor="contact-email" className="sr-only">
              Email address
            </Label>
            <Input
              id="contact-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
            />

            <Label htmlFor="contact-phone" className="sr-only">
              Phone number
            </Label>
            <Input
              id="contact-phone"
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
            />

            <Label htmlFor="contact-message" className="sr-only">
              Message
            </Label>
            <Textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              placeholder="Your message"
            />

            <Button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send'}
            </Button>
          </form>
        )}

        {status === 'error' && (
          <p role="alert" className="text-destructive text-sm">
            Something went wrong — please try again.
          </p>
        )}
      </ScrollReveal>
    </section>
  )
}
