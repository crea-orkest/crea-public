import gql from "graphql-tag";

export const identifiable = gql`
  fragment identifiable on RecordInterface {
    _createdAt
    _firstPublishedAt
    _publishedAt
    _status
    _updatedAt
    id
  }
`;
