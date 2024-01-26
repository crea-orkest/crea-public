import { gql } from '@urql/core'
import { concertDetailSmall } from './concertDetailSmall'
import { identifiable } from './identifiable'

export const eventBlock = gql`
  fragment eventBlock on ConcertListRecord {
    ...identifiable
    pinnedConcerts {
      ...concertDetailSmall
    }
    futureConcerts
  }
  ${concertDetailSmall}
  ${identifiable}
`
