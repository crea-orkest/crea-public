import { PageContent } from 'components/pageContent'
import React from 'react'
import { getEventPage } from 'graphql/getters/getEventPage'
import { notFound } from 'next/navigation'
import { LocationDetail } from 'components/locationDetail'
import styles from './styles.module.scss'
import classNames from 'classnames'

export interface Props {
  slug: string
}

export const EventPage = async ({ slug }: Props) => {
  const { data } = await getEventPage({ slug })
  if (!data) return notFound()

  return (
    <article>
      <PageContent items={data.content} pageTitle={data.title} />
      <div
        className={classNames(styles.locations, {
          [`${styles.locations__odd}`]: data.locations.length % 2,
          [`${styles.locations__one}`]: data.locations.length === 1,
        })}
      >
        {data.locations.map((location) => {
          if (!location?.id) return null
          return <LocationDetail key={location?.id} id={location.id} />
        })}
      </div>
    </article>
  )
}
