import type { ConcertDetailSmallFragment } from '../generated/graphql'
import type { EventSmall } from '../types/event'
import { locationItemFormatter } from './locationItemFormatter'
import { slugFormatter } from 'utils/slugFormatter'
import { isOfTypeCloudinaryAsset } from '../types/image'
import { formatCloudinaryImage } from './formatCloudinaryImage'
import { uniqueLocations } from './uniqueLocations'

export const eventSmallFormatter = (
  event: ConcertDetailSmallFragment
): EventSmall | undefined => {
  if (typeof event.title !== 'string') return
  if (!event.slug) return
  return {
    id: event.id,
    title: event.title,
    image:
      formatCloudinaryImage(
        isOfTypeCloudinaryAsset(event.cloudinaryPoster)
          ? event.cloudinaryPoster
          : undefined
      ) || null,
    music: event.music as { [key: string]: string },
    locations: uniqueLocations(
      event.locations.map((location) => locationItemFormatter(location))
    ),
    slug: slugFormatter({ slug: event.slug, prefix: '/concerten' }),
    url: event.slug,
  }
}
