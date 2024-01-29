import { client } from '../gqlClient'
import { eventsFormatter } from '../formatters/eventsFormatter'
import {
  type ConcertModelFilter,
  ConcertModelOrderBy,
  GetFutureEventsDocument,
  type GetFutureEventsQuery,
  type GetFutureEventsQueryVariables,
} from '../generated/graphql'

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
}: Props) => {
  try {
    let futureEventData = null
    let futureEventError = null
    const { data, error } = await client.query<
      GetFutureEventsQuery,
      GetFutureEventsQueryVariables
    >(GetFutureEventsDocument, {
      skip,
      first,
      order,
      filter,
    })
    futureEventData = data?.allConcerts
    futureEventError = error

    if (futureEventData && futureEventData.length < 1) {
      const { data, error } = await client.query<
        GetFutureEventsQuery,
        GetFutureEventsQueryVariables
      >(GetFutureEventsDocument, {
        skip,
        first: 1,
        order: ConcertModelOrderBy.PositionAsc,
      })

      futureEventData = data?.allConcerts
      futureEventError = error
    }

    return {
      data: futureEventData ? eventsFormatter(futureEventData) : [],
      error: futureEventError,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
