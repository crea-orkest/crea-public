import gql from "graphql-tag";
import { seo } from "./seo";
import { tag } from "./tag";
import { identifiable } from "./identifiable";

export const pageDetail = gql`
  fragment pageDetail on PageRecord {
    __typename
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
      __typename
      ... on ConcertListRecord {
        __typename
        ...identifiable
      }
      ... on TextBlockRecord {
        __typename
        ...identifiable
      }
      ... on TwoColumnRecord {
        __typename
        ...identifiable
      }
    }
  }
  ${identifiable}
  ${seo}
  ${tag}
`;
