import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { tag } from './tag'
import { textBlock, twoColum } from './textBlock'

export const page = gql`
  fragment page on PageRecord {
    ...identifiable
    title
    slug
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
  ${textBlock}
  ${twoColum}
  ${tag}
`
