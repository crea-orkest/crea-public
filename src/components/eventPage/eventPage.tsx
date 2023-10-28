import { ContentField } from 'components/contentField'
import React from 'react'
import { TwoColumContentField } from 'components/twoColumContentField'
import { getEventPage } from 'graphql/getters/getEventPage'
import { notFound } from 'next/navigation'

export interface Props {
  slug: string
}

export const EventPage = async ({ slug }: Props) => {
  const { data } = await getEventPage({ slug })
  if (!data) return notFound()

  return (
    <article className="content-layout">
      <h1>{data.title}</h1>

      {data.content?.map((item) => {
        if ('leftContent' in item || 'rightContent' in item) {
          return <TwoColumContentField key={item.id} item={item} />
        }
        if ('content' in item) {
          return <ContentField key={item.id} data={item.content} />
        }
        return null
      })}

      <code>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </code>
    </article>
  )
}
