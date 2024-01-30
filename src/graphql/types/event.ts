import type { Author } from './author'
import type { ConcertDetailFragment } from '../generated/graphql'
import type { Image } from './image'
import type { Location } from './location'
import type { Music } from './music'

export interface Event {
  __typename: ConcertDetailFragment['__typename']
  _createdAt: ConcertDetailFragment['_createdAt']
  _firstPublishedAt: ConcertDetailFragment['_firstPublishedAt']
  _publishedAt: ConcertDetailFragment['_publishedAt']
  _updatedAt: ConcertDetailFragment['_updatedAt']
  id: ConcertDetailFragment['id']
  title: ConcertDetailFragment['title']
  image?: Image | null
  locations: (Location | undefined)[]
  persons: (Author | undefined)[]
  program: (Music | undefined)[]
  slug: ConcertDetailFragment['slug']
  url: string
  content?: ConcertDetailFragment['content']
}

export interface EventSmall {
  id: ConcertDetailFragment['id']
  title: ConcertDetailFragment['title']
  image?: Image | null
  locations: (Location | undefined)[]
  program: (Music | undefined)[]
  slug: ConcertDetailFragment['slug']
  url: string
}
