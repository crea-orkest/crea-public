import type { Location } from '../types/location'

export const uniqueLocations = (
  locations: (Location | undefined)[]
): Location[] => {
  const ids = new Set<string>()

  locations.map((location) => {
    if (location?.id) {
      ids.add(location.id)
    }
  })

  return Array.from(ids).map(
    (id) => locations.find((location) => location?.id === id)!
  )
}
