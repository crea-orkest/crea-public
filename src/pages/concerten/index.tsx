import type { GeneralRecord, PageFragment } from 'graphql/generated/graphql'
import type { Metadata } from 'graphql/formatters/metadataFormatter'
import type { Event } from 'graphql/types/event'
import { DefaultLayout } from 'components/defaultLayout'
import { ConcertsPage } from 'components/concertsPage'
import { getPageData } from 'utils/staticPropsHelpers/getPageData'
import { SeoHead } from 'components/seoHead'
import { getEvents } from 'graphql/getters/getEvents'

const eventPageSlug = 'concerten'
const numberOfLoadedEvents = 20

interface Props {
  pageData: PageFragment
  pageSeo: Metadata
  eventData: Event[]
  generalInfo: GeneralRecord
}

export default function Page({
  pageData,
  pageSeo,
  eventData,
  generalInfo,
}: Props) {
  return (
    <>
      <SeoHead metaTags={pageSeo.metaTags} baseUrl={pageSeo.baseUrl} />
      <DefaultLayout generalInfo={generalInfo} siteName={pageSeo.siteName}>
        <ConcertsPage
          pageData={pageData}
          eventData={eventData}
          numberOfLoadedEvents={numberOfLoadedEvents}
        />
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps() {
  const { data: eventData } = await getEvents({
    skip: 0,
    first: numberOfLoadedEvents,
  })
  const { pageData, pageSeo, generalInfo } = await getPageData(eventPageSlug)

  return {
    props: {
      eventData,
      pageData,
      pageSeo,
      generalInfo,
    },
  }
}
