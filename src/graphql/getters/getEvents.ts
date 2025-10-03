import { client } from '../gqlClient'
import { eventsFormatter } from '../formatters/eventsFormatter'
import {
  ConcertModelOrderBy,
  GetEventsDocument,
  type GetEventsQuery,
  type GetEventsQueryVariables,
} from '../generated/graphql'

interface Props extends GetEventsQueryVariables {
  skip: number
  first: number
}

export const getEvents = async ({
  skip,
  first,
  order = ConcertModelOrderBy.PositionAsc,
}: Props) => {
  try {
    const { data } = await client.query<
      GetEventsQuery,
      GetEventsQueryVariables
    >(GetEventsDocument, {
      skip,
      first,
      order,
    })

    return {
      data: data?.allConcerts ? eventsFormatter(data.allConcerts) : [],
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null }
  }
}
