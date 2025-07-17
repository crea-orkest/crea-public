import Link from 'next/link'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderRecordLinkContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType'
import { slugFormatter } from 'utils/slugFormatter'
import type {
  ConcertLinkFragment,
  PageLinkFragment,
} from '../../graphql/generated/graphql'

export const renderLinkToRecord = ({
  record,
  children,
}: RenderRecordLinkContext<Record>) => {
  if (isOfType<PageLinkFragment>(record, 'PageRecord')) {
    if (!record.slug) return null
    return <Link href={slugFormatter({ slug: record.slug })}>{children}</Link>
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
        {children}
      </Link>
    )
  }
  // TODO: error logging
  return null
}
