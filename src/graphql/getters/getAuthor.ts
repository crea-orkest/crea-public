import { GET_AUTHOR } from "graphql/queries/getAuthor";
import { authorFormatter } from "../formatters/authorFormatter";
import { getClient } from "../gqlClient";
import type {
  GetAuthorQuery,
  GetAuthorQueryVariables,
} from "../generated/graphql";

export const getAuthor = async ({ id }: GetAuthorQueryVariables) => {
  const client = getClient();
  try {
    if (!id) throw new Error("no id");
    const { data, loading, errors } = await client.query<GetAuthorQuery>({
      query: GET_AUTHOR,
      variables: { id },
    });
    return { data: authorFormatter(data), loading, errors };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);

    return { data: null, loading: false, errors };
  }
};
