import gql from "graphql-tag";

import { blogPostBodyFragment } from "../fragments/blogPostBody";
import { metadataFragment } from "../fragments/metadata";
import { tagsFragment } from "../fragments/tags";
import { sysFragment } from "../fragments/sys";

export const GET_BLOG_POST = gql`
  query getBlogPost($slug: String) {
    blogPostCollection(where: { slug: $slug }) {
      items {
        __typename
        title
        slug
        datePublished
        body {
          ...blogPostBodyFragment
        }
        contentfulMetadata {
          ...metadataFragment
        }
        sys {
          ...sysFragment
        }
      }
    }
  }
  ${blogPostBodyFragment}
  ${metadataFragment}
  ${tagsFragment}
  ${sysFragment}
`;
