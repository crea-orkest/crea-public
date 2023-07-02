import gql from "graphql-tag";

import { pageFragment } from "../fragments/page";

export const GET_PAGES = gql`
  query getPages($limit: Int, $skip: Int) {
    pageCollection(
      order: [sys_publishedVersion_ASC]
      limit: $limit
      skip: $skip
    ) {
      limit
      skip
      items {
        ...pageFragment
      }
    }
  }
  ${pageFragment}
`;
