import { GetBlogPostQuery } from "../generated/types";

export const blogPostQueryFormatter = (data: GetBlogPostQuery) => {
  return data.blogPostCollection.items.map((blogPost) => {
    return {
      id: blogPost.sys.id,
      title: blogPost.title,
      slug: blogPost.slug,
      datePublished: new Date(blogPost.datePublished),
      body: blogPost.body.json,
    };
  })[0];
};
