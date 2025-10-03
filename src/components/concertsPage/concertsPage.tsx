import classNames from 'classnames'
import type { GetPageQuery } from 'graphql/generated/graphql'
import type { Event } from 'graphql/types/event'
import { EventListItem } from 'components/eventListItem'
import { Header } from 'components/header'
import { LoadMoreEvents } from 'components/loadMoreEvents'
import { PageContent } from 'components/pageContent'
import { formatCloudinaryImage } from 'graphql/formatters/formatCloudinaryImage'
import { isOfTypeCloudinaryAsset } from 'graphql/types/image'

import styles from './styles.module.scss'

export interface Props {
  pageData: GetPageQuery['page']
  eventData: Event[]
  numberOfLoadedEvents: number
  numberOfEvents: number
}

export const ConcertsPage = ({
  pageData,
  eventData,
  numberOfLoadedEvents,
  numberOfEvents,
}: Props) => {
  const events = (
    <div className={classNames(styles.concerts, 'content-layout')}>
      {eventData?.map((event, index) => {
        if (!event?.id) return

        return (
          <EventListItem
            className="content-layout--small"
            key={event.id}
            data={event}
            isLast={
              eventData.length <= numberOfLoadedEvents &&
              eventData.length - 1 === index
            }
          />
        )
      })}

      <LoadMoreEvents
        initialSkip={numberOfLoadedEvents}
        numberOfEvents={numberOfEvents}
      />
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
          cover={formatCloudinaryImage(
            isOfTypeCloudinaryAsset(header.cloudinaryCover)
              ? header.cloudinaryCover
              : undefined
          )}
          title={pageData?.title ?? ''}
        />
      ) : (
        <Header title={pageData?.title ?? ''} />
      )}
      {events}
      <PageContent sectionClassName="content-layout" items={pageContent} />
    </>
  )
}
