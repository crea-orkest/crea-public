import { authorFormatter } from "../formatters/authorFormatter";
import { client } from "../gqlClient";
import {
  GetAuthorDocument,
  type GetAuthorQuery,
  type GetAuthorQueryVariables,
} from "../generated/graphql";

export const getAuthor = async ({ id }: GetAuthorQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetAuthorQuery,
      GetAuthorQueryVariables
    >(GetAuthorDocument, { id });

    return {
      data: data ? authorFormatter(data) : null,
      errors: error,
    };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);

    return { data: null, errors };
  }
};
