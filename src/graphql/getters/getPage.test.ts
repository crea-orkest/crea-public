import { GetPageDocument } from '../generated/graphql'
import { client } from '../gqlClient'
import { getPage } from './getPage'

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

describe('getPage', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        page: {},
      },
      operation: {
        key: 1,
        query: GetPageDocument,
        variables: {},
        kind: 'query',
        context: {
          url: 'https://current--crea-orkest.apollographos.net/graphql',
          requestPolicy: 'cache-first',
        },
      },
      stale: false,
      hasNext: false,
    })
    const { data } = await getPage({ slug: '' })
    expect(data).toEqual({})
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getPage({ slug: '' })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
