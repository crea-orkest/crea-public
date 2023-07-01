import { contentfulClient } from "./contentfulClient";
import { blogPostQueryFormatter } from "./formatters/blogPostQueryFormatter";
import { GetBlogPostQuery } from "./generated/types";
import { GET_BLOG_POST } from "./queries/getBlogPost";

interface Props {
  slug: string;
}

export const getBlogPost = async ({ slug }: Props) => {
  try {
    const { data, loading, errors } =
      await contentfulClient.query<GetBlogPostQuery>({
        query: GET_BLOG_POST,
        variables: {
          slug,
        },
      });

    return { data: blogPostQueryFormatter(data), loading, errors };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return { data: null, loading: false };
  }
};
