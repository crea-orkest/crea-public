import { GetPagesQuery } from "../generated/graphql";
import { Page } from "../types/page";

export const pagesQueryFormatter = (data: GetPagesQuery): Page[] =>
  data.allPages.map((page) => ({
    id: String(page.id),
    title: String(page.title),
    slug: String(page.slug),
  }));
