import { client } from 'graphql/gqlClient'
import { eventsFormatter } from 'graphql/formatters/eventsFormatter'
import {
  type ConcertModelFilter,
  ConcertModelOrderBy,
  GetFutureEventsDocument,
  type GetFutureEventsQuery,
  type GetFutureEventsQueryVariables,
} from 'graphql/generated/graphql'

interface Props extends GetFutureEventsQueryVariables {
  skip: number
  first: number
}

const now = new Date()

const defaultFilter: ConcertModelFilter = {
  locations: {
    exists: true,
    any: {
      locationItem: {
        dateTime: {
          gt: now.toISOString(),
        },
      },
    },
  },
}

export const getFutureEvents = async ({
  skip,
  first,
  order = ConcertModelOrderBy.PositionAsc,
  filter = defaultFilter,
}: Props) => {
  try {
    const { data, error } = await client.query<
      GetFutureEventsQuery,
      GetFutureEventsQueryVariables
    >(GetFutureEventsDocument, {
      skip,
      first,
      order,
      filter,
    })

    return {
      data: data?.allConcerts ? eventsFormatter(data.allConcerts) : [],
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
