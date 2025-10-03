import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import type { Event, EventSmall } from 'graphql/types/event'
import { ArrowRight } from 'components/icons/arrow-right'
import { dateIsInThePast, formatDate } from 'utils/formatDate'

import styles from './styles.module.scss'

export interface Props {
  className?: string
  data: Event | EventSmall
  size?: 'small' | 'large'
  isLast?: boolean
  showLink?: boolean
  showImage?: boolean
  showProgram?: boolean
  title?: string
}

export const EventListItem = ({
  className,
  data,
  size = 'small',
  isLast,
  showLink = true,
  showImage = true,
  showProgram = true,
  title,
}: Props) => {
  return (
    <div
      className={classNames(className, styles.root, {
        [`${styles.large}`]: size === 'large',
        [`${styles.isLast}`]: isLast,
        [`${styles.hasTitle}`]: title,
        [`${styles.hasImage}`]: data?.image?.url && showImage,
        [`${styles.oneLocation}`]: data.locations?.length === 1,
      })}
    >
      <h2
        className={classNames(styles.title, {
          h3: size === 'small',
          h2: size === 'large',
        })}
      >
        {typeof title === 'string' && <span className="h2">{title}</span>}
        {showLink && data.url && typeof data?.title === 'string' && (
          <span>
            <Link href={data.url}>{data.title}</Link>
          </span>
        )}
      </h2>
      {(data.locations.length > 0 ||
        data?.image?.url ||
        (data.music && Object.entries(data.music).length > 0)) && (
        <div className={styles.content}>
          <div>
            {showProgram &&
              data.music &&
              Object.entries(data.music).length > 0 && (
                <ul className={styles.program}>
                  {Object.entries(data.music).map(
                    ([composer, title], index) => {
                      return (
                        <li key={index}>
                          <span className={styles.programTitle}>
                            {composer}
                          </span>{' '}
                          — {title}
                        </li>
                      )
                    }
                  )}
                </ul>
              )}
            {data.locations?.length > 0 ? (
              <ul className={styles.locations}>
                {data.locations.map((item, index) => {
                  if (!item?.id) return null
                  const ticketLink = item.ticketLink
                  const concertPast =
                    item?.startTime && dateIsInThePast(item.startTime)
                  const startTime =
                    item?.startTime && formatDate(item.startTime)
                  const itemTitle = item.title || startTime
                  const itemFooterContent = concertPast
                    ? item.afterTicketsText
                    : item.noTicketsText

                  return (
                    <li key={`${item.id}-${index}`} className={styles.location}>
                      <h3
                        className={classNames(styles.locationTitle, {
                          h5: size === 'small',
                          h3: size === 'large',
                        })}
                      >
                        {itemTitle}
                      </h3>
                      {typeof item?.title === 'string' && startTime && (
                        <p className={classNames(styles.locationSubtitle)}>
                          {startTime}
                        </p>
                      )}

                      {itemFooterContent && (!ticketLink || concertPast) ? (
                        <p
                          className={classNames(styles.locationLinkContainer, {
                            'text-small': size === 'small' || !ticketLink,
                          })}
                        >
                          {itemFooterContent}
                        </p>
                      ) : (
                        ticketLink && (
                          <p
                            className={classNames(
                              styles.locationLinkContainer,
                              {
                                'text-small': size === 'small' || !ticketLink,
                              }
                            )}
                          >
                            <Link
                              href={ticketLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className={styles.locationLink}>
                                {item.ticketsText}
                                <ArrowRight
                                  className={styles.locationLinkIcon}
                                />
                              </span>
                            </Link>
                          </p>
                        )
                      )}
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p>Zie de poster voor meer informatie.</p>
            )}
          </div>

          {showImage && data?.image?.url && (
            <div className={classNames(styles.imageContainer)}>
              <Image
                className={classNames(styles.image)}
                src={data.image.url}
                alt={data.image.alt}
                width={data.image.width ?? 100}
                height={data.image.height ?? 100}
              />
            </div>
          )}
        </div>
      )}
      {showLink && (
        <Link
          className={classNames(styles.eventLink, {
            'text-small': size === 'small',
          })}
          href={data.url}
        >
          Bekijk programma
          <ArrowRight />
        </Link>
      )}
    </div>
  )
}
