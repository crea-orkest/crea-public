import {
  GetLocationsQuery,
  GetLocationsQueryVariables,
} from "graphql/generated/graphql";
import { getClient } from "../gqlClient";
import { GET_LOCATIONS } from "graphql/queries/getLocations";
import { locationsFormatter } from "graphql/formatters/locationsFormatter";

export const getLocations = async ({
  first,
  skip,
}: GetLocationsQueryVariables) => {
  try {
    const client = getClient();
    const { data, loading, errors } = await client.query<GetLocationsQuery>({
      query: GET_LOCATIONS,
      variables: { first, skip },
    });

    return { data: locationsFormatter(data), loading, errors };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, loading: false, errors };
  }
};
