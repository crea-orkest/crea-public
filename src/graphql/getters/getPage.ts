import { client } from "../gqlClient";
import { pageQueryFormatter } from "graphql/formatters/pageQueryFormatter";
import {
  GetPageDocument,
  type GetPageQuery,
  type GetPageQueryVariables,
} from "../generated/graphql";

export const getPage = async ({ slug }: GetPageQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPageQuery,
      GetPageQueryVariables
    >(GetPageDocument, { slug });

    return {
      data: data ? pageQueryFormatter(data) : null,
      errors: error,
    };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, errors };
  }
};
