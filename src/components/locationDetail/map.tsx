import { InteractiveMap } from './interactiveMap'
import { LinkToMap } from './linkToMap'
import { StaticMap } from './staticMap'
import styles from './styles.module.scss'

export interface Props {
  lat: number
  lng: number
  title: string
}

const linkText = 'Open in Google Maps'
const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const staticMapKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_STATIC_API_KEY

export const Map = ({ lat, lng, title }: Props) => {
  if (!googleMapsApiKey || !staticMapKey) {
    return (
      <LinkToMap lat={lat} lng={lng}>
        <span className={styles.staticMapLinkText}>{linkText}</span>
      </LinkToMap>
    )
  }

  if (staticMapKey) {
    return (
      <StaticMap
        lat={lat}
        lng={lng}
        title={title}
        staticMapKey={staticMapKey}
        linkText={linkText}
      />
    )
  }

  return (
    <div>
      <InteractiveMap
        lat={lat}
        lng={lng}
        title={title}
        apiKey={googleMapsApiKey}
      />

      <LinkToMap lat={lat} lng={lng}>
        <span className={styles.staticMapLinkText}>{linkText}</span>
      </LinkToMap>
    </div>
  )
}
