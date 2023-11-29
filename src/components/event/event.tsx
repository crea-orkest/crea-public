import { EventListItem } from 'components/eventListItem'
import React from 'react'
import { getEvent } from '../../graphql/getters/getEvent'

export interface Props {
  className?: string
  id: string
  size?: 'small' | 'large'
  isLast?: boolean
}

export const Event: React.FC<Props> = async ({
  className,
  id,
  size = 'small',
  isLast,
}: Props) => {
  const { data } = await getEvent({ id })
  if (!data) return null

  return (
    <EventListItem
      className={className}
      data={data}
      size={size}
      isLast={isLast}
    />
  )
}
