import { EventListItem } from 'components/eventListItem'
import React from 'react'
import { getEvent } from '../../graphql/getters/getEvent'

export interface Props {
  id: string
  size?: 'small' | 'large'
  isLast?: boolean
}

export const Event: React.FC<Props> = async ({
  id,
  size = 'small',
  isLast,
}: Props) => {
  const { data } = await getEvent({ id })
  if (!data) return null

  return <EventListItem data={data} size={size} isLast={isLast} />
}
