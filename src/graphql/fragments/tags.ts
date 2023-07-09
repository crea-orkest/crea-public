import gql from "graphql-tag";

export const tagsFragment = gql`
  fragment tagsFragment on ContentfulTag {
    __typename
    id
    name
  }
`;
