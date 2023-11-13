import { gql } from '@urql/core'
import { concertLink } from './concertLink'
import { pageLink } from './pageLink'

export const headerBody = gql`
  fragment headerBody on HeaderModelBodyField {
    blocks
    links {
      ... on ConcertRecord {
        ...concertLink
      }
      ... on PageRecord {
        ...pageLink
      }
    }
    value
  }
  ${concertLink}
  ${pageLink}
`
