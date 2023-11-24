import { PageContent } from 'components/pageContent'
import { getPage } from '../../graphql/getters/getPage'
import { notFound } from 'next/navigation'

export interface Props {
  slug: string
}

export const DefaultPage = async ({ slug }: Props) => {
  const { data } = await getPage({ slug })
  if (!data) return notFound()

  return (
    <article>
      <PageContent items={data.content} pageTitle={data.title || ''} />
    </article>
  )
}
