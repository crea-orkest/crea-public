import gql from "graphql-tag";

export const colors = gql`
  fragment colors on ColorField {
    __typename
    alpha
    blue
    cssRgb
    green
    hex
    red
  }
`;
