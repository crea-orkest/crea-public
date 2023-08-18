import { getClient } from "../gqlClient";
import { GetPagesQueryVariables, GetPagesQuery } from "../generated/graphql";
import { GET_PAGES } from "graphql/queries/getPages";

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
