import { gql } from '@urql/core'

export const siteMetadata = gql`
  fragment siteMetadata on GeneralRecord {
    siteMetadata
  }
`
