import type { Record } from 'datocms-structured-text-utils'
import type { RenderRecordLinkContext } from 'react-datocms/structured-text'
import { renderInlineRecord } from './renderInlineRecord'

export const renderLinkToRecord = ({
  record,
}: RenderRecordLinkContext<Record>) => {
  // TODO: what is RenderRecordLinkContext? is this ok?
  return renderInlineRecord({ record })
}
