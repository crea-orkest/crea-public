import { AuthorCollection } from "../generated/types";
import { Author } from "../types/author";
import { authorFormatter } from "./authorFormatter";

export const authorCollectionFormatter = (
  authorCollection: AuthorCollection
): Author[] => authorCollection.items.map((author) => authorFormatter(author));
