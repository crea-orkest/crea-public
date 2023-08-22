import { client } from "../gqlClient";
import { locationFormatter } from "graphql/formatters/locationFormatter";
import {
  GetLocationDocument,
  type GetLocationQuery,
  type GetLocationQueryVariables,
} from "graphql/generated/graphql";

export const getLocation = async ({ id }: GetLocationQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetLocationQuery,
      GetLocationQueryVariables
    >(GetLocationDocument, {
      id,
    });

    return {
      data: data ? locationFormatter(data) : null,
      errors: error,
    };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, errors };
  }
};
