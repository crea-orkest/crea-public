import gql from "graphql-tag";

import { pageBodyFragment } from "../fragments/pageBody";
import { sysFragment } from "../fragments/sys";
import { imageFragment } from "../fragments/image";
import { metadataFragment } from "../fragments/metadata";

export const GET_PAGES = gql`
  query getPages($limit: Int, $skip: Int) {
    pageCollection(limit: $limit, skip: $skip) {
      limit
      skip
      items {
        __typename
        title
        slug
        body {
          ...pageBodyFragment
        }
        contentfulMetadata {
          ...metadataFragment
        }
        headerImage {
          ...imageFragment
        }
        sys {
          ...sysFragment
        }
      }
    }
  }
  ${pageBodyFragment}
  ${metadataFragment}
  ${imageFragment}
  ${sysFragment}
`;
