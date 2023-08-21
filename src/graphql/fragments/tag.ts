import { gql } from "@apollo/client/core";

export const tag = gql`
  fragment tag on Tag {
    attributes
    content
    tag
  }
`;
