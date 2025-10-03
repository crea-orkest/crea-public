import type {
  GetEventsMetaQuery,
  GetGeneralInfoQuery,
  GetPageQuery,
} from 'graphql/generated/graphql'
import type { Metadata } from 'graphql/formatters/metadataFormatter'
import type { Event } from 'graphql/types/event'
import { DefaultLayout } from 'components/defaultLayout'
import { ConcertsPage } from 'components/concertsPage'
import { getPageData } from 'utils/staticPropsHelpers/getPageData'
import { SeoHead } from 'components/seoHead'
import { getEvents } from 'graphql/getters/getEvents'
import { getEventsMeta } from 'graphql/getters/getEventsMeta'

const eventPageSlug = 'concerten'
const numberOfLoadedEvents = 50

interface Props {
  eventMeta: GetEventsMetaQuery['_allConcertsMeta']
  pageData: GetPageQuery['page']
  pageSeo: Metadata
  eventData: Event[]
  generalInfo: GetGeneralInfoQuery['general']
}

export default function Page({
  eventMeta,
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
          numberOfEvents={eventMeta.count}
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
  const { data: eventMeta } = await getEventsMeta()
  const { pageData, pageSeo, generalInfo } = await getPageData(eventPageSlug)

  return {
    props: {
      eventMeta,
      eventData,
      pageData,
      pageSeo,
      generalInfo,
    },
  }
}
