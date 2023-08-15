import { gqlClient } from "./gqlClient";
import { eventsFormatter } from "./formatters/eventsFormatter";
import { GET_CONCERTS } from "./queries/getConcerts";
import { GetConcertsQuery, GetConcertsQueryVariables } from "./generated/types";

export const getEvents = async ({
  skip = 0,
  first = 10,
}: GetConcertsQueryVariables) => {
  try {
    const { data, loading, errors } = await gqlClient.query<GetConcertsQuery>({
      query: GET_CONCERTS,
      variables: { skip, first },
    });

    return { data: eventsFormatter(data), loading, errors };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return { data: null, loading: false, error };
  }
};
