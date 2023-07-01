import gql from "graphql-tag";

import { imageFragment } from "../fragments/image";
import { metadataFragment } from "../fragments/metadata";
import { tagsFragment } from "../fragments/tags";
import { authorFragment } from "../fragments/author";
import { sysFragment } from "../fragments/sys";

export const GET_AUTHORS = gql`
  query getAuthors($limit: Int, $skip: Int) {
    authorCollection(limit: $limit, skip: $skip) {
      limit
      skip
      items {
        ...authorFragment
      }
    }
  }
  ${imageFragment}
  ${metadataFragment}
  ${authorFragment}
  ${sysFragment}
`;
