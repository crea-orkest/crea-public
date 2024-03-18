import { eventsFormatter } from './eventsFormatter'

describe('eventsFormatter', () => {
  it('should return undefined if there is no concert', () => {
    expect(eventsFormatter([])).toEqual([])
  })

  it('should return an object', () => {
    expect(
      eventsFormatter([
        {
          __typename: 'ConcertRecord',
          id: 'some-id',
          title: 'required title',
          slug: 'required-slug',
          _updatedAt: '2023-08-14T09:37:24+01:00',
          _createdAt: '2023-09-01T13:32:36+01:00',
          locations: [
            {
              id: 'locations-id',
              location: {
                id: 'location-id',
              },
            },
          ],
          music: {},
          content: [],
          extraInfo: {},
        },
      ])
    ).toEqual([
      {
        __typename: 'ConcertRecord',
        _createdAt: '2023-09-01T13:32:36+01:00',
        _firstPublishedAt: undefined,
        _publishedAt: undefined,
        _updatedAt: '2023-08-14T09:37:24+01:00',
        id: 'some-id',
        image: null,
        locations: [
          {
            id: 'location-id',
            address: undefined,
            lat: undefined,
            lng: undefined,
            startTime: null,
            title: undefined,
            ticketLink: null,
          },
        ],
        title: 'required title',
        url: '/concerten/required-slug',
        slug: 'required-slug',
        music: {},
        content: [],
        extraInfo: {},
      },
    ])
  })
})
