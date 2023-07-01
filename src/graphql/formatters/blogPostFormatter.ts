import { BlogPost as BlogPostCollection } from "../generated/types";
import { authorFormatter } from "./authorFormatter";
import { BlogPost } from "../types/blogPost";

export const blogPostFormatter = (blogPost: BlogPostCollection): BlogPost => {
  return {
    id: blogPost.sys.id,
    title: blogPost.title,
    slug: blogPost.slug,
    datePublished: new Date(blogPost.datePublished),
    body: blogPost.body.json,
    authors: blogPost.authorCollection.items.map((author) =>
      authorFormatter(author)
    ),
  };
};
