import type { Location } from 'graphql/types/location'
import React from 'react'

export interface Props {
  data: Location
}

export const LocationView: React.FC<Props> = ({ data }) => {
  const { title, address, startTime } = data
  return (
    <address>
      <h2>{title}</h2>
      {address && <p>{address}</p>}
      {startTime && <p>{new Date(startTime).toDateString()}</p>}
    </address>
  )
}
