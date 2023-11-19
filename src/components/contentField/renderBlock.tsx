import { Event } from 'components/event'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderBlockContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType'

import type {
  DocumentFragment,
  EventBlockFragment,
  ImageFragment,
  VideoFragment,
} from 'graphql/generated/graphql'
import { DocumentBlock } from 'components/documentBlock'
import { ImageBlock } from 'components/imageBlock'
import { FutureEvents } from 'components/futureEvents'
import { VideoBlock } from 'components/videoBlock'

import styles from './styles.module.scss'

export const renderBlock = ({
  record,
}: RenderBlockContext<
  EventBlockFragment | ImageFragment | VideoFragment | DocumentFragment | Record
>) => {
  if (isOfType<EventBlockFragment>(record, 'ConcertListRecord')) {
    return (
      <div className={styles.spacing}>
        {record.pinnedConcerts.map((item) => {
          return <Event key={item.id} id={item.id} />
        })}
        {record.futureConcerts && <FutureEvents skip={0} first={3} />}
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

  return <p>not supported: {record.__typename}</p>
}
