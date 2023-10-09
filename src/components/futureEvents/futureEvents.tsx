import { EventListItem } from 'components/eventListItem'
import React from 'react'
import { getFutureEvents } from 'graphql/getters/getFutureEvents'

export interface Props {
  skip: number
  first: number
}

export const FutureEvents = async ({ skip, first }: Props) => {
  const { data } = await getFutureEvents({ skip, first })
  if (!data) return null

  return (
    <section>
      <h2>EVENTS</h2>
      {data.map((event) => {
        if (!event?.id) return
        return <EventListItem key={event.id} data={event} />
      })}
    </section>
  )
}
