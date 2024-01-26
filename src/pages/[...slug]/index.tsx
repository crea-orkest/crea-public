import type { GeneralRecord, PageFragment } from 'graphql/generated/graphql'
import type { Metadata } from 'graphql/formatters/metadataFormatter'
import { DefaultLayout } from 'components/defaultLayout'
import { DefaultPage } from 'components/defaultPage'
import { getPagesPaginated } from 'utils/staticPropsHelpers/getPaginatedData'
import { getPageData } from 'utils/staticPropsHelpers/getPageData'
import { SeoHead } from 'components/seoHead'

interface GetStaticPathsResult {
  params: { slug: string[] }
}

interface Props {
  pageData: PageFragment
  pageSeo: Metadata
  generalInfo: GeneralRecord
}

export default function Page({ pageData, generalInfo, pageSeo }: Props) {
  return (
    <>
      <SeoHead metaTags={pageSeo.metaTags} baseUrl={pageSeo.baseUrl} />
      <DefaultLayout generalInfo={generalInfo} siteName={pageSeo.siteName}>
        <DefaultPage data={pageData} />
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps({
  params: { slug },
}: GetStaticPathsResult) {
  const { pageData, pageSeo, generalInfo } = await getPageData(slug.join('/'))
  return {
    props: {
      pageData,
      pageSeo,
      generalInfo,
    },
  }
}

export async function getStaticPaths() {
  const pages = await getPagesPaginated()

  const paths = pages
    .map((page) => {
      if (
        !page.slug ||
        page.slug === '' ||
        page.slug === 'concerten' ||
        page.slug === '404'
      ) {
        return
      }

      return {
        params: { slug: page.slug.split('/') },
      }
    })
    .filter(Boolean)

  return {
    paths,
    fallback: false,
  }
}
