'use client'
import React from 'react'
import { Map } from 'components/map'
import type { Location } from 'graphql/types/location'
import { useEnv } from 'hooks/useEnv'
import styles from './styles.module.scss'
import { formatDate } from 'utils/formatDate'

export interface Props {
  data: Location
}

export const LocationDetailView: React.FC<Props> = ({ data }) => {
  const googleMapsApiKey = useEnv('GOOGLE_MAPS_API_KEY')
  const { title, address, lat, lng, startTime } = data

  return (
    <address className={styles.container}>
      <div className={styles.details}>
        <h3 className="h4">{title}</h3>
        {address && <p className={styles.detailsText}>{address}</p>}
        {startTime && (
          <p className={styles.detailsText}>{formatDate(startTime)}</p>
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
