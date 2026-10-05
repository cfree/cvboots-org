import { useEffect, useState } from 'react'
import { Dialog } from 'radix-ui'
import { CalendarDays, MapPin, X } from 'lucide-react'

import { ScrollReveal } from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  EVENTS,
  formatEventDate,
  formatEventTime,
  upcomingEvents,
} from '@/lib/events'
import type { CvbaEvent } from '@/lib/events'

export function useUpcomingEvents(events: Array<CvbaEvent> = EVENTS) {
  const [upcoming, setUpcoming] = useState(() => upcomingEvents(events))

  // The page is prerendered at build time, so re-check dates in the browser
  // to drop events that have passed since the last deploy.
  useEffect(() => {
    setUpcoming(upcomingEvents(events))
  }, [events])

  return upcoming
}

export function Events({ events }: { events?: Array<CvbaEvent> }) {
  const upcoming = useUpcomingEvents(events)

  // Three per row on desktop, except exactly four, which reads better as 2 × 2.
  const itemClassName = cn(
    'w-full max-w-sm sm:w-[calc((100%-2rem)/2)]',
    upcoming.length !== 4 && 'lg:w-[calc((100%-4rem)/3)]',
  )

  return (
    <section id="events" className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-display text-accent text-4xl leading-[0.95] md:text-6xl">
            Upcoming Events.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Come find us at the stand.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-16">
          {upcoming.length > 0 ? (
            upcoming.map((event) => (
              <li key={event.id} className={itemClassName}>
                <EventCard event={event} />
              </li>
            ))
          ) : (
            <li className={itemClassName}>
              <NextDateComingSoon />
            </li>
          )}
        </ul>
      </ScrollReveal>
    </section>
  )
}

/** Shown between monthly events, before the next date has been added. */
function NextDateComingSoon() {
  return (
    <article>
      <img
        src="/images/boots.jpg"
        alt="A pair of freshly shined boots"
        loading="lazy"
        className="aspect-3/4 w-full rounded-lg object-cover shadow-md"
      />
      <p className="mt-6 font-semibold">Monthly · Next date coming soon</p>
      <h3 className="mt-3 text-xl font-semibold uppercase">
        Boots &amp; Bullshit
      </h3>
      <p className="text-muted-foreground mt-2">
        Our monthly bootblack night. Shines, skill-sharing, and good company.
        Open to all, no cover. Check back soon for the next date and location.
      </p>
    </article>
  )
}

function EventCard({ event }: { event: CvbaEvent }) {
  const time = formatEventTime(event)

  return (
    <Dialog.Root>
      <article className="flex h-full flex-col">
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="group focus-visible:ring-ring/50 rounded-lg text-left outline-none focus-visible:ring-[3px]"
            aria-label={`View details for ${event.title}`}
          >
            <img
              src={event.image}
              alt={event.imageAlt}
              loading="lazy"
              className="aspect-3/4 w-full rounded-lg object-cover shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <p className="mt-6 font-semibold">
              <time dateTime={event.date}>{formatEventDate(event.date)}</time>
              {time && <span className="text-muted-foreground"> · {time}</span>}
            </p>
            <h3 className="group-hover:text-accent mt-3 text-xl font-semibold uppercase transition-colors">
              {event.title}
            </h3>
            <p className="text-muted-foreground mt-2 line-clamp-3">
              {event.summary}
            </p>
            <span className="text-accent mt-3 inline-block text-sm font-semibold">
              Event details →
            </span>
          </button>
        </Dialog.Trigger>
      </article>

      <EventDetails event={event} />
    </Dialog.Root>
  )
}

function EventDetails({ event }: { event: CvbaEvent }) {
  const time = formatEventTime(event)

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Dialog.Content className="bg-background max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl shadow-2xl">
          <div className="bg-background border-border sticky top-0 z-10 flex items-center justify-between border-b px-6 py-4">
            <Dialog.Title className="text-xl font-bold">
              {event.title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Close">
                <X className="size-6" />
              </Button>
            </Dialog.Close>
          </div>

          <div className="grid gap-6 px-6 py-6 md:grid-cols-[2fr_3fr]">
            <img
              src={event.image}
              alt={event.imageAlt}
              className="w-full self-start rounded-lg shadow-md"
            />

            <div>
              <div className="grid gap-4">
                <div className="bg-secondary flex gap-3 rounded-lg p-4">
                  <CalendarDays className="text-accent mt-0.5 size-5 shrink-0" />
                  <p className="font-semibold">
                    <time dateTime={event.date}>
                      {formatEventDate(event.date)}
                    </time>
                    {time && (
                      <span className="text-muted-foreground block font-normal">
                        {time}
                      </span>
                    )}
                  </p>
                </div>
                <div className="bg-secondary flex gap-3 rounded-lg p-4">
                  <MapPin className="text-accent mt-0.5 size-5 shrink-0" />
                  <p className="font-semibold">
                    {event.venue}
                    {event.address && (
                      <span className="text-muted-foreground block font-normal">
                        {event.address}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <Dialog.Description asChild>
                <div className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
                  {event.description.split(/\n\s*\n/).map((paragraph, i) => (
                    <p key={i} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Dialog.Description>

              {event.link && (
                <Button asChild size="lg" className="mt-8">
                  <a
                    href={event.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.link.label}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </Dialog.Content>
      </div>
    </Dialog.Portal>
  )
}
