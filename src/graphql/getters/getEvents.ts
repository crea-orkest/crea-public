import { client } from "../gqlClient";
import { eventsFormatter } from "../formatters/eventsFormatter";
import {
  GetConcertsDocument,
  type GetConcertsQuery,
  type GetConcertsQueryVariables,
} from "../generated/graphql";

export const getEvents = async ({ skip, first }: GetConcertsQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetConcertsQuery,
      GetConcertsQueryVariables
    >(GetConcertsDocument, {
      skip,
      first,
    });

    return {
      data: data ? eventsFormatter(data) : null,
      errors: error,
    };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, errors };
  }
};
