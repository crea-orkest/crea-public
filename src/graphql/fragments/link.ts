import { gql } from "@urql/core";

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
