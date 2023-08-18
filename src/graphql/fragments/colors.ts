import { gql } from "@apollo/client";

export const colors = gql`
  fragment colors on ColorField {
    alpha
    blue
    cssRgb
    green
    hex
    red
  }
`;
