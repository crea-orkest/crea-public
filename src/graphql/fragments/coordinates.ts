import { gql } from "@apollo/client/core";

export const coordinates = gql`
  fragment coordinates on LatLonField {
    latitude
    longitude
  }
`;
