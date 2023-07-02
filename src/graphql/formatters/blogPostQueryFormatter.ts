import { GetBlogPostQuery } from "../generated/types";
import { BlogPost } from "../types/blogPost";

export const blogPostQueryFormatter = (data: GetBlogPostQuery): BlogPost =>
  data.blogPostCollection.items.map((blogPost) => ({
    id: blogPost.sys.id,
    title: blogPost.title,
    slug: blogPost.slug,
    datePublished: new Date(blogPost.datePublished),
    body: blogPost.body.json,
  }))[0];
