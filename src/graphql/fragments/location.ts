import { coordinates } from "./coordinates";
import { gql } from "@apollo/client/core";

export const location = gql`
  fragment location on LocationRecord {
    id
    title
    addressTitle
    address {
      ...coordinates
    }
  }
  ${coordinates}
`;
