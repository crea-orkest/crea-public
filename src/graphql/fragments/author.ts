import { gql } from "@apollo/client";

export const author = gql`
  fragment author on PersonRecord {
    id
    name
    role
  }
`;
