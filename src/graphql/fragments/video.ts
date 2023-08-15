import gql from "graphql-tag";

export const video = gql`
  fragment video on UploadVideoField {
    __typename
    mp4Url
    muxAssetId
    muxPlaybackId
    streamingUrl
    thumbnailUrl
  }
`;
