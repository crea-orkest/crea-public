import { PageContent } from 'components/pageContent'
import { getEventPage } from '../../graphql/getters/getEventPage'
import { notFound } from 'next/navigation'
import { LocationDetail } from 'components/locationDetail'
// import { EventListItem } from 'components/eventListItem'
import { Header } from 'components/header'

import styles from './styles.module.scss'

export interface Props {
  slug: string
}

export const EventPage = async ({ slug }: Props) => {
  const { data } = await getEventPage({ slug })
  if (!data) return notFound()

  return (
    <article>
      <Header title={data.title} tag="header" />
      {/* <div className={styles.calendar}>
        <EventListItem
          data={data}
          size="large"
          isLast={true}
          title="Agenda"
          showLink={false}
          showImage={false}
        />
      </div> */}

      <PageContent items={data.content} />
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
