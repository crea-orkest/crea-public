import { GetAuthorQuery } from "../generated/types";
import { Author } from "../types/author";

export const authorFormatter = (author: GetAuthorQuery): Author => ({
  id: String(author.person?.id),
  name: String(author.person?.name),
  description: String(author.person?.role),
});
