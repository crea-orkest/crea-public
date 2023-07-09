import gql from "graphql-tag";
import { eventFragment } from "../fragments/event";

export const GET_EVENTS = gql`
  query getEvents($limit: Int, $skip: Int) {
    eventCollection(
      order: [sys_publishedVersion_ASC]
      limit: $limit
      skip: $skip
    ) {
      limit
      skip
      total
      items {
        ...eventFragment
      }
    }
  }
  ${eventFragment}
`;
