import type { PageRecord } from 'graphql/generated/graphql'
import type { Event } from 'graphql/types/event'
import { getPages } from 'graphql/getters/getPages'
import { getPagesMeta } from 'graphql/getters/getPagesMeta'
import { getEventsMeta } from 'graphql/getters/getEventsMeta'
import { getEvents } from 'graphql/getters/getEvents'

const defaultFirst = 100

export async function getAllPages(): Promise<PageRecord[]> {
  const pagesMeta = await getPagesMeta()
  const first = defaultFirst
  const pageCount = pagesMeta.data?.count || 0

  const pages: PageRecord[] = []

  for (let step = 0; step < pageCount; step += first) {
    const { data } = (await getPages({ skip: step, first })) as {
      data: PageRecord[] | null
    }

    if (!data || !data.length) {
      return pages
    }

    data.map((item) => {
      pages.push(item)
    })
  }

  return pages
}

export async function getAllEvents(): Promise<Event[]> {
  const eventsMeta = await getEventsMeta()
  const first = defaultFirst
  const pageCount = eventsMeta.data?.count || 0

  const events: Event[] = []

  for (let step = 0; step < pageCount; step += first) {
    const { data } = (await getEvents({ skip: step, first })) as {
      data: Event[] | null
    }

    if (!data || !data.length) {
      return events
    }

    data.map((item) => {
      events.push(item)
    })
  }

  return events
}
