import { GET_PAGE } from "graphql/queries/getPage";
import { getClient } from "../gqlClient";
import { pageQueryFormatter } from "graphql/formatters/pageQueryFormatter";
import type { GetPageQuery, GetPageQueryVariables } from "../generated/graphql";

export const getPage = async ({ slug }: GetPageQueryVariables) => {
  const client = getClient();

  try {
    const { data, loading, errors } = await client.query<GetPageQuery>({
      query: GET_PAGE,
      variables: { slug },
    });

    return { data: pageQueryFormatter(data), loading, errors };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, loading: false, errors };
  }
};
