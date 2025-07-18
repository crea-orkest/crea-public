import type { Location } from 'graphql/types/location'
import styles from './styles.module.scss'
import { StaticMap } from './staticMap'

export interface Props {
  data: Location
}

export const LocationDetail = ({
  data: { title, address, lat, lng },
}: Props) => (
  <address className={styles.root}>
    <div className={styles.details}>
      <h3 className="h4">{title}</h3>
      {address && <p className={styles.detailsText}>{address}</p>}
    </div>
    {lat && lng && <StaticMap lat={lat} lng={lng} title={title ?? 'Locatie'} />}
  </address>
)
