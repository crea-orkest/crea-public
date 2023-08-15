import gql from "graphql-tag";
import { event } from "../fragments/event";

export const GET_CONCERTS = gql`
  query getConcerts($skip: IntType, $first: IntType) {
    allConcerts(first: $first, skip: $skip) {
      ...event
    }
  }
  ${event}
`;
