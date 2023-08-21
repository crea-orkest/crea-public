import { GET_CONCERT } from "graphql/queries/getConcert";
import { client } from "../gqlClient";
import { eventFormatter } from "graphql/formatters/eventFormatter";
import type {
  GetConcertQuery,
  GetConcertQueryVariables,
} from "../generated/graphql";

export const getEvent = async ({ id }: GetConcertQueryVariables) => {
  try {
    if (!id) throw new Error("no id");

    const { data, error } = await client.query<
      GetConcertQuery,
      GetConcertQueryVariables
    >(GET_CONCERT, { id });

    if (error) throw error;
    if (!data) throw new Error("no data");
    return { data: eventFormatter(data) };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, errors };
  }
};
