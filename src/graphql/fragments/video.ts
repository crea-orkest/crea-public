import { gql } from "@apollo/client/core";

export const video = gql`
  fragment video on UploadVideoField {
    mp4Url
    muxAssetId
    muxPlaybackId
    streamingUrl
    thumbnailUrl
  }
`;
