import gql from "graphql-tag";
import { tagsFragment } from "./tags";

export const metadataFragment = gql`
  fragment metadataFragment on ContentfulMetadata {
    __typename
    tags {
      ...tagsFragment
    }
  }
  ${tagsFragment}
`;
