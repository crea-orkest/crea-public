import { GetPageQuery } from "../generated/types";
import { Page } from "../types/page";

export const pageQueryFormatter = (query: GetPageQuery): Page =>
  query.pageCollection.items.map((page) => {
    return {
      id: page.sys.id,
      title: page.title,
      slug: page.slug,
      body: page.body.json,
    };
  })[0];
