import { contentfulClient } from "./contentfulClient";
import { blogPostQueryFormatter } from "./formatters/blogPostQueryFormatter";
import { GetBlogPostQuery, GetBlogPostQueryVariables } from "./generated/types";
import { GET_BLOG_POST } from "./queries/getBlogPost";

export const getBlogPost = async ({ slug }: GetBlogPostQueryVariables) => {
  try {
    const { data, loading, errors } =
      await contentfulClient.query<GetBlogPostQuery>({
        query: GET_BLOG_POST,
        variables: {
          slug,
        },
      });

    return { data: blogPostQueryFormatter(data), loading, errors };
  } catch (errors) {
    return { data: null, loading: false, errors };
  }
};
