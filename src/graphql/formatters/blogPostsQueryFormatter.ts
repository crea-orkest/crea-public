import { GetBlogPostsQuery } from "../generated/types";
import { BlogPostMetadata } from "../types/blogPost";

export const blogPostsQueryFormatter = (
  data: GetBlogPostsQuery
): BlogPostMetadata[] =>
  data.blogPostCollection.items.map((blogPost) => ({
    id: blogPost.sys.id,
    title: blogPost.title,
    slug: blogPost.slug,
    datePublished: new Date(blogPost.datePublished),
  }));
