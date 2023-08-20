import { author } from "graphql/fragments/author";
import { file } from "graphql/fragments/file";
import { gql } from "@apollo/client/core";
import { locations } from "graphql/fragments/locations";

export const GET_CONCERT = gql`
  query getConcert($id: ItemId) {
    concert(filter: { id: { eq: $id } }) {
      id
      title
      link {
        ...identifiable
      }
      locations {
        ...locations
      }
      persons {
        ...author
      }
      poster {
        ...file
      }
    }
  }
  ${locations}
  ${file}
  ${author}
`;
