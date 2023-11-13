import { gql } from '@urql/core'
import { pageLink } from './pageLink'

export const link = gql`
  fragment link on LinkRecord {
    id
    internalTitle
    page {
      ...pageLink
    }
  }
  ${pageLink}
`
