import { gql } from "@apollo/client";
import { file } from "graphql/fragments/file";
import { locations } from "graphql/fragments/locations";

export const GET_CONCERTS = gql`
  query getConcerts($skip: IntType, $first: IntType) {
    allConcerts(first: $first, skip: $skip) {
      id
      title
      locations {
        ...locations
      }
      poster {
        ...file
      }
    }
  }
  ${locations}
  ${file}
`;
