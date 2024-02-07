import { metaTitleFormatter } from './metaTitleFormatter'
import type {
  EventPageSeoFragment,
  PageDetailSeoFragment,
} from '../generated/graphql'
import type { siteMetadata } from 'graphql/formatters/formatSiteMetadata'
import type { TitleMetaLinkTag } from 'react-datocms/seo'

export type Metadata = {
  baseUrl: string
  siteName: string
  metaTags: TitleMetaLinkTag[]
}

export const metadataFormatter = (
  data: PageDetailSeoFragment | EventPageSeoFragment | undefined,
  slug: string,
  metaData: siteMetadata
): Metadata => {
  const base = metaData.baseUrl
  const defaultTitle = metaData.title
  const pageTitle = metaTitleFormatter(defaultTitle, data)

  const indexPage = data?.__typename === 'PageRecord' &&
    !data.indexPage && {
      tag: 'meta',
      attributes: {
        name: 'robots',
        content: 'noindex,nofollow',
      },
    }

  const metaTags = [
    {
      tag: 'meta',
      attributes: {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    },
    {
      tag: 'meta',
      attributes: {
        rel: 'canonical',
        href: slug === 'homepage' ? base : `${base}/${slug}`,
      },
    },
    ...(data?._seoMetaTags || []),
    ...(indexPage ? [indexPage] : []),
    {
      tag: 'title',
      content: pageTitle,
    },
    {
      tag: 'meta',
      attributes: {
        property: 'og:title',
        content: pageTitle,
      },
    },
    {
      tag: 'meta',
      attributes: {
        name: 'twitter:title',
        content: pageTitle,
      },
    },
    // TODO add all icons
  ]

  return {
    baseUrl: base,
    siteName: defaultTitle,
    metaTags,
  }
}
