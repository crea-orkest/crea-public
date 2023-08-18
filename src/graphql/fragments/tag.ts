import { gql } from "@apollo/client";

export const tag = gql`
  fragment tag on Tag {
    attributes
    content
    tag
  }
`;
