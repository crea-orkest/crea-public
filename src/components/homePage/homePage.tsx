import classNames from 'classnames'
import type { PageFragment } from 'graphql/generated/graphql'
import type { Event } from 'graphql/types/event'
import { EventListItem } from 'components/eventListItem'
import { Header } from 'components/header'
import { PageContent } from 'components/pageContent'

import styles from './styles.module.scss'

export interface Props {
  pageData: PageFragment
  eventData: Event[]
}

export const HomePage = ({ pageData, eventData }: Props) => {
  const events = (
    <div className={classNames(styles.concerts, 'content-layout')}>
      {eventData?.map((event, index) => {
        if (!event?.id) return

        return (
          <EventListItem
            className="content-layout--small"
            key={event.id}
            data={event}
            isLast={eventData.length - 1 === index}
            size="large"
          />
        )
      })}
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
      {header && (
        <Header
          body={header.body}
          cover={header.cover}
          title={pageData.title || ''}
        />
      )}
      {events}
      <PageContent sectionClassName="content-layout" items={pageContent} />
    </>
  )
}
