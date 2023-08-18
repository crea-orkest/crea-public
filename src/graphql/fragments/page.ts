import { gql } from "@apollo/client";
import { seo } from "./seo";
import { tag } from "./tag";
import { identifiable } from "./identifiable";

export const page = gql`
  fragment page on PageRecord {
    ...identifiable
    _seoMetaTags {
      ...tag
    }
    title
    slug
    seo {
      ...seo
    }
    content {
      ... on ConcertListRecord {
        id
      }
      ... on TextBlockRecord {
        id
      }
      ... on ConcertListRecord {
        id
      }
    }
  }
  ${identifiable}
  ${seo}
  ${tag}
`;
