import type {
  GetGeneralInfoQuery,
  GetPageQuery,
} from 'graphql/generated/graphql'
import type { siteMetadata } from 'graphql/formatters/formatSiteMetadata'
import type { Event } from 'graphql/types/event'
import type { Metadata } from 'graphql/formatters/metadataFormatter'
import { DefaultLayout } from 'components/defaultLayout'
import { getFutureEvents } from 'graphql/getters/getFutureEvents'
import { HomePage } from 'components/homePage'
import { SeoHead } from 'components/seoHead'
import { getPageData } from 'utils/staticPropsHelpers/getPageData'

const homepageSlug = 'homepage'

interface Props {
  pageData: GetPageQuery['page']
  pageSeo: Metadata
  eventData: Event[]
  generalInfo: GetGeneralInfoQuery['general']
  metadata: siteMetadata
}

export default function Page({
  pageData,
  pageSeo,
  generalInfo,
  eventData,
}: Props) {
  return (
    <>
      <SeoHead metaTags={pageSeo.metaTags} baseUrl={pageSeo.baseUrl} />
      <DefaultLayout generalInfo={generalInfo} siteName={pageSeo.siteName}>
        <HomePage pageData={pageData} eventData={eventData} />
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps() {
  const { pageData, pageSeo, generalInfo } = await getPageData(homepageSlug)
  const { data: eventData } = await getFutureEvents({ skip: 0, first: 5 })
  return {
    props: {
      pageData,
      pageSeo,
      generalInfo,
      eventData,
    },
  }
}
