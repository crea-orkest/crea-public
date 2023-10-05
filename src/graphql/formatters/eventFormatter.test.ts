import { eventFormatter } from './eventFormatter'

describe('eventFormatter', () => {
  it('should return a location object', () => {
    expect(
      eventFormatter({
        __typename: 'ConcertRecord',
        _createdAt: 'some date time string',
        _updatedAt: 'some date time string',
        id: 'some-id',
        locations: [
          {
            id: 'ignore-this-id',
            location: {
              id: 'location-id',
            },
          },
        ],
        persons: [{ id: 'person-id' }],
      })
    ).toEqual({
      id: 'some-id',
      image: {
        description: '',
        height: undefined,
        id: 'fallback-id',
        title: '',
        url: 'https://creaorkest.nl/fallback.jpeg',
        width: undefined,
      },
      locations: [
        {
          address: undefined,
          id: 'location-id',
          lat: undefined,
          lon: undefined,
          startTime: undefined,
          title: undefined,
        },
      ],
      title: '',
      persons: [{ id: 'person-id', name: '', description: '' }],
    })
  })
})
