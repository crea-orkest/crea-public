import { gqlClient } from "./gqlClient";
import { eventFormatter } from "./formatters/eventFormatter";
import { GET_CONCERT } from "./queries/getConcert";
import { GetConcertQuery, GetConcertQueryVariables } from "./generated/types";

export const getEvent = async ({ id }: GetConcertQueryVariables) => {
  try {
    const { data, loading, errors } = await gqlClient.query<GetConcertQuery>({
      query: GET_CONCERT,
      variables: { id },
    });

    return { data: eventFormatter(data), loading, errors };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return { data: null, loading: false, error };
  }
};
