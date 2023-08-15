import gql from "graphql-tag";

import { author } from "../fragments/author";

export const GET_AUTHORS = gql`
  query getAuthor($id: ItemId) {
    person(filter: { id: { eq: $id } }) {
      ...author
    }
  }
  ${author}
`;
