import { gql } from "@urql/core";

import { identifiable } from "graphql/fragments/identifiable";

export const GET_PAGES = gql`
  query getPages($skip: IntType, $first: IntType) {
    allPages(first: $first, skip: $skip) {
      ...identifiable
      title
      slug
    }
  }
  ${identifiable}
`;
