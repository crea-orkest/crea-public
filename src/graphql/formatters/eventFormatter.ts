import type { ConcertDetailFragment } from 'graphql/generated/graphql'
import type { Event } from 'graphql/types/event'
import { authorFormatter } from './authorFormatter'
import { fileFormatter } from './fileFormatter'
import { locationItemFormatter } from './locationFormatter'
import { slugFormatter } from 'utils/slugFormatter'

export const eventFormatter = (
  event: ConcertDetailFragment
): Event | undefined => {
  if (!event.title) return
  if (!event.slug) return
  return {
    id: event.id,
    title: event.title,
    image: event.poster ? fileFormatter(event.poster) : undefined,
    persons: event.persons.map((person) => authorFormatter(person)),
    locations: event.locations
      .map((location) => locationItemFormatter(location))
      .filter(Boolean),
    url: slugFormatter({ slug: event.slug, prefix: '/concerten' }),
    content: event.content,
  }
}
