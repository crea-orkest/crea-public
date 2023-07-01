import { Author as AuthorCollectionType } from "../generated/types";
import { Author } from "../types/author";

export const authorFormatter = (author: AuthorCollectionType): Author => {
  return {
    id: author.sys.id,
    name: author.name,
    description: author.description,
    image: author.image,
  };
};
