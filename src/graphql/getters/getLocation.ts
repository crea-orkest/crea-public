import { getClient } from "../gqlClient";
import {
  GetLocationQuery,
  GetLocationQueryVariables,
} from "graphql/generated/graphql";
import { GET_LOCATION } from "graphql/queries/getLocation";
import { locationFormatter } from "graphql/formatters/locationFormatter";

export const getLocation = async ({ id }: GetLocationQueryVariables) => {
  try {
    const client = getClient();
    const { data, loading, errors } = await client.query<GetLocationQuery>({
      query: GET_LOCATION,
      variables: { id },
    });

    return { data: locationFormatter(data), loading, errors };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, loading: false, errors };
  }
};
