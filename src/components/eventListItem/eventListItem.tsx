import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import type { Event } from 'graphql/types/event'

import styles from './styles.module.scss'
import { formatDate } from 'utils/formatDate'

export interface Props {
  data: Event
}

export const EventListItem: React.FC<Props> = ({ data }: Props) => {
  return (
    <div>
      <h2 className={classNames(styles.title, 'h3')}>
        <Link href={data.url}>{data.title}</Link>
      </h2>
      <div className={styles.content}>
        <ul className={styles.locations}>
          {data?.locations?.map((item) => {
            if (!item?.id) return null
            return (
              <li key={item.id} className={styles.location}>
                <h3 className={classNames(styles.locationTitle, 'h5')}>
                  {item.title}
                </h3>
                {item.startTime && (
                  <p className={classNames(styles.locationSubtitle)}>
                    {formatDate(item.startTime)}
                  </p>
                )}
              </li>
            )
          })}
        </ul>

        {data.image?.url && (
          <div className={classNames(styles.imageContainer)}>
            <Image
              priority={true} // TODO: only for the first item
              className={classNames(styles.image)}
              src={data.image.url}
              alt={data.image.description}
              width={data.image.width ?? 100}
              height={data.image.height ?? 100}
            />
          </div>
        )}
      </div>
    </div>
  )
}
