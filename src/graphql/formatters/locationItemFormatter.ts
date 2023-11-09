import type { Location } from 'graphql/types/location'
import type { LocationItemFragment } from 'graphql/generated/graphql'
import { locationFormatter } from './locationFormatter'

export const locationItemFormatter = (
  location: LocationItemFragment
): Location | undefined => {
  if (!location.location?.id) return
  return {
    ...locationFormatter(location.location),
    startTime: location.dateTime ?? undefined,
  }
}
