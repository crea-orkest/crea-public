import gql from "graphql-tag";

import { pageFragment } from "../fragments/page";

export const GET_PAGE = gql`
  query getPage($slug: String) {
    pageCollection(order: [sys_publishedVersion_ASC], where: { slug: $slug }) {
      items {
        ...pageFragment
      }
    }
  }
  ${pageFragment}
`;
