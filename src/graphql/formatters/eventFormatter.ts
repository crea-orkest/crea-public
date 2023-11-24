import type { ConcertDetailFragment } from '../generated/graphql'
import type { Event } from '../types/event'
import { authorFormatter } from './authorFormatter'
import { locationItemFormatter } from './locationItemFormatter'
import { slugFormatter } from 'utils/slugFormatter'
import { isOfTypeCloudinaryAsset } from '../types/image'
import { formatCloudinaryImage } from './formatCloudinaryImage'

export const eventFormatter = (
  event: ConcertDetailFragment
): Event | undefined => {
  if (!event.title) return
  if (!event.slug) return
  return {
    id: event.id,
    title: event.title,
    image: formatCloudinaryImage(
      isOfTypeCloudinaryAsset(event.poster?.asset)
        ? event.poster?.asset
        : undefined
    ),
    persons: event.persons.map((person) => authorFormatter(person)),
    locations: event.locations
      .map((location) => locationItemFormatter(location))
      .filter(Boolean),
    url: slugFormatter({ slug: event.slug, prefix: '/concerten' }),
    content: event.content,
  }
}
