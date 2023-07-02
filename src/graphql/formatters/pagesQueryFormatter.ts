import { GetPagesQuery } from "../generated/types";
import { Page } from "../types/page";
import { imageFormatter } from "./imageFormatter";

export const pagesQueryFormatter = (query: GetPagesQuery): Page[] =>
  query.pageCollection.items.map((page) => ({
    id: page.sys.id,
    title: page.title,
    slug: page.slug,
    headerImage: imageFormatter(page.headerImage),
    body: page.body.json,
  }));
