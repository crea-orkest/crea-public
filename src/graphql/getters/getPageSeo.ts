import { client } from '../gqlClient'
import { metadataFormatter } from '../formatters/metadataFormatter'
import {
  GetPageSeoDocument,
  type GetPageSeoQuery,
  type GetPageSeoQueryVariables,
} from '../generated/graphql'
import type { siteMetadata } from 'graphql/formatters/formatSiteMetadata'

export const getPageSeo = async (
  { slug }: GetPageSeoQueryVariables,
  metadata: siteMetadata
) => {
  try {
    const { data, error } = await client.query<
      GetPageSeoQuery,
      GetPageSeoQueryVariables
    >(GetPageSeoDocument, { slug })
    return {
      data: metadataFormatter(data?.page ?? undefined, slug, metadata),
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: metadataFormatter(undefined, slug, metadata), error }
  }
}
