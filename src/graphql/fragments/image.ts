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

export const image = gql`
  fragment image on ImageRecord {
    ...identifiable
    cloudinaryImage
  }
  ${identifiable}
`

export const document = gql`
  fragment document on DocumentRecord {
    ...identifiable
    title
    cloudinaryDocument
  }
  ${identifiable}
`
