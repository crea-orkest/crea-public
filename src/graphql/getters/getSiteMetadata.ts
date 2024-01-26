import { formatSiteMetadata } from '../formatters/formatSiteMetadata'
import {
  GetSiteMetadataDocument,
  type GetSiteMetadataQuery,
  type GetSiteMetadataQueryVariables,
} from '../generated/graphql'
import { client } from '../gqlClient'

export const getSiteMetadata = async () => {
  try {
    const { data, error } = await client.query<
      GetSiteMetadataQuery,
      GetSiteMetadataQueryVariables
    >(GetSiteMetadataDocument, {})
    const siteMetadata = data?.general?.siteMetadata as { base_url?: string }
    const siteSeo = data?._site?.globalSeo
    return {
      metadata: formatSiteMetadata({
        baseUrl: siteMetadata?.base_url,
        title: siteSeo?.siteName || '',
      }),
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { metadata: formatSiteMetadata({}), error }
  }
}
