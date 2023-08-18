import { gql } from "@apollo/client";
import { file } from "./file";

export const seo = gql`
  fragment seo on SeoField {
    description
    image {
      ...file
    }
    title
    twitterCard
  }
  ${file}
`;
