import { GetAuthorsQuery } from "../generated/types";
import { Author } from "../types/author";

export const authorsFormatter = (authors: GetAuthorsQuery): Author[] =>
  authors.allPeople.map((author) => ({
    id: String(author?.id),
    name: String(author?.name),
    description: String(author?.role),
  }));
