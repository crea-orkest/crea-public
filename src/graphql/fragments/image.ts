import { file } from './file'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'

export const responsiveImage = gql`
  fragment responsiveImage on ResponsiveImage {
    title
    alt
    sizes
    aspectRatio
    bgColor
    src
    height
    width
  }
`

// TODO: depricate item, file
export const mediaItem = gql`
  fragment mediaItem on MediaItemRecord {
    ...identifiable
    title
    item {
      ...file
    }
    asset
  }
  ${identifiable}
  ${file}
`

export const image = gql`
  fragment image on ImageRecord {
    ...identifiable
    item {
      ...mediaItem
    }
  }
  ${mediaItem}
  ${identifiable}
`

export const document = gql`
  fragment document on DocumentRecord {
    ...identifiable
    document {
      ...mediaItem
    }
  }
  ${identifiable}
  ${mediaItem}
`
