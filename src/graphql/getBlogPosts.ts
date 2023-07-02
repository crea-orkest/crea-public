import { contentfulClient } from "./contentfulClient";
import { GET_BLOG_POSTS } from "./queries/getBlogPosts";
import { blogPostsQueryFormatter } from "./formatters/blogPostsQueryFormatter";

import {
  GetBlogPostsQuery,
  GetBlogPostsQueryVariables,
} from "./generated/types";

export const getBlogPosts = async ({
  limit,
  skip,
}: GetBlogPostsQueryVariables) => {
  try {
    const { data, loading, errors } =
      await contentfulClient.query<GetBlogPostsQuery>({
        query: GET_BLOG_POSTS,
        variables: {
          limit,
          skip,
        },
      });

    return { data: blogPostsQueryFormatter(data), loading, errors };
  } catch (errors: unknown) {
    return { data: null, loading: false, errors };
  }
};
