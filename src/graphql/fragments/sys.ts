import gql from "graphql-tag";

export const sysFragment = gql`
  fragment sysFragment on Sys {
    __typename
    id
    firstPublishedAt
    publishedAt
    environmentId
    spaceId
  }
`;
