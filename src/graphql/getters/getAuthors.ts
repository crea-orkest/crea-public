import { GET_AUTHORS } from "graphql/queries/getAuthors";
import { authorsFormatter } from "../formatters/authorsFormatter";
import { client } from "../gqlClient";
import {
  type GetAuthorsQuery,
  type GetAuthorsQueryVariables,
  PersonModelOrderBy,
} from "../generated/graphql";

export const getAuthors = async ({
  first = 1,
  skip = 0,
  order = PersonModelOrderBy.PublishedAtAsc,
}: GetAuthorsQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetAuthorsQuery,
      GetAuthorsQueryVariables
    >(GET_AUTHORS, { first, skip, order });

    if (error) throw error;
    if (!data) throw new Error("no data");
    return { data: authorsFormatter(data) };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);

    return { data: null, errors };
  }
};
