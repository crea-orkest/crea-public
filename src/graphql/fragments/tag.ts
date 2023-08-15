import gql from "graphql-tag";

export const tag = gql`
  fragment tag on Tag {
    __typename
    attributes
    content
    tag
  }
`;
