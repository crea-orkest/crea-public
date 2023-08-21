import { GET_CONCERT } from "graphql/queries/getConcert";
import { eventFormatter } from "graphql/formatters/eventFormatter";
import { getClient } from "../gqlClient";
import type {
  GetConcertQuery,
  GetConcertQueryVariables,
} from "../generated/graphql";

export const getEvent = async ({ id }: GetConcertQueryVariables) => {
  const client = getClient();
  try {
    const { data, loading, errors } = await client.query<GetConcertQuery>({
      query: GET_CONCERT,
      variables: { id },
    });

    return { data: eventFormatter(data), loading, errors };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, loading: false, errors };
  }
};
