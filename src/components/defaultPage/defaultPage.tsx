import { PageContent } from 'components/pageContent'
import React from 'react'
import { getPage } from 'graphql/getters/getPage'
import { notFound } from 'next/navigation'

export interface Props {
  slug: string
}

export const DefaultPage = async ({ slug }: Props) => {
  const { data } = await getPage({ slug })
  if (!data) return notFound()

  return (
    <article className="content-layout">
      <h1 className="sr-only">{data.title}</h1>
      <PageContent items={data.content} />
    </article>
  )
}
