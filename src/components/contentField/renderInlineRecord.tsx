import Link from 'next/link'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderInlineRecordContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType'
import { slugFormatter } from 'utils/slugFormatter'
import type {
  ConcertLinkFragment,
  PageLinkFragment,
} from 'graphql/generated/graphql'

export const renderInlineRecord = ({
  record,
}: RenderInlineRecordContext<
  Record | PageLinkFragment | ConcertLinkFragment
>) => {
  if (isOfType<PageLinkFragment>(record, 'PageRecord')) {
    if (!record.slug) return null
    return (
      <Link href={slugFormatter({ slug: record.slug })}>{record.title}</Link>
    )
  }
  if (isOfType<ConcertLinkFragment>(record, 'ConcertRecord')) {
    if (!record.slug) return null
    return (
      <Link
        href={slugFormatter({
          slug: record.slug,
          prefix: '/concerten',
        })}
      >
        {record.title}
      </Link>
    )
  }
  // TODO: maybe return null
  return <span>renderInlineRecord todo: {record.__typename}</span>
}
