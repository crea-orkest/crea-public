import React from 'react'
import { getLocation } from 'graphql/getters/getLocation'
import { LocationDetailView } from './locationDetailView'

export interface Props {
  id: string
  startTime: string
}

export const LocationDetail: React.FC<Props> = async ({ id, startTime }) => {
  const { data } = await getLocation({ id })
  if (!data) return null

  return <LocationDetailView data={{ ...data, startTime }} />
}
