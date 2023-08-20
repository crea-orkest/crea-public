import { gql } from "@apollo/client/core";

export const locations = gql`
  fragment locations on LocationItemRecord {
    id
    dateTime
    location {
      id
    }
  }
`;
