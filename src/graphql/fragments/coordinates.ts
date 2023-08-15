import gql from "graphql-tag";

export const coordinates = gql`
  fragment coordinates on LatLonField {
    __typename
    latitude
    longitude
  }
`;
