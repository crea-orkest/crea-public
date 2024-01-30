import type { PageFragment } from 'graphql/generated/graphql'
import { PageContent } from 'components/pageContent'

export interface Props {
  data: PageFragment
}

export const DefaultPage = ({ data }: Props) => {
  return (
    <PageContent
      sectionClassName="content-layout"
      items={data.content}
      pageTitle={data.title || ''}
    />
  )
}
