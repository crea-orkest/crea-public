import { type Event } from 'graphql/types/event'

export const mockEvent: Event = {
  __typename: 'ConcertRecord',
  _createdAt: '2023-09-01T13:32:36+01:00',
  _firstPublishedAt: undefined,
  _publishedAt: undefined,
  _updatedAt: '2023-08-14T09:37:24+01:00',
  id: 'mock-id',
  title: 'title',
  slug: 'url',
  url: '/url',
  image: undefined,
  locations: [],
  persons: [],
  program: [],
}
