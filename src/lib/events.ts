export type CvbaEvent = {
  id: string
  title: string
  /** YYYY-MM-DD, local to the venue */
  date: string
  /** 24-hour HH:MM */
  startTime?: string
  endTime?: string
  venue: string
  address?: string
  image: string
  imageAlt: string
  /** One or two sentences shown on the card */
  summary: string
  /** Full text shown in the details modal; blank lines start new paragraphs */
  description: string
  link?: { label: string; url: string }
}

export const EVENTS: Array<CvbaEvent> = [
  {
    id: 'boots-and-bullshit-2026-10',
    title: 'Boots & Bullshit',
    date: '2026-10-15',
    startTime: '19:00',
    endTime: '21:00',
    venue: 'Rough Trade Gear',
    address: '321 E Arenas Rd, Palm Springs, CA',
    image: '/images/boots-and-bullshit-oct-2026.jpg',
    imageAlt:
      'Boots & Bullshit flyer: Thursday, Oct. 15th, 7–9 PM at Rough Trade Gear, Palm Springs',
    summary:
      'Meet the bootblacks who can get your gear ready for Palm Springs Leather Pride. Special guest Anthony Harmon. No cover charge.',
    description: `This is your chance to meet the bootblacks who can get your gear ready for Palm Springs Leather Pride, Oct 29 – Nov 1.

Special guest, Anthony Harmon, International Mr. Olympus Leather 2017, stepping in to teach chip and scratch repairs on high shines.

Co-hosted by Sky & Kobol. No cover charge. Kits welcome. Don't have one? We'll set you up.

Open to all regardless of race, gender identity or skill level.`,
  },
]

function parseDate(date: string) {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function ordinal(n: number) {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0])
}

export function formatTime(time: string) {
  const [hours, minutes] = time.split(':').map(Number)
  const suffix = hours >= 12 ? 'PM' : 'AM'
  const h = hours % 12 || 12
  return minutes
    ? `${h}:${String(minutes).padStart(2, '0')}${suffix}`
    : `${h}${suffix}`
}

/** e.g. "Sat. Nov. 14th" */
export function formatEventDate(date: string) {
  const d = parseDate(date)
  const weekday = d.toLocaleDateString('en-US', { weekday: 'short' })
  const month = d.toLocaleDateString('en-US', { month: 'short' })
  return `${weekday}. ${month}. ${ordinal(d.getDate())}`
}

/** e.g. "7PM – 10PM" */
export function formatEventTime(event: CvbaEvent) {
  if (!event.startTime) return ''
  const start = formatTime(event.startTime)
  return event.endTime ? `${start} – ${formatTime(event.endTime)}` : start
}

/** Events happening today or later, soonest first. */
export function upcomingEvents(events: Array<CvbaEvent>, now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return events
    .filter((event) => parseDate(event.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
}
