import type { ConcertDetailFragment } from '../generated/graphql'
import type { Event } from '../types/event'
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
    __typename: event.__typename,
    _createdAt: event._createdAt,
    _firstPublishedAt: event._firstPublishedAt,
    _publishedAt: event._publishedAt,
    _updatedAt: event._updatedAt,
    id: event.id,
    title: event.title,
    image:
      formatCloudinaryImage(
        isOfTypeCloudinaryAsset(event.cloudinaryPoster)
          ? event.cloudinaryPoster
          : undefined
      ) || null,
    music: event.music as { [key: string]: string },
    extraInfo: event.extraInfo as { [key: string]: string },
    locations: event.locations
      .map((location) => locationItemFormatter(location))
      .filter(Boolean),
    slug: event.slug,
    url: slugFormatter({ slug: event.slug, prefix: '/concerten' }),
    content: event.content || null,
  }
}
