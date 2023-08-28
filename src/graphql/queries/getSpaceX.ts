import { gql } from "@urql/core";

export const GET_SPACEX = gql`
  query GetSpaceX {
    company {
      ceo
      coo
      cto
      cto_propulsion
      employees
      founded
      founder
      launch_sites
      name
      summary
      test_sites
      vehicles
    }
  }
`;
