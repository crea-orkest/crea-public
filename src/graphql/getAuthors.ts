import { authorsFormatter } from "./formatters/authorsFormatter";
import { GetAuthorsQuery, GetAuthorsQueryVariables } from "./generated/types";
import { gqlClient } from "./gqlClient";
import { GET_AUTHORS } from "./queries/getAuthors";

export const getAuthors = async ({
  first,
  skip,
  order,
}: GetAuthorsQueryVariables) => {
  try {
    const { data, loading, errors } = await gqlClient.query<GetAuthorsQuery>({
      query: GET_AUTHORS,
      variables: { first, skip, order },
    });
    return { data: authorsFormatter(data), loading, errors };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);

    return { data: null, loading: false, error };
  }
};
