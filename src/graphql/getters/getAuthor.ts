import { GET_AUTHOR } from "graphql/queries/getAuthor";
import { authorFormatter } from "../formatters/authorFormatter";
import { client } from "../gqlClient";
import type {
  GetAuthorQuery,
  GetAuthorQueryVariables,
} from "../generated/graphql";

export const getAuthor = async ({ id }: GetAuthorQueryVariables) => {
  try {
    if (!id) throw new Error("no id");
    const { data, error } = await client.query<
      GetAuthorQuery,
      GetAuthorQueryVariables
    >(GET_AUTHOR, { id });

    if (error) throw error;
    if (!data) throw new Error("no data");
    return { data: authorFormatter(data) };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);

    return { data: null, errors };
  }
};
