import { gql } from '@urql/core'
import { siteMetadata } from 'graphql/fragments/siteMetadata'

export const GET_SITE_METADATA = gql`
  query getSiteMetadata {
    general {
      ...siteMetadata
    }
  }
  ${siteMetadata}
`
