import type { ConcertDetailFragment } from '../generated/graphql'
import type { Image } from './image'
import type { Location } from './location'

export interface Event {
  __typename: 'ConcertRecord'
  _createdAt: string
  _firstPublishedAt: ConcertDetailFragment['_firstPublishedAt']
  _publishedAt: ConcertDetailFragment['_publishedAt']
  _updatedAt: ConcertDetailFragment['_updatedAt']
  id: string
  title: string
  image: Image | null
  locations: Location[]
  music: { [key: string]: string } | null
  extraInfo: { [key: string]: string }
  slug: ConcertDetailFragment['slug']
  url: string
  content?: ConcertDetailFragment['content']
}

export interface EventSmall {
  id: string
  title: string
  image: Image | null
  locations: Location[]
  music: { [key: string]: string } | null
  slug: string
  url: string
}
