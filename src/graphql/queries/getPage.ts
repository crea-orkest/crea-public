import gql from "graphql-tag";

import { pageBodyFragment } from "../fragments/pageBody";
import { metadataFragment } from "../fragments/metadata";
import { sysFragment } from "../fragments/sys";
import { imageFragment } from "../fragments/image";

export const GET_PAGE = gql`
  query getPage($slug: String) {
    pageCollection(where: { slug: $slug }) {
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
  ${imageFragment}
  ${metadataFragment}
  ${sysFragment}
`;
