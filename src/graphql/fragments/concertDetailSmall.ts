import { type TypedDocumentNode, gql } from '@urql/core'

import { identifiable } from './identifiable'
import { locationItem } from './locationItem'
import { music } from './music'

export const concertDetailSmall: TypedDocumentNode = gql`
  fragment concertDetailSmall on ConcertRecord {
    ...identifiable
    title
    slug
    locations {
      ...locationItem
    }
    cloudinaryPoster
    program {
      ...music
    }
  }
  ${identifiable}
  ${locationItem}
  ${music}
`
