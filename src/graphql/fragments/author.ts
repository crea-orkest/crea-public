import gql from "graphql-tag";
import { metadataFragment } from "./metadata";
import { imageFragment } from "./image";
import { sysFragment } from "./sys";

export const authorFragment = gql`
  fragment authorFragment on Author {
    __typename
    contentfulMetadata {
      ...metadataFragment
    }
    description
    image {
      ...imageFragment
    }
    name
    sys {
      ...sysFragment
    }
  }
  ${metadataFragment}
  ${imageFragment}
  ${sysFragment}
`;
