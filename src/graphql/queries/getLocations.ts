import { gql } from "@urql/core";

import { location } from "graphql/fragments/location";

export const GET_LOCATIONS = gql`
  query getLocations($first: IntType, $skip: IntType) {
    allLocations(first: $first, skip: $skip) {
      ...location
    }
  }
  ${location}
`;
