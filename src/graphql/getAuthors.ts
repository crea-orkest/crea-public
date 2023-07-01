import { contentfulClient } from "./contentfulClient";
import { GetAuthorsQuery, GetAuthorsQueryVariables } from "./generated/types";
import { GET_AUTHORS } from "./queries/getAuthors";

export const getAuthors = async ({ limit, skip }: GetAuthorsQueryVariables) => {
  try {
    const { data, loading } = await contentfulClient.query<GetAuthorsQuery>({
      query: GET_AUTHORS,
      variables: {
        limit,
        skip,
      },
    });
    return { data, loading };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return [];
  }
};
