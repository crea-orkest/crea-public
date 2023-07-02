import { contentfulClient } from "./contentfulClient";
import { GET_PAGES } from "./queries/getPages";
import { GetPagesQuery, GetPagesQueryVariables } from "./generated/types";
import { pagesQueryFormatter } from "./formatters/pagesQueryFormatter";

export const getPages = async ({ limit, skip }: GetPagesQueryVariables) => {
  try {
    const { data, loading } = await contentfulClient.query<GetPagesQuery>({
      query: GET_PAGES,
      variables: {
        limit,
        skip,
      },
    });

    return { data: pagesQueryFormatter(data), loading };
  } catch (error: unknown) {
    return { data: null, loading: false };
  }
};
