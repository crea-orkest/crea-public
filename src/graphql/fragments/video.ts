import { gql } from "@urql/core";

export const video = gql`
  fragment video on UploadVideoField {
    mp4Url
    muxAssetId
    muxPlaybackId
    streamingUrl
    thumbnailUrl
  }
`;
