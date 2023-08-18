import { gql } from "@apollo/client";

export const focalPoint = gql`
  fragment focalPoint on focalPoint {
    x
    y
  }
`;
