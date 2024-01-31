import classNames from 'classnames'
import type { PageFragment } from 'graphql/generated/graphql'
import type { Event } from 'graphql/types/event'
import { EventListItem } from 'components/eventListItem'
import { Header } from 'components/header'
import { LoadMoreEvents } from 'components/loadMoreEvents'
import { PageContent } from 'components/pageContent'

import styles from './styles.module.scss'

export interface Props {
  pageData: PageFragment
  eventData: Event[]
  numberOfLoadedEvents: number
}

export const ConcertsPage = ({
  pageData,
  eventData,
  numberOfLoadedEvents,
}: Props) => {
  const events = (
    <div className={classNames(styles.concerts, 'content-layout')}>
      {eventData?.map((event) => {
        if (!event?.id) return

        return (
          <EventListItem
            className="content-layout--small"
            key={event.id}
            data={event}
          />
        )
      })}

      <LoadMoreEvents initialSkip={numberOfLoadedEvents} />
    </div>
  )

  let header = null
  let pageContent = pageData?.content
  if (pageData?.content[0]?.__typename === 'HeaderRecord') {
    header = pageData?.content[0]
    pageContent = pageData?.content.slice(1)
  }

  return (
    <>
      {header ? (
        <Header
          body={header.body}
          cover={header.cover}
          title={pageData.title || ''}
        />
      ) : (
        <Header title={pageData.title || ''} />
      )}
      {events}
      <PageContent sectionClassName="content-layout" items={pageContent} />
    </>
  )
}
