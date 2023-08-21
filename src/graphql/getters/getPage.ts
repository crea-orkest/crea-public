import { GET_PAGE } from "graphql/queries/getPage";
import { client } from "../gqlClient";
import { pageQueryFormatter } from "graphql/formatters/pageQueryFormatter";
import type { GetPageQuery, GetPageQueryVariables } from "../generated/graphql";

export const getPage = async ({ slug }: GetPageQueryVariables) => {
  try {
    if (!slug) throw new Error("no slug");

    const { data, error } = await client.query<
      GetPageQuery,
      GetPageQueryVariables
    >(GET_PAGE, { slug });

    if (error) throw error;
    if (!data) throw new Error("no data");
    return { data: pageQueryFormatter(data) };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, errors };
  }
};
