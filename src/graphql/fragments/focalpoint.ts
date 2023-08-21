import { gql } from "@apollo/client/core";

export const focalPoint = gql`
  fragment focalPoint on focalPoint {
    x
    y
  }
`;
