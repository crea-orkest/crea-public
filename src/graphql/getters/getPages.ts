import { client } from "../gqlClient";
import {
  GetPagesDocument,
  type GetPagesQuery,
  type GetPagesQueryVariables,
} from "../generated/graphql";

export const getPages = async ({ skip, first }: GetPagesQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPagesQuery,
      GetPagesQueryVariables
    >(GetPagesDocument, {
      skip,
      first,
    });

    return { data: data ? data : null, errors: error };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, errors };
  }
};
