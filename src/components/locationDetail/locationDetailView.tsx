'use client'
import React from 'react'
import { Map } from 'components/map'
import type { Location } from 'graphql/types/location'
import { useEnv } from 'hooks/useEnv'
import { useDimensions } from 'hooks/useDimensions'

export interface Props {
  data: Location
}

export const LocationDetailView: React.FC<Props> = ({ data }) => {
  const googleMapsApiKey = useEnv('GOOGLE_MAPS_API_KEY')
  const dimentions = useDimensions()

  const { title, address, lat, lng, startTime } = data
  return (
    <address>
      <h2>{title}</h2>
      {address && <p>{address}</p>}
      {lat && lng && googleMapsApiKey && (
        <Map
          id="concert-location"
          pin={{
            title: title ?? '',
            lat,
            lng,
          }}
          googleMapsApiKey={googleMapsApiKey}
          dimensions={{
            width: '100%',
            height: dimentions.width > 800 ? '400px' : dimentions.height / 2,
          }}
        />
      )}
      {startTime && <p>{new Date(startTime).toDateString()}</p>}
    </address>
  )
}
