import { file } from 'graphql/fragments/file'
import { gql } from '@urql/core'

import { locations } from 'graphql/fragments/locations'

export const GET_CONCERTS = gql`
  query getConcerts(
    $skip: IntType!
    $first: IntType!
    $order: [ConcertModelOrderBy]
  ) {
    allConcerts(first: $first, skip: $skip, orderBy: $order) {
      id
      title
      locations {
        ...locations
      }
      poster {
        ...file
      }
    }
  }
  ${locations}
  ${file}
`
