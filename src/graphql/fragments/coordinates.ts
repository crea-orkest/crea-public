import { gql } from "@apollo/client";

export const coordinates = gql`
  fragment coordinates on LatLonField {
    latitude
    longitude
  }
`;
