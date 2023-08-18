import { gql } from "@apollo/client";
import { author } from "graphql/fragments/author";

export const GET_AUTHOR = gql`
  query getAuthor($id: ItemId) {
    person(filter: { id: { eq: $id } }) {
      ...author
    }
  }
  ${author}
`;
