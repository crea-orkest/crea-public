import type { Author } from './author'
import type { ConcertDetailFragment } from '../generated/graphql'
import type { Image } from './image'
import type { Location } from './location'
import type { Music } from './music'

export interface Event {
  id: string
  title: string
  image?: Image | null
  locations: (Location | undefined)[]
  persons: (Author | undefined)[]
  program: (Music | undefined)[]
  slug: string
  url: string
  content?: ConcertDetailFragment['content']
}

export interface EventSmall {
  id: string
  title: string
  image?: Image | null
  locations: (Location | undefined)[]
  program: (Music | undefined)[]
  slug: string
  url: string
}
