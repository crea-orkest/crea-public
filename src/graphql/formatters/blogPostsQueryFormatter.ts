import { GetBlogPostsQuery } from "../generated/types";

export const blogPostsQueryFormatter = (data: GetBlogPostsQuery) => {
  return data.blogPostCollection.items.map((blogPost) => {
    return {
      id: blogPost.sys.id,
      title: blogPost.title,
      slug: blogPost.slug,
      datePublished: new Date(blogPost.datePublished),
    };
  });
};
