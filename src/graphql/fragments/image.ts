import gql from "graphql-tag";

export const mediaItem = gql`
  fragment mediaItem on MediaItemRecord {
    __typename
  }
`;

export const responsiveImage = gql`
  fragment responsiveImage on ResponsiveImage {
    __typename
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
