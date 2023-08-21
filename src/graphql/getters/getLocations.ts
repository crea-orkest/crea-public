import { GET_LOCATIONS } from "graphql/queries/getLocations";
import { client } from "../gqlClient";
import { locationsFormatter } from "graphql/formatters/locationsFormatter";
import type {
  GetLocationsQuery,
  GetLocationsQueryVariables,
} from "graphql/generated/graphql";

export const getLocations = async ({
  first = 1,
  skip = 0,
}: GetLocationsQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetLocationsQuery,
      GetLocationsQueryVariables
    >(GET_LOCATIONS, { first, skip });

    if (error) throw error;
    if (!data) throw new Error("no data");
    return { data: locationsFormatter(data) };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, errors };
  }
};
