import { gql } from "@urql/core";

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
    srcSet
    webpSrcSet
  }
`;
