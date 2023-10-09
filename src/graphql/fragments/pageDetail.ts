import { eventBlock } from './eventBlock'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { textBlock, twoColum } from './textBlock'

export const pageDetail = gql`
  fragment pageDetail on PageRecord {
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
  ${eventBlock}
  ${textBlock}
  ${twoColum}
`
