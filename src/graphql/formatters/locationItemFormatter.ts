import type { Location } from '../types/location'
import type { LocationItemFragment } from '../generated/graphql'
import { locationFormatter } from './locationFormatter'

export const locationItemFormatter = (
  location: LocationItemFragment
): Location | undefined => {
  if (!location.location?.id) return
  return {
    ...locationFormatter(location.location),
    startTime: location.dateTime ?? null,
    ticketLink: location.ticketLink ?? null,
  }
}
