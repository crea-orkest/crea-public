import { GetAuthorsQuery } from "../generated/graphql";
import { Author } from "../types/author";

export const authorsFormatter = (data: GetAuthorsQuery): Author[] =>
  data.allPeople.map((author) => ({
    id: author.id,
    name: author.name,
    description: author.role,
  }));
