import { Scalars } from "../generated/types";

export interface BlogPostMetadata {
  id: string;
  title: string;
  slug: string;
  datePublished: Date;
}

export interface BlogPost extends BlogPostMetadata {
  body: Scalars["JSON"]["output"];
}
