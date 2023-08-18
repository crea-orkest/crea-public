import { GetAuthorQuery } from "graphql/generated/graphql";
import { Author } from "../types/author";

export const authorFormatter = (data: GetAuthorQuery): Author | undefined => {
  if (!data.person) return undefined;

  return {
    id: data.person.id,
    name: data.person.name,
    description: data.person.role,
  };
};
