import { authorsFormatter } from "../formatters/authorsFormatter";
import { client } from "../gqlClient";
import {
  GetAuthorsDocument,
  type GetAuthorsQuery,
  type GetAuthorsQueryVariables,
} from "../generated/graphql";

export const getAuthors = async ({
  first,
  skip,
  order,
}: GetAuthorsQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetAuthorsQuery,
      GetAuthorsQueryVariables
    >(GetAuthorsDocument, {
      first,
      skip,
      order,
    });

    return {
      data: data ? authorsFormatter(data) : null,
      errors: error,
    };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);

    return { data: null, errors };
  }
};
