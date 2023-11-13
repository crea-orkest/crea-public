import { Event } from 'components/event'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderBlockContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType'

import type {
  DocumentFragment,
  EventsFragment,
  ImageFragment,
  VideoFragment,
} from 'graphql/generated/graphql'
import { Document } from 'components/document'
import { ImageBlock } from 'components/imageBlock'

export const renderBlock = ({
  record,
}: RenderBlockContext<
  EventsFragment | ImageFragment | VideoFragment | DocumentFragment | Record
>) => {
  if (isOfType<EventsFragment>(record, 'ConcertListRecord')) {
    return (
      <div>
        {record.pinnedConcerts.map((item) => {
          return <Event key={item.id} id={item.id} />
        })}
      </div>
    )
  }

  if (isOfType<ImageFragment>(record, 'ImageRecord')) {
    return <ImageBlock record={record} />
  }

  if (isOfType<VideoFragment>(record, 'VideoRecord')) {
    if (!record.media?.url) return null
    // TODO: video component
    return <p>some video component</p>
  }

  if (isOfType<DocumentFragment>(record, 'DocumentRecord')) {
    return <Document record={record} />
  }

  return <p>not supported: {record.__typename}</p>
}
