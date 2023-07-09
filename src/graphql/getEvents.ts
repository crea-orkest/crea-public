import { contentfulClient } from "./contentfulClient";
import { eventsFormatter } from "./formatters/eventsFormatter";
import { GetEventsQuery, GetEventsQueryVariables } from "./generated/types";
import { GET_EVENTS } from "./queries/getEvents";

export const getEvents = async ({ limit, skip }: GetEventsQueryVariables) => {
  try {
    const { data, loading, errors } =
      await contentfulClient.query<GetEventsQuery>({
        query: GET_EVENTS,
        variables: {
          limit,
          skip,
        },
      });
    return { data: eventsFormatter(data), loading, errors };
  } catch (errors) {
    return { data: null, loading: false, errors };
  }
};
