import gql from "graphql-tag";
import { metadataFragment } from "./metadata";
import { sysFragment } from "./sys";

export const imageFragment = gql`
  fragment imageFragment on Asset {
    __typename
    contentType
    description
    fileName
    height
    title
    url
    width
    contentfulMetadata {
      ...metadataFragment
    }
    sys {
      ...sysFragment
    }
  }
  ${metadataFragment}
  ${sysFragment}
`;
