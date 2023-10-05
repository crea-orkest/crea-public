import type { ConcertDetailFragment } from 'graphql/generated/graphql'
import type { Event } from 'graphql/types/event'
import type { Image } from 'graphql/types/image'
import { authorFormatter } from './authorFormatter'
import { fileFormatter } from './fileFormatter'
import { locationItemFormatter } from './locationFormatter'

// TODO: real fallback image
const fallBack: Image = {
  id: 'fallback-id',
  title: '',
  description: '',
  url: 'https://creaorkest.nl/fallback.jpeg',
}

export const eventFormatter = (event: ConcertDetailFragment): Event => ({
  id: event.id,
  title: event.title ?? '',
  image: event.poster ? fileFormatter(event.poster) : fileFormatter(fallBack),
  persons: event.persons.map((person) => authorFormatter(person)),
  locations: event.locations
    .map((location) => locationItemFormatter(location))
    .filter(Boolean),
})
