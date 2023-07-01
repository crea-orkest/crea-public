import gql from "graphql-tag";

export const imageFragment = gql`
  fragment imageFragment on Asset {
    __typename
    contentType
    description
    fileName
    height
    title
    url
    width
  }
`;
