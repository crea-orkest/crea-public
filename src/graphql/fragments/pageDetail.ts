import { gql } from "@apollo/client";
import { seo } from "./seo";
import { tag } from "./tag";
import { identifiable } from "./identifiable";

export const pageDetail = gql`
  fragment pageDetail on PageRecord {
    id
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
        ...identifiable
      }
      ... on TextBlockRecord {
        ...identifiable
      }
      ... on TwoColumnRecord {
        ...identifiable
      }
    }
  }
  ${identifiable}
  ${seo}
  ${tag}
`;
