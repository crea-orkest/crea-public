import { GetPageQuery, GetPagesQuery } from "../generated/types";

export const pagesQueryFormatter = (query: GetPagesQuery) =>
  query.pageCollection.items.map((page) => {
    return {
      id: page.sys.id,
      title: page.title,
      slug: page.slug,
      body: page.body.json,
    };
  });
