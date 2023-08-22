import { client } from "../gqlClient";
import { locationsFormatter } from "graphql/formatters/locationsFormatter";
import {
  GetLocationsDocument,
  type GetLocationsQuery,
  type GetLocationsQueryVariables,
} from "graphql/generated/graphql";

export const getLocations = async ({
  first,
  skip,
}: GetLocationsQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetLocationsQuery,
      GetLocationsQueryVariables
    >(GetLocationsDocument, {
      first,
      skip,
    });

    return {
      data: data ? locationsFormatter(data) : null,
      errors: error,
    };
  } catch (errors) {
    if (errors instanceof Error) console.log(errors.message);
    return { data: null, errors };
  }
};
