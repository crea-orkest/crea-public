import type { TitleMetaLinkTag } from 'react-datocms/src/Seo/types'
import Head from 'next/head'
import { renderMetaTags } from 'react-datocms'
import { useRouter } from 'next/router'

export type Props = {
  metaTags?: TitleMetaLinkTag[]
  baseUrl?: string
}

export const SeoHead = ({ metaTags, baseUrl }: Props) => {
  const { asPath } = useRouter()
  const [pathWithoutSearchParams] = asPath.split('?')
  const ogUrl = `${baseUrl}${pathWithoutSearchParams}`

  return (
    <Head>
      {metaTags?.length ? renderMetaTags(metaTags) : null}
      <meta property="og:url" content={ogUrl} />
    </Head>
  )
}
