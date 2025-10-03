import { client } from '../gqlClient'
import { eventsFormatter } from '../formatters/eventsFormatter'
import {
  type ConcertModelFilter,
  ConcertModelOrderBy,
  GetFutureEventsDocument,
  type GetFutureEventsQuery,
  type GetFutureEventsQueryVariables,
} from '../generated/graphql'
import type { Event } from 'graphql/types/event'

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
  order = ConcertModelOrderBy.PositionDesc,
  filter = defaultFilter,
}: Props): Promise<{ data: Event[] }> => {
  try {
    const { data } = await client.query<
      GetFutureEventsQuery,
      GetFutureEventsQueryVariables
    >(GetFutureEventsDocument, {
      skip,
      first,
      order,
      filter,
    })

    if (data && data.allConcerts.length < 1) {
      const { data } = await client.query<
        GetFutureEventsQuery,
        GetFutureEventsQueryVariables
      >(GetFutureEventsDocument, {
        skip,
        first: 1,
        order: ConcertModelOrderBy.PositionAsc,
      })
      return {
        data: Array.isArray(data?.allConcerts)
          ? eventsFormatter(data.allConcerts)
          : [],
      }
    }

    return {
      data: Array.isArray(data?.allConcerts)
        ? eventsFormatter(data.allConcerts)
        : [],
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: [] }
  }
}
