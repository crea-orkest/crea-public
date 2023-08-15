import gql from "graphql-tag";
import { seo } from "./seo";
import { tag } from "./tag";

export const page = gql`
  fragment page on PageRecord {
    __typename
    _updatedAt
    _publishedAt
    _seoMetaTags {
      ...tag
    }
    title
    slug
    id
    seo {
      ...seo
    }
    content {
      __typename
      ... on ConcertListRecord {
        __typename
        id
      }
      ... on TextBlockRecord {
        __typename
        id
      }
      ... on ConcertListRecord {
        __typename
        id
      }
    }
  }
  ${seo}
  ${tag}
`;
