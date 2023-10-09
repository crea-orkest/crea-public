import { concertDetail } from 'graphql/fragments/concertDetail'
import { gql } from '@urql/core'

export const GET_FUTURE_EVENTS = gql`
  query getFutureEvents(
    $skip: IntType!
    $first: IntType!
    $order: [ConcertModelOrderBy]
    $filter: ConcertModelFilter
  ) {
    allConcerts(first: $first, skip: $skip, orderBy: $order, filter: $filter) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
