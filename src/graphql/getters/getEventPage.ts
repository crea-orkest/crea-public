import { client } from '../gqlClient'
import { eventFormatter } from '../formatters/eventFormatter'
import {
  GetEventPageDocument,
  type GetEventPageQuery,
  type GetEventPageQueryVariables,
} from '../generated/graphql'
import type { Event } from 'graphql/types/event'

export const getEventPage = async ({
  slug,
}: GetEventPageQueryVariables): Promise<{ data: Event | null }> => {
  try {
    const { data } = await client.query<
      GetEventPageQuery,
      GetEventPageQueryVariables
    >(GetEventPageDocument, { slug })
    return {
      data: data?.concert ? (eventFormatter(data.concert) ?? null) : null,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null }
  }
}
