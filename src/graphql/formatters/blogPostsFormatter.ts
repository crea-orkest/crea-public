import { GetPagesQuery } from "../generated/types";
import { BlogPost } from "../types/blogPost";

export const blogPostsFormatter = (blogPosts: GetPagesQuery): BlogPost[] =>
  blogPosts.allPages.map((page) => ({
    id: String(page.id),
    title: String(page.title),
    slug: String(page.slug),
    datePublished: new Date(page._publishedAt ?? page._updatedAt),
    dateUpdated: new Date(page._updatedAt),
  }));
