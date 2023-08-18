import { gql } from "@apollo/client";
import { coordinates } from "./coordinates";

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
