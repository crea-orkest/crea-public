import { author } from './author'
import { file } from './file'
import { identifiable } from './identifiable'
import { locationItem } from './locationItem'
import { type TypedDocumentNode, gql } from '@urql/core'
import { textBlock, twoColum } from './textBlock'

export const concertDetail: TypedDocumentNode = gql`
  fragment concertDetail on ConcertRecord {
    ...identifiable
    title
    slug
    locations {
      ...locationItem
    }
    poster {
      ...file
    }
    persons {
      ...author
    }
    content {
      ... on TextBlockRecord {
        ...textBlock
      }
      ... on TwoColumnRecord {
        ...twoColum
      }
    }
  }
  ${identifiable}
  ${locationItem}
  ${file}
  ${author}
  ${textBlock}
  ${twoColum}
`
