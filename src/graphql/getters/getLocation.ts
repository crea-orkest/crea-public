import { GET_LOCATION } from "graphql/queries/getLocation";
import { client } from "../gqlClient";
import { locationFormatter } from "graphql/formatters/locationFormatter";
import type {
  GetLocationQuery,
  GetLocationQueryVariables,
} from "graphql/generated/graphql";

export const getLocation = async ({ id }: GetLocationQueryVariables) => {
  try {
    const { data, error } = await client.query<GetLocationQuery>(GET_LOCATION, {
      id,
    });

    if (error) throw error;
    if (!data) throw new Error("no data");
    return { data: locationFormatter(data) };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, errors };
  }
};
