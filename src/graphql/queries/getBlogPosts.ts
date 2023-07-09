import gql from "graphql-tag";

import { sysFragment } from "../fragments/sys";

export const GET_BLOG_POSTS = gql`
  query getBlogPosts($limit: Int, $skip: Int) {
    blogPostCollection(
      order: [sys_publishedVersion_ASC]
      limit: $limit
      skip: $skip
    ) {
      limit
      skip
      total
      items {
        __typename
        title
        slug
        sys {
          ...sysFragment
        }
        datePublished
      }
    }
  }
  ${sysFragment}
`;
