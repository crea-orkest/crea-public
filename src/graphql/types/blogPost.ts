import { Scalars } from "../generated/types";
import { Author } from "./author";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  datePublished: Date;
  body: Scalars["JSON"]["output"];
  authors: Author[];
}
