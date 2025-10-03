import { client } from '../gqlClient'
import { metadataFormatter } from '../formatters/metadataFormatter'
import { slugFormatter } from 'utils/slugFormatter'
import {
  GetEventSeoDocument,
  type GetEventSeoQuery,
  type GetEventSeoQueryVariables,
} from '../generated/graphql'
import type { siteMetadata } from 'graphql/formatters/formatSiteMetadata'

export const getEventPageSeo = async (
  { slug }: GetEventSeoQueryVariables,
  metadata: siteMetadata
) => {
  const eventSlug = slugFormatter({ slug, prefix: '/concerten' })
  try {
    const { data } = await client.query<
      GetEventSeoQuery,
      GetEventSeoQueryVariables
    >(GetEventSeoDocument, { slug })
    return {
      data: metadataFormatter(data?.concert ?? undefined, eventSlug, metadata),
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return {
      data: metadataFormatter(undefined, eventSlug, metadata),
    }
  }
}
