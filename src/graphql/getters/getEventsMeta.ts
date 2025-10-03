import { client } from '../gqlClient'
import {
  GetEventsMetaDocument,
  type GetEventsMetaQuery,
  type GetEventsMetaQueryVariables,
} from '../generated/graphql'

export const getEventsMeta = async (): Promise<{
  data: GetEventsMetaQuery['_allConcertsMeta']
}> => {
  try {
    const { data } = await client.query<
      GetEventsMetaQuery,
      GetEventsMetaQueryVariables
    >(GetEventsMetaDocument, {})

    return {
      data: data?._allConcertsMeta ?? { count: 0 },
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: { count: 0 } }
  }
}
