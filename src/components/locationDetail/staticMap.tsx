import styles from './styles.module.scss'
import Image from 'next/image'

export interface Props {
  lat: number
  lng: number
  title: string
  key?: string
}

export const StaticMap = ({
  lat,
  lng,
  title,
  key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_STATIC_API_KEY,
}: Props) => (
  <a
    href={`https://maps.google.com/?q=${lat},${lng}`}
    target="_blank"
    rel="noreferrer"
    className={styles.staticMapLink}
  >
    {key && (
      <Image
        className={styles.staticMap}
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x800&key=${key}`}
        alt={title}
        width={800}
        height={800}
      />
    )}
    <span className={styles.staticMapLinkText}>Open in Google Maps</span>
  </a>
)
