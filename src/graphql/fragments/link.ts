import { gql } from "@apollo/client";

export const link = gql`
  fragment link on LinkRecord {
    id
    internalTitle
    externalUrl
    page {
      slug
    }
  }
`;
