import type { ConcertDetailFragment } from '../generated/graphql'
import type { Event } from '../types/event'
import { eventFormatter } from './eventFormatter'

export const eventsFormatter = (events: ConcertDetailFragment[]): Event[] => {
  const validEvents: Event[] = []
  events.map((event) => {
    const formattedEvent = eventFormatter(event)
    if (formattedEvent) validEvents.push(formattedEvent)
  })
  return validEvents
}
