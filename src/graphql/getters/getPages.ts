import { GET_PAGES } from "graphql/queries/getPages";
import { client } from "../gqlClient";
import type {
  GetPagesQuery,
  GetPagesQueryVariables,
} from "../generated/graphql";

export const getPages = async ({
  skip = 0,
  first = 10,
}: GetPagesQueryVariables) => {
  try {
    const { data, error } = await client.query<GetPagesQuery>(GET_PAGES, {
      skip,
      first,
    });

    if (error) throw error;
    if (!data) throw new Error("no data");
    return { data };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, errors };
  }
};
