import { gql } from "@apollo/client";
import { responsiveImage } from "./image";
import { focalPoint } from "./focalpoint";
import { colors } from "./colors";
import { video } from "./video";

export const file = gql`
  fragment file on FileField {
    id
    alt
    blurhash
    blurUpThumb
    colors {
      ...colors
    }
    copyright
    customData
    filename
    focalPoint {
      ...focalPoint
    }
    format
    width
    height
    mimeType
    notes
    responsiveImage {
      ...responsiveImage
    }
    size
    smartTags
    tags
    title
    url
    video {
      ...video
    }
  }
  ${responsiveImage}
  ${focalPoint}
  ${colors}
  ${video}
`;
