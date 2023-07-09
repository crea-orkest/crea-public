import gql from "graphql-tag";

import { authorFragment } from "../fragments/author";

export const GET_AUTHORS = gql`
  query getAuthors($limit: Int, $skip: Int) {
    authorCollection(
      order: [sys_publishedVersion_ASC]
      limit: $limit
      skip: $skip
    ) {
      limit
      skip
      total
      items {
        ...authorFragment
      }
    }
  }
  ${authorFragment}
`;
