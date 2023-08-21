import { colors } from "./colors";
import { focalPoint } from "./focalpoint";
import { gql } from "@urql/core";

import { responsiveImage } from "./image";
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
