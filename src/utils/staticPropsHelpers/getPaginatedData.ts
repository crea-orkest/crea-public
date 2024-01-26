import type { PageRecord } from 'graphql/generated/graphql'
import type { Event } from 'graphql/types/event'
import { getEvents } from 'graphql/getters/getEvents'
import { getPages } from 'graphql/getters/getPages'

const defaultFirst = 20

export async function getPagesPaginated(
  skip: number = 0
): Promise<PageRecord[]> {
  const first = defaultFirst
  const { data } = (await getPages({ first, skip })) as {
    data: PageRecord[] | null
  }

  if (!data) {
    return []
  }

  if (data.length < first) {
    return data
  }

  const paginatedData = await getPagesPaginated(skip + first)

  return [...data, ...paginatedData]
}

export async function getEventsPaginated(skip: number = 0): Promise<Event[]> {
  const first = defaultFirst
  const { data } = (await getEvents({ first, skip })) as {
    data: Event[] | null
  }

  if (!data) {
    return []
  }

  if (data.length < first) {
    return data
  }

  const paginatedData = await getEventsPaginated(skip + first)

  return [...data, ...paginatedData]
}
