import { GET_AUTHORS } from "graphql/queries/getAuthors";
import { authorsFormatter } from "../formatters/authorsFormatter";
import {
  GetAuthorsQuery,
  GetAuthorsQueryVariables,
} from "../generated/graphql";
import { getClient } from "../gqlClient";

export const getAuthors = async ({
  first,
  skip,
  order,
}: GetAuthorsQueryVariables) => {
  const client = getClient();

  try {
    const { data, loading, errors } = await client.query<GetAuthorsQuery>({
      query: GET_AUTHORS,
      variables: { first, skip, order },
    });
    return { data: authorsFormatter(data), loading, errors };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);

    return { data: null, loading: false, errors };
  }
};
