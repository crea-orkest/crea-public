import { GET_CONCERTS } from "graphql/queries/getConcerts";
import { eventsFormatter } from "../formatters/eventsFormatter";
import { getClient } from "../gqlClient";
import type {
  GetConcertsQuery,
  GetConcertsQueryVariables,
} from "../generated/graphql";

export const getEvents = async ({
  skip = 0,
  first = 10,
}: GetConcertsQueryVariables) => {
  try {
    const client = getClient();
    const { data, loading, errors } = await client.query<GetConcertsQuery>({
      query: GET_CONCERTS,
      variables: { skip, first },
    });

    return { data: eventsFormatter(data), loading, errors };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, loading: false, errors };
  }
};
