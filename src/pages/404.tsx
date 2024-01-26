import type { GeneralRecord, PageFragment } from 'graphql/generated/graphql'
import type { Metadata } from 'graphql/formatters/metadataFormatter'
import { DefaultLayout } from 'components/defaultLayout'
import { DefaultPage } from 'components/defaultPage'
import { SeoHead } from 'components/seoHead'
import { getPageData } from 'utils/staticPropsHelpers/getPageData'
import Head from 'next/head'

const errorSlug = '404'

interface Props {
  pageData: PageFragment
  pageSeo: Metadata
  generalInfo: GeneralRecord
}

export default function Page({ pageData, pageSeo, generalInfo }: Props) {
  if (!pageData) return <p>404 - Pagina niet gevonden</p>
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <SeoHead metaTags={pageSeo.metaTags} baseUrl={pageSeo.baseUrl} />
      <DefaultLayout generalInfo={generalInfo} siteName={pageSeo.siteName}>
        <DefaultPage data={pageData} />
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps() {
  const { pageData, pageSeo, generalInfo } = await getPageData(errorSlug)
  return {
    props: {
      pageData,
      pageSeo,
      generalInfo,
    },
  }
}
