import Link from 'next/link'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderInlineRecordContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType'
import { slugFormatter } from 'utils/slugFormatter'
import type {
  ConcertLinkFragment,
  PageLinkFragment,
} from '../../graphql/generated/graphql'

export const renderInlineRecord = ({
  record,
}: RenderInlineRecordContext<
  Record | PageLinkFragment | ConcertLinkFragment
>) => {
  if (!record.slug || !record.title) return null

  if (isOfType<PageLinkFragment>(record, 'PageRecord')) {
    return (
      <Link href={slugFormatter({ slug: record.slug })}>{record.title}</Link>
    )
  }
  if (isOfType<ConcertLinkFragment>(record, 'ConcertRecord')) {
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
  // TODO: error logging
  return null
}
