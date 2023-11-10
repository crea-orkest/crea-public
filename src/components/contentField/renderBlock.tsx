import { Event } from 'components/event'
import Image from 'next/image'
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
    if (!record.item?.item?.url) return null
    return (
      <Image
        src={record.item.item.url}
        alt={record.item.item.alt || ''}
        height={record.item.item.height || undefined}
        width={record.item.item.width || undefined}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    )
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
