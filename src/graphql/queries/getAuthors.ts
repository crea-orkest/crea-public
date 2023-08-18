import { gql } from "@apollo/client";
import { author } from "../fragments/author";

export const GET_AUTHORS = gql`
  query getAuthors(
    $first: IntType
    $skip: IntType
    $order: [PersonModelOrderBy]
  ) {
    allPeople(first: $first, skip: $skip, orderBy: $order) {
      ...author
    }
  }
  ${author}
`;
