import { PageContent } from 'components/pageContent'
import React from 'react'
import { getEventPage } from 'graphql/getters/getEventPage'
import { notFound } from 'next/navigation'
import { LocationDetail } from 'components/locationDetail'

import styles from './styles.module.scss'

export interface Props {
  slug: string
}

export const EventPage = async ({ slug }: Props) => {
  const { data } = await getEventPage({ slug })
  if (!data) return notFound()

  return (
    <article>
      <PageContent items={data.content} pageTitle={data.title} />
      <div className={styles.locations}>
        {data.locations.map((location) => {
          if (!location?.id || !location.startTime) return null
          return (
            <LocationDetail
              key={location?.id}
              id={location.id}
              startTime={location.startTime}
            />
          )
        })}
      </div>
    </article>
  )
}
