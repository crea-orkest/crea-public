import { gqlClient } from "./gqlClient";
import { GET_PAGES } from "./queries/getPages";
import { pagesQueryFormatter } from "./formatters/pagesQueryFormatter";
import { GetPagesQuery, GetPagesQueryVariables } from "./generated/types";

export const getPages = async ({
  skip = 0,
  first = 10,
}: GetPagesQueryVariables) => {
  try {
    const { data, loading } = await gqlClient.query<GetPagesQuery>({
      query: GET_PAGES,
      variables: {
        skip,
        first,
      },
    });

    return { data: pagesQueryFormatter(data), loading };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return { data: null, loading: false, error };
  }
};
