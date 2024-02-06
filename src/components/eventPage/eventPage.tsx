import Image from 'next/image'
import classNames from 'classnames'
import type { Event } from 'graphql/types/event'
import { PageContent } from 'components/pageContent'
import { LocationDetail } from 'components/locationDetail'
import { EventListItem } from 'components/eventListItem'

import styles from './styles.module.scss'

export interface Props {
  data: Event
}

export const EventPage = ({ data }: Props) => {
  return (
    <article className={styles.root}>
      <header
        className={classNames(styles.header, 'with-background', {
          [`${styles.withImage}`]: data.image?.url,
        })}
      >
        {data.image?.url && (
          <div className={classNames(styles.headerImageWrapper)}>
            <Image
              className={classNames(styles.headerImage)}
              src={data.image.url}
              alt={data.image.alt}
              width={data.image.width ?? 100}
              height={data.image.height ?? 100}
            />
            <div className={classNames(styles.background)} />
          </div>
        )}

        <div className={classNames(styles.titleContainer, 'content-layout')}>
          <h2>{data.title}</h2>

          {data.program.length > 0 && (
            <ul className={styles.program}>
              {data.program.map((item) => {
                if (!item?.id) return null
                return (
                  <li
                    key={item.id}
                    className={classNames(styles.programItem, 'text-large')}
                  >
                    <span className={styles.programTitle}>{item.composer}</span>{' '}
                    — {item.title}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </header>
      <div
        className={classNames(styles.container, 'content-layout', {
          [`${styles.noGrid}`]: !data.image?.url,
        })}
      >
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            {data.image?.url && (
              <div className={classNames(styles.imageContainer)}>
                <Image
                  priority={true}
                  className={classNames(styles.image)}
                  src={data.image.url}
                  alt={data.image.alt}
                  width={data.image.width ?? 100}
                  height={data.image.height ?? 100}
                />
              </div>
            )}

            {data.persons.length > 0 && (
              <ul className={styles.persons}>
                {data.persons.map((person) => {
                  if (!person?.id) return null
                  return (
                    <li key={person.id} className={styles.person}>
                      <p
                        className={classNames(styles.personTitle, 'text-small')}
                      >
                        {person.description}
                      </p>
                      <p className="h5">{person.name}</p>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </aside>
        <div className={styles.content}>
          {data.locations.length > 0 && (
            <div className={styles.eventListItem}>
              <EventListItem
                data={data}
                size="large"
                isLast={true}
                title="Agenda"
                showLink={false}
                showImage={false}
                showProgram={false}
              />
            </div>
          )}

          <PageContent
            sectionClassName={styles.pageContent}
            items={data.content}
          />
        </div>
      </div>
      <div className={styles.locations}>
        {data.locations.map((location) => {
          if (!location?.id || !location.startTime) return null
          return <LocationDetail key={location?.id} data={location} />
        })}
      </div>
    </article>
  )
}
