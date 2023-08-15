import gql from "graphql-tag";
import { event } from "../fragments/event";

export const GET_CONCERT = gql`
  query getConcert($id: ItemId) {
    concert(filter: { id: { eq: $id } }) {
      ...event
    }
  }
  ${event}
`;
