import { EventListItem } from 'components/eventListItem'
import React from 'react'
import { getEvent } from '../../graphql/getters/getEvent'

export interface Props {
  id: string
}

export const Event: React.FC<Props> = async ({ id }: Props) => {
  const { data } = await getEvent({ id })
  if (!data) return null

  return <EventListItem data={data} />
}
