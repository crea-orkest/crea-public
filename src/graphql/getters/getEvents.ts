import { GET_CONCERTS } from "graphql/queries/getConcerts";
import { client } from "../gqlClient";
import { eventsFormatter } from "../formatters/eventsFormatter";
import type {
  GetConcertsQuery,
  GetConcertsQueryVariables,
} from "../generated/graphql";

export const getEvents = async ({
  skip = 0,
  first = 10,
}: GetConcertsQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetConcertsQuery,
      GetConcertsQueryVariables
    >(GET_CONCERTS, { skip, first });

    if (error) throw error;
    if (!data) throw new Error("no data");
    return { data: eventsFormatter(data) };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, errors };
  }
};
