import { Map } from 'components/map'
import type { Location } from 'graphql/types/location'
import styles from './styles.module.scss'

export interface Props {
  data: Location
}

const googleMapsApiKey = process.env['NEXT_PUBLIC_GOOGLE_MAPS_API_KEY']

export const LocationDetail = ({ data }: Props) => {
  const { title, address, lat, lng } = data

  return (
    <address className={styles.root}>
      <div className={styles.details}>
        <h3 className="h4">{title}</h3>
        {address && <p className={styles.detailsText}>{address}</p>}
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
