import gql from "graphql-tag";

export const pageBodyFragment = gql`
  fragment pageBodyFragment on PageBody {
    __typename
    json
  }
`;
