import { gql } from "@apollo/client/core";

export const identifiable = gql`
  fragment identifiable on RecordInterface {
    _createdAt
    _firstPublishedAt
    _publishedAt
    _updatedAt
    id
  }
`;
