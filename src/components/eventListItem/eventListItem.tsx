import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import type { Event } from 'graphql/types/event'
import { ArrowRight } from 'components/icons/arrow-right'
import { dateIsInThePast, formatDate } from 'utils/formatDate'

import styles from './styles.module.scss'

export interface Props {
  data: Event
  size?: 'small' | 'large'
  isLast?: boolean
  showLink?: boolean
  showImage?: boolean
  title?: string
}

export const EventListItem: React.FC<Props> = ({
  data,
  size = 'small',
  isLast,
  showLink = true,
  showImage = true,
  title,
}: Props) => {
  return (
    <div
      className={classNames('content-layout--small', styles.wrapper, {
        [`${styles.large}`]: size === 'large',
        [`${styles.isLast}`]: isLast,
        [`${styles.hasImage}`]: data.image?.url,
        [`${styles.oneLocation}`]: data.locations?.length === 1,
      })}
    >
      <h2
        className={classNames(styles.title, {
          h3: size === 'small',
          h2: size === 'large',
        })}
      >
        {title && <span className="h2">{title}</span>}
        <span>{showLink && <Link href={data.url}>{data.title}</Link>}</span>
      </h2>
      {(data.locations.length > 0 || data.image?.url) && (
        <div className={styles.content}>
          {data.locations?.length > 0 ? (
            <ul className={styles.locations}>
              {data.locations.map((item) => {
                if (!item?.id) return null
                const ticketLink = '' // TODO: add ticketLink to cms per location and put it here
                const concertPast =
                  item.startTime && dateIsInThePast(item.startTime)

                return (
                  <li key={item.id} className={styles.location}>
                    <h3
                      className={classNames(styles.locationTitle, {
                        h5: size === 'small',
                        h3: size === 'large',
                      })}
                    >
                      {item.title}
                    </h3>
                    {item.startTime && (
                      <p className={classNames(styles.locationSubtitle)}>
                        {formatDate(item.startTime)}
                      </p>
                    )}
                    <p
                      className={classNames(styles.locationLinkContainer, {
                        'text-small': size === 'small' || !ticketLink,
                      })}
                    >
                      {concertPast ? (
                        'Concert voorbij'
                      ) : (
                        <>
                          {ticketLink ? (
                            <Link href={ticketLink}>
                              <span className={styles.locationLink}>
                                Koop nu tickets
                                <ArrowRight
                                  className={styles.locationLinkIcon}
                                />
                              </span>
                            </Link>
                          ) : (
                            'Link voor de kaartverkoop volgt spoedig'
                          )}
                        </>
                      )}
                    </p>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p>Zie de poster voor meer informatie.</p>
          )}

          {showImage && data.image?.url && (
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
      )}
    </div>
  )
}
