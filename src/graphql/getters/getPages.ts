import { GET_PAGES } from "graphql/queries/getPages";
import { getClient } from "../gqlClient";
import type {
  GetPagesQuery,
  GetPagesQueryVariables,
} from "../generated/graphql";

export const getPages = async ({
  skip = 0,
  first = 10,
}: GetPagesQueryVariables) => {
  const client = getClient();

  try {
    const { data, loading } = await client.query<GetPagesQuery>({
      query: GET_PAGES,
      variables: {
        skip,
        first,
      },
    });

    return { data, loading };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, loading: false, errors };
  }
};
