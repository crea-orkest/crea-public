import gql from "graphql-tag";

export const blogPostBodyFragment = gql`
  fragment blogPostBodyFragment on BlogPostBody {
    __typename
    json
  }
`;
