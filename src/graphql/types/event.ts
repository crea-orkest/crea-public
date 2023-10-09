import type { Author } from './author'
import type { ConcertDetailFragment } from 'graphql/generated/graphql'
import type { Image } from './image'
import type { Location } from './location'

export interface Event {
  id: string
  title: string
  image?: Image
  locations: (Location | undefined)[]
  persons?: Author[]
  url: string
  content?: ConcertDetailFragment['content']
}
