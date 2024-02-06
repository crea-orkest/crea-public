import type { ConcertDetailSmallFragment } from '../generated/graphql'
import type { EventSmall } from '../types/event'
import { locationItemFormatter } from './locationItemFormatter'
import { musicFormatter } from './musicFormatter'
import { slugFormatter } from 'utils/slugFormatter'
import { isOfTypeCloudinaryAsset } from '../types/image'
import { formatCloudinaryImage } from './formatCloudinaryImage'

export const eventSmallFormatter = (
  event: ConcertDetailSmallFragment
): EventSmall | undefined => {
  if (!event.title) return
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
    program: event.program
      .map((music) => musicFormatter(music))
      .filter(Boolean),
    locations: event.locations
      .map((location) => locationItemFormatter(location))
      .filter(Boolean),
    slug: slugFormatter({ slug: event.slug, prefix: '/concerten' }),
    url: event.slug,
  }
}
