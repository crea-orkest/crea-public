import gql from "graphql-tag";
import { page } from "../fragments/page";

export const GET_PAGES = gql`
  query getPages($skip: IntType, $first: IntType) {
    allPages(first: $first, skip: $skip) {
      ...page
    }
  }
  ${page}
`;
