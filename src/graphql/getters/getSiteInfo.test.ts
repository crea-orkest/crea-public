import { GetSiteInfoDocument } from '../generated/graphql'
import { client } from '../gqlClient'
import { getSiteInfo } from './getSiteInfo'

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

describe('getSiteInfo', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: { _site: {} },
      operation: {
        key: 1,
        query: GetSiteInfoDocument,
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
    const { data } = await getSiteInfo()
    expect(data).toEqual({})
  })

  it('should not return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data } = await getSiteInfo()
    expect(data).toBeNull()
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
