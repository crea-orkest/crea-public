import type { GetGeneralInfoQuery } from 'graphql/generated/graphql'
import type { Event } from 'graphql/types/event'
import type { Metadata } from 'graphql/formatters/metadataFormatter'
import { DefaultLayout } from 'components/defaultLayout'
import { EventPage } from 'components/eventPage'
import { getAllEvents } from 'utils/staticPropsHelpers/getPaginatedData'
import { getEventData } from 'utils/staticPropsHelpers/getPageData'
import { SeoHead } from 'components/seoHead'

interface GetStaticPathsResult {
  params: { slug: string }
}

interface Props {
  eventData: Event
  eventSeo: Metadata
  generalInfo: GetGeneralInfoQuery['general']
}

export default function Page({ eventData, eventSeo, generalInfo }: Props) {
  return (
    <>
      <SeoHead metaTags={eventSeo.metaTags} baseUrl={eventSeo.baseUrl} />
      <DefaultLayout generalInfo={generalInfo} siteName={eventSeo.siteName}>
        <EventPage data={eventData} />
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps({
  params: { slug },
}: GetStaticPathsResult) {
  const { eventData, eventSeo, generalInfo } = await getEventData(slug)

  return {
    props: {
      eventData,
      eventSeo,
      generalInfo,
    },
  }
}

export async function getStaticPaths() {
  type Paths = Record<'params', { slug: string }>[]
  const events = await getAllEvents()

  const initialValue: Paths = []
  const paths = events.reduce((acc, event) => {
    if (!event.slug || event.slug === '') {
      return acc
    }

    const path = {
      params: { slug: event.slug },
    }

    return [...acc, path]
  }, initialValue)

  return {
    paths,
    fallback: false,
  }
}
