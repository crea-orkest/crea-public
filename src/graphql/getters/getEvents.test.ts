import { GetEventDocument } from '../generated/graphql'
import { client } from '../gqlClient'
import { getEvents } from './getEvents'

jest.mock('../gqlClient', () => {
  const originalModule = jest.requireActual('../gqlClient')
  return {
    __esModule: true,
    ...originalModule,
    client: {
      ...originalModule,
      query: jest.fn(),
    },
  }
})

const mockedQuery = jest.mocked(client.query)

describe('getEvents', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        allConcerts: [
          {
            __typename: 'ConcertRecord',
            _createdAt: '2023-09-24T17:30:44+02:00',
            _firstPublishedAt: '2023-09-24T17:30:44+02:00',
            _publishedAt: '2023-09-24T17:30:44+02:00',
            _updatedAt: '2023-09-24T17:30:44+02:00',
            id: '186234305',
            title: 'another concert',
            slug: 'another-concert',
            locations: [],
            program: [],
            poster: {
              id: '72577339',
              alt: null,
              width: 342,
              height: 384,
              title: null,
              url: 'https://www.datocms-assets.com/screenshot.png',
              video: null,
              __typename: 'FileField',
            },
            persons: [],
          },
        ],
      },
      operation: {
        key: 1,
        query: GetEventDocument,
        variables: {},
        kind: 'query',
        context: {
          url: 'https://main--crea-orkest-p7nmyh.apollographos.net/graphql',
          requestPolicy: 'cache-first',
        },
      },
      stale: false,
      hasNext: false,
    })
    const { data } = await getEvents({ skip: 0, first: 1 })
    expect(data).toEqual([
      {
        __typename: 'ConcertRecord',
        _createdAt: '2023-09-24T17:30:44+02:00',
        _firstPublishedAt: '2023-09-24T17:30:44+02:00',
        _publishedAt: '2023-09-24T17:30:44+02:00',
        _updatedAt: '2023-09-24T17:30:44+02:00',
        id: '186234305',
        image: null,
        locations: [],
        persons: [],
        program: [],
        content: null,
        title: 'another concert',
        slug: 'another-concert',
        url: '/concerten/another-concert',
      },
    ])
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getEvents({ skip: 0, first: 1 })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
