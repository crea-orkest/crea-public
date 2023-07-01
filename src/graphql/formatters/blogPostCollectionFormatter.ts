import { BlogPostCollection } from "../generated/types";
import { blogPostFormatter } from "./blogPostFormatter";

export const blogPostCollectionFormatter = (
  blogPostCollection: BlogPostCollection
) => blogPostCollection.items.map((blogPost) => blogPostFormatter(blogPost));
