import { type TypedDocumentNode, gql } from '@urql/core'

import { author } from './author'
import { file } from './file'
import { identifiable } from './identifiable'
import { locationItem } from './locationItem'
import { textBlock, twoColum } from './textBlock'
import { header } from './header'

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
      ... on HeaderRecord {
        ...header
      }
      ... on TextBlockRecord {
        ...textBlock
      }
      ... on TwoColumnRecord {
        ...twoColum
      }
    }
  }
  ${header}
  ${identifiable}
  ${locationItem}
  ${file}
  ${author}
  ${textBlock}
  ${twoColum}
`
