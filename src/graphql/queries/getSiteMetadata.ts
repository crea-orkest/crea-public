import { gql } from '@urql/core'
import { siteMetadata } from '../fragments/siteMetadata'

export const GET_SITE_METADATA = gql`
  query getSiteMetadata {
    general {
      ...siteMetadata
    }
    _site {
      globalSeo {
        siteName
      }
    }
  }
  ${siteMetadata}
`
