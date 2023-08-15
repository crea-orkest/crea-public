import gql from "graphql-tag";

export const focalPoint = gql`
  fragment focalPoint on focalPoint {
    __typename
    x
    y
  }
`;
