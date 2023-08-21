import { gql } from "@urql/core";
import { identifiable } from "./identifiable";
import { seo } from "./seo";
import { tag } from "./tag";

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
