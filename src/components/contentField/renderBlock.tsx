import type { Record } from 'datocms-structured-text-utils'
import type { RenderBlockContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType'
import type {
  CallToActionFragment,
  DocumentFragment,
  EventBlockFragment,
  ImageFragment,
  VideoFragment,
} from '../../graphql/generated/graphql'
import { eventSmallFormatter } from 'graphql/formatters/eventSmallFormatter'
import { CallToAction } from 'components/callToAction'
import { DocumentBlock } from 'components/documentBlock'
import { ImageBlock } from 'components/imageBlock'
import { VideoBlock } from 'components/videoBlock'
import { EventListItem } from 'components/eventListItem'
import { FutureEvents } from 'components/futureEvents'

import styles from './styles.module.scss'

export const renderBlock = ({
  record,
}: RenderBlockContext<
  | EventBlockFragment
  | ImageFragment
  | VideoFragment
  | DocumentFragment
  | CallToActionFragment
  | Record
>) => {
  if (isOfType<EventBlockFragment>(record, 'ConcertListRecord')) {
    return (
      <div className={styles.spacing}>
        {record.pinnedConcerts.map((item, index) => {
          const event = eventSmallFormatter(item)
          if (!event) return null
          return (
            <EventListItem
              className="content-layout--small"
              key={item.id}
              data={event}
              size="large"
              isLast={record.pinnedConcerts.length - 1 === index}
            />
          )
        })}
        {record.futureConcerts && <FutureEvents />}
      </div>
    )
  }

  if (isOfType<ImageFragment>(record, 'ImageRecord')) {
    return (
      <div className={styles.spacing}>
        <ImageBlock record={record} />
      </div>
    )
  }

  if (isOfType<VideoFragment>(record, 'VideoRecord')) {
    if (!record.media?.url) return null
    return (
      <div className={styles.spacing}>
        <VideoBlock record={record} />
      </div>
    )
  }

  if (isOfType<DocumentFragment>(record, 'DocumentRecord')) {
    return (
      <div className={styles.spacing}>
        <DocumentBlock record={record} />
      </div>
    )
  }

  if (isOfType<CallToActionFragment>(record, 'CallToActionRecord')) {
    return (
      <div className={styles.spacing}>
        <CallToAction record={record} />
      </div>
    )
  }

  return <p>not supported: {record.__typename}</p>
}
