import { BlogPost as BlogPostCollection } from "../generated/types";
import { BlogPost } from "../types/blogPost";

export const blogPostFormatter = (blogPost: BlogPostCollection): BlogPost => ({
  id: blogPost.sys.id,
  title: blogPost.title,
  slug: blogPost.slug,
  datePublished: new Date(blogPost.datePublished),
  body: blogPost.body.json,
});
