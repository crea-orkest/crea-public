import { GetPageSeoDocument } from '../generated/graphql'
import { client } from '../gqlClient'
import { getPageSeo } from './getPageSeo'

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

jest.mock('../../graphql/getters/getSiteMetadata', () => {
  const originalModule = jest.requireActual(
    '../../graphql/getters/getSiteMetadata'
  )
  return {
    __esModule: true,
    ...originalModule,
    getSiteMetadata: jest.fn(() => ({
      metadata: {
        title: 'Default title',
        description: 'Default description',
        base_url: 'https://example.com',
      },
      error: undefined,
    })),
  }
})

const mockedQuery = jest.mocked(client.query)

const metaData = {
  title: 'Default title',
  baseUrl: 'https://example.com',
}

const pageSeo = {
  siteName: metaData.title,
  baseUrl: 'https://example.com',
  metaTags: [
    {
      tag: 'meta',
      attributes: {
        rel: 'canonical',
        href: 'https://example.com/',
      },
    },
    {
      tag: 'title',
      content: metaData.title,
    },
    {
      tag: 'meta',
      attributes: {
        property: 'og:title',
        content: metaData.title,
      },
    },
    {
      tag: 'meta',
      attributes: {
        name: 'twitter:title',
        content: metaData.title,
      },
    },
  ],
}

describe('getPageSeo', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {},
      operation: {
        key: 1,
        query: GetPageSeoDocument,
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
    const { data } = await getPageSeo({ slug: '' }, metaData)
    expect(data).toEqual(pageSeo)
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getPageSeo({ slug: '' }, metaData)
    expect(data).toEqual(pageSeo)
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
