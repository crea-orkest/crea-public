import { LinkToMap } from './linkToMap'
import styles from './styles.module.scss'
import Image from 'next/image'

export interface Props {
  lat: number
  lng: number
  title: string
  staticMapKey?: string
  linkText: string
}

export const StaticMap = ({
  lat,
  lng,
  title,
  staticMapKey,
  linkText,
}: Props) => (
  <LinkToMap lat={lat} lng={lng}>
    {staticMapKey && (
      <Image
        className={styles.staticMap}
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x800&key=${staticMapKey}&markers=color:red%7C${lat},${lng}`}
        alt={title}
        width={800}
        height={800}
      />
    )}
    <span className={styles.staticMapLinkText}>{linkText}</span>
  </LinkToMap>
)
