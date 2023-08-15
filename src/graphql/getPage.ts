import { gqlClient } from "./gqlClient";
import { GET_PAGE } from "./queries/getPage";
import { pageQueryFormatter } from "./formatters/pageQueryFormatter";
import { GetPageQuery, GetPageQueryVariables } from "./generated/types";

export const getPage = async ({ slug }: GetPageQueryVariables) => {
  try {
    const { data, loading, errors } = await gqlClient.query<GetPageQuery>({
      query: GET_PAGE,
      variables: { slug },
    });

    return { data: pageQueryFormatter(data), loading, errors };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return { data: null, loading: false, error };
  }
};
