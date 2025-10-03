import { client } from '../gqlClient'
import { eventFormatter } from '../formatters/eventFormatter'
import {
  GetEventPageDocument,
  type GetEventPageQuery,
  type GetEventPageQueryVariables,
} from '../generated/graphql'

export const getEventPage = async ({ slug }: GetEventPageQueryVariables) => {
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
