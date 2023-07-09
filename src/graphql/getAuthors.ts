import { contentfulClient } from "./contentfulClient";
import { GetAuthorsQuery, GetAuthorsQueryVariables } from "./generated/types";
import { GET_AUTHORS } from "./queries/getAuthors";

export const getAuthors = async ({ limit, skip }: GetAuthorsQueryVariables) => {
  try {
    const { data, loading, errors } =
      await contentfulClient.query<GetAuthorsQuery>({
        query: GET_AUTHORS,
        variables: {
          limit,
          skip,
        },
      });
    return { data, loading, errors };
  } catch (errors: unknown) {
    return { data: null, loading: false, errors };
  }
};
