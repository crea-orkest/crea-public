import { gql } from "@apollo/client/core";

export const author = gql`
  fragment author on PersonRecord {
    id
    name
    role
  }
`;
