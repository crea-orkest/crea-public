'use client'
import React from 'react'
import { Map } from 'components/map'
import type { Location } from 'graphql/types/location'
import { useEnv } from 'hooks/useEnv'
import styles from './styles.module.scss'

export interface Props {
  data: Location
}

export const LocationDetailView: React.FC<Props> = ({ data }) => {
  const googleMapsApiKey = useEnv('GOOGLE_MAPS_API_KEY')
  const { title, address, lat, lng, startTime } = data

  return (
    <address className={styles.address__container}>
      <div className={styles.address__details}>
        <h2>{title}</h2>
        {address && <p>{address}</p>}
        {startTime && (
          <p>
            {new Date(startTime).toLocaleDateString('nl-NL', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}
      </div>
      {lat && lng && googleMapsApiKey ? (
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
            height: '400px',
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '400px',
            background: 'lightgray',
          }}
        />
      )}
    </address>
  )
}
