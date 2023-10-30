import { DefaultPage } from 'components/defaultPage'
import { getPageSeo } from 'graphql/getters/getPageSeo'
import type { Metadata, Viewport } from 'next'

interface PageProps {
  params: { slug: string[] }
  searchParams: { [key: string]: string[] | undefined }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: params.slug.join('/') })
  return data
}

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}

const Page = ({ params: { slug } }: PageProps) => {
  return <DefaultPage slug={slug.join('/')} />
}

export default Page
