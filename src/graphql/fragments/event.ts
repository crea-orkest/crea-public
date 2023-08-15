import gql from "graphql-tag";
import { tag } from "./tag";
import { file } from "./file";
import { identifiable } from "./identifiable";

export const event = gql`
  fragment event on ConcertRecord {
    ...identifiable
    title
    _seoMetaTags {
      ...tag
    }
    content {
      __typename
    }
    link {
      __typename
    }
    locations {
      __typename
    }
    persons {
      __typename
    }
    poster {
      ...file
    }
  }
  ${identifiable}
  ${tag}
  ${file}
`;
