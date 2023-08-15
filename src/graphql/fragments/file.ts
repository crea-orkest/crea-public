import gql from "graphql-tag";
import { responsiveImage } from "./image";
import { video } from "./video";
import { colors } from "./colors";
import { focalPoint } from "./focalpoint";

export const file = gql`
  fragment file on FileField {
    __typename
    _createdAt
    _editingUrl
    _updatedAt
    alt
    author
    basename
    blurhash
    blurUpThumb
    colors {
      ...colors
    }
    copyright
    customData
    exifInfo
    filename
    focalPoint {
      ...focalPoint
    }
    format
    height
    id
    md5
    mimeType
    notes
    responsiveImage {
      ...responsiveImage
    }
    size
    smartTags
    tags
    thumbhash
    title
    url
    video {
      ...video
    }
    width
  }
  ${focalPoint}
  ${colors}
  ${video}
  ${responsiveImage}
`;
