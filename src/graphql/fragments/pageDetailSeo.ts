import { gql } from '@urql/core'
import { seoField } from './seoField'
import { tag } from './tag'

export const pageDetailSeo = gql`
  fragment pageDetailSeo on PageRecord {
    title
    _seoMetaTags {
      ...tag
    }
    seo {
      ...seoField
    }
  }
  ${seoField}
  ${tag}
`
