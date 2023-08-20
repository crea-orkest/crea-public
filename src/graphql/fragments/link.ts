import { gql } from "@apollo/client/core";

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
