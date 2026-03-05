import Image from 'next/image'
import { LinkToMap } from './linkToMap'
import styles from './styles.module.scss'

export interface Props {
  lat: number
  lng: number
  title: string
}

const linkText = 'Open in Google Maps'
const staticMapKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_STATIC_API_KEY

export const Map = ({ lat, lng, title }: Props) => {
  if (staticMapKey) {
    return (
      <LinkToMap lat={lat} lng={lng}>
        {staticMapKey && (
          <>
            <span className="sr-only">{linkText}</span>
            <Image
              className={styles.staticMap}
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x800&key=${staticMapKey}&markers=color:red%7C${lat},${lng}`}
              alt={title}
              width={800}
              height={800}
            />
          </>
        )}
      </LinkToMap>
    )
  }

  return (
    <LinkToMap lat={lat} lng={lng}>
      <span className={styles.staticMapLinkText}>{linkText}</span>
    </LinkToMap>
  )
}
