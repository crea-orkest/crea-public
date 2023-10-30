import { EventPage } from 'components/eventPage'
import { getEventPageSeo } from 'graphql/getters/getEventPageSeo'
import type { Metadata, Viewport } from 'next'

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string[] | undefined }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { data } = await getEventPageSeo({ slug: params.slug })
  return data
}

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}

const Page = ({ params: { slug } }: PageProps) => {
  return <EventPage slug={slug} />
}

export default Page
