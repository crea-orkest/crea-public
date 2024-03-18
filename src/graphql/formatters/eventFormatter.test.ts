import { eventFormatter } from './eventFormatter'

describe('eventFormatter', () => {
  it('should return a location object', () => {
    expect(
      eventFormatter({
        __typename: 'ConcertRecord',
        _createdAt: 'some date time string',
        _updatedAt: 'some date time string',
        id: 'some-id',
        title: 'required title',
        locations: [
          {
            id: 'ignore-this-id',
            location: {
              id: 'location-id',
            },
          },
        ],
        music: {},
        content: [],
        extraInfo: {},
        slug: 'some-slug',
      })
    ).toEqual({
      __typename: 'ConcertRecord',
      _createdAt: 'some date time string',
      _firstPublishedAt: undefined,
      _publishedAt: undefined,
      _updatedAt: 'some date time string',
      id: 'some-id',
      image: null,
      locations: [
        {
          address: undefined,
          id: 'location-id',
          lat: undefined,
          lng: undefined,
          startTime: undefined,
          title: undefined,
          ticketLink: undefined,
        },
      ],
      title: 'required title',
      url: '/concerten/some-slug',
      slug: 'some-slug',
      music: {},
      content: [],
      extraInfo: {},
    })
  })
})
