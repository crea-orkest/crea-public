import gql from "graphql-tag";
import { coordinates } from "./coordinates";

export const location = gql`
  fragment location on LocationRecord {
    __typename
    id
    title
    addressTitle
    address {
      ...coordinates
    }
  }
  ${coordinates}
`;
