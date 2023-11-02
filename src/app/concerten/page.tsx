import React from 'react'
import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { Event } from 'components/event'
import { FutureEvents } from 'components/futureEvents'
import { Header } from 'components/header'
import { LoadMoreEvents } from 'components/loadMoreEvents'
import { PageContent } from 'components/pageContent'
import { getEvents } from 'graphql/getters/getEvents'
import { getPageSeo } from 'graphql/getters/getPageSeo'
import { getPage } from 'graphql/getters/getPage'

const pageSlug = 'concerten'
export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: pageSlug })
  return data
}

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}

const Page = async () => {
  // TODO put this in a separate component (like ConcertsPage)
  const first = 2
  const { data: eventData } = await getEvents({ skip: 0, first })
  const { data: pageData } = await getPage({ slug: 'concerten' })

  const events = (
    <div className="content-layout">
      <FutureEvents skip={0} first={99} />

      <h2>Alle concerten</h2>

      {eventData?.map((event) => {
        if (!event?.id) return
        return <Event key={event.id} id={event.id} />
      })}

      <LoadMoreEvents initialSkip={first} />
    </div>
  )

  if (!eventData && !pageData) return notFound()

  if (!pageData) {
    return events
  }

  let header = null
  let pageContent = pageData?.content
  if (pageData?.content[0]?.__typename === 'HeaderRecord') {
    header = pageData?.content[0]
    pageContent = pageData?.content.slice(1)
  }

  return (
    <>
      {header && (
        <Header
          body={header.body}
          cover={header.cover}
          title={pageData.title || ''}
        />
      )}
      {events}
      <PageContent items={pageContent} />
    </>
  )
}

export default Page
