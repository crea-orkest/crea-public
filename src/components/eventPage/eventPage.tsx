import { PageContent } from 'components/pageContent'
import React from 'react'
import { getEventPage } from 'graphql/getters/getEventPage'
import { notFound } from 'next/navigation'

export interface Props {
  slug: string
}

export const EventPage = async ({ slug }: Props) => {
  const { data } = await getEventPage({ slug })
  if (!data) return notFound()

  return (
    <article>
      <PageContent items={data.content} pageTitle={data.title} />
    </article>
  )
}
