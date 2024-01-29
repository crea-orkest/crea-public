import type { GeneralRecord } from 'graphql/generated/graphql'
import type { Metadata } from 'graphql/formatters/metadataFormatter'
import { DefaultLayout } from 'components/defaultLayout'
import { SeoHead } from 'components/seoHead'
import { getPageData } from 'utils/staticPropsHelpers/getPageData'
import { NotFound } from 'components/notFound'

const errorSlug = '404'

interface Props {
  pageSeo: Metadata
  generalInfo: GeneralRecord
}

export default function Page({ pageSeo, generalInfo }: Props) {
  return (
    <>
      <SeoHead metaTags={pageSeo.metaTags} baseUrl={pageSeo.baseUrl} />
      <DefaultLayout generalInfo={generalInfo} siteName={pageSeo.siteName}>
        <NotFound />
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps() {
  const { pageSeo, generalInfo } = await getPageData(errorSlug)
  const parsedMetaTags = pageSeo.metaTags.filter(
    (tag) => tag.attributes && tag?.attributes.rel !== 'canonical'
  )

  return {
    props: {
      pageSeo: {
        ...pageSeo,
        metaTags: parsedMetaTags,
      },
      generalInfo,
    },
  }
}
