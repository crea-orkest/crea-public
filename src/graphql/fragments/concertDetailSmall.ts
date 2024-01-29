import { type TypedDocumentNode, gql } from '@urql/core'

import { identifiable } from './identifiable'
import { locationItem } from './locationItem'
import { mediaItem } from './image'
import { music } from './music'

export const concertDetailSmall: TypedDocumentNode = gql`
  fragment concertDetailSmall on ConcertRecord {
    ...identifiable
    title
    slug
    locations {
      ...locationItem
    }
    poster {
      ...mediaItem
    }
    program {
      ...music
    }
  }
  ${identifiable}
  ${locationItem}
  ${mediaItem}
  ${music}
`
