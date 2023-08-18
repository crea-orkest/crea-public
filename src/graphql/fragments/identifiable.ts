import { gql } from "@apollo/client";

export const identifiable = gql`
  fragment identifiable on RecordInterface {
    _createdAt
    _firstPublishedAt
    _publishedAt
    _updatedAt
    id
  }
`;
