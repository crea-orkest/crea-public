import gql from "graphql-tag";
import { file } from "./file";

export const seo = gql`
  fragment seo on SeoField {
    __typename
    description
    image {
      ...file
    }
    title
    twitterCard
  }
  ${file}
`;
