import { GetPageQuery } from "../generated/graphql";
import { Page } from "../types/page";

export const pageQueryFormatter = (data: GetPageQuery): Page => ({
  id: String(data.page?.id),
  title: String(data.page?.title),
  slug: String(data.page?.slug),
});
