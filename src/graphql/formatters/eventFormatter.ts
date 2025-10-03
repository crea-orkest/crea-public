import type { ConcertDetailFragment } from '../generated/graphql'
import type { Event } from '../types/event'
import { locationItemFormatter } from './locationItemFormatter'
import { slugFormatter } from 'utils/slugFormatter'
import { isOfTypeCloudinaryAsset } from '../types/image'
import { formatCloudinaryImage } from './formatCloudinaryImage'
import { uniqueLocations } from './uniqueLocations'
import { hasOnlyStringValues } from 'utils/hasOnlyStringValues'

export const eventFormatter = (
  event: ConcertDetailFragment
): Event | undefined => {
  if (typeof event.title !== 'string') return
  if (!event.slug) return
  return {
    __typename: event.__typename,
    _createdAt: event._createdAt,
    _firstPublishedAt: event._firstPublishedAt,
    _publishedAt: event._publishedAt,
    _updatedAt: event._updatedAt,
    id: event.id,
    title: event.title ?? '',
    image:
      formatCloudinaryImage(
        isOfTypeCloudinaryAsset(event.cloudinaryPoster)
          ? event.cloudinaryPoster
          : undefined
      ) || null,
    music:
      typeof event.music === 'object' &&
      event.music &&
      hasOnlyStringValues(event.music)
        ? event.music
        : null,
    extraInfo:
      typeof event.extraInfo === 'object' &&
      event.extraInfo !== null &&
      hasOnlyStringValues(event.extraInfo)
        ? event.extraInfo
        : {},
    locations: uniqueLocations(
      event.locations.map((location) => locationItemFormatter(location))
    ),
    slug: event.slug,
    url: slugFormatter({ slug: event.slug, prefix: '/concerten' }),
    content: event.content || null,
  }
}
