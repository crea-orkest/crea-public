import type { GeneralRecord, PageFragment } from 'graphql/generated/graphql'
import type { Metadata } from 'graphql/formatters/metadataFormatter'
import { DefaultLayout } from 'components/defaultLayout'
import { SeoHead } from 'components/seoHead'
import { getPageData } from 'utils/staticPropsHelpers/getPageData'
import { NotFound } from 'components/notFound'
import { PageContent } from 'components/pageContent'
const errorSlug = '404'

interface Props {
  pageSeo: Metadata
  pageData: PageFragment
  generalInfo: GeneralRecord
}

export default function Page({ pageSeo, pageData, generalInfo }: Props) {
  return (
    <>
      <SeoHead metaTags={pageSeo.metaTags} baseUrl={pageSeo.baseUrl} />
      <DefaultLayout generalInfo={generalInfo} siteName={pageSeo.siteName}>
        {pageData?.content.length > 0 ? (
          <PageContent
            sectionClassName="content-layout"
            items={pageData.content}
          />
        ) : (
          <NotFound />
        )}
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps() {
  const { pageData, pageSeo, generalInfo } = await getPageData(errorSlug)
  const parsedMetaTags = pageSeo.metaTags.filter(
    (tag) =>
      !tag.attributes || (tag.attributes && tag.attributes.rel !== 'canonical')
  )

  return {
    props: {
      pageSeo: {
        ...pageSeo,
        metaTags: parsedMetaTags,
      },
      pageData,
      generalInfo,
    },
  }
}
