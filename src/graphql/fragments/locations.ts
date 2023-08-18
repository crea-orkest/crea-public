import { gql } from "@apollo/client";

export const locations = gql`
  fragment locations on LocationItemRecord {
    id
    dateTime
    location {
      id
    }
  }
`;
