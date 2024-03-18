import { type TypedDocumentNode, gql } from '@urql/core'

import { identifiable } from './identifiable'
import { locationItem } from './locationItem'

export const concertDetailSmall: TypedDocumentNode = gql`
  fragment concertDetailSmall on ConcertRecord {
    ...identifiable
    title
    slug
    locations {
      ...locationItem
    }
    cloudinaryPoster
    music
  }
  ${identifiable}
  ${locationItem}
`
