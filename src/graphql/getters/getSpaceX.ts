import { client } from "../gqlClient";
import { GetSpaceXDocument, type GetSpaceXQuery } from "../generated/graphql";

// Dummy data
export const GetSpaceX = async () => {
  try {
    const { data, error } = await client.query<GetSpaceXQuery>(
      GetSpaceXDocument,
      {}
    );

    return { data: data ? data : null, error };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return { data: null, error };
  }
};
