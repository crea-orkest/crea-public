import { contentfulClient } from "./contentfulClient";
import { GET_PAGE } from "./queries/getPage";
import { GetPageQuery, GetPageQueryVariables } from "./generated/types";
import { pageQueryFormatter } from "./formatters/pageQueryFormatter";

export const getPage = async ({ slug }: GetPageQueryVariables) => {
  try {
    const { data, loading } = await contentfulClient.query<GetPageQuery>({
      query: GET_PAGE,
      variables: {
        slug,
      },
    });

    return { data: pageQueryFormatter(data), loading };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return { data: null, loading: false };
  }
};
