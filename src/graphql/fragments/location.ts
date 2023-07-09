import gql from "graphql-tag";

export const locationFragment = gql`
  fragment locationFragment on Location {
    __typename
    lat
    lon
  }
`;
