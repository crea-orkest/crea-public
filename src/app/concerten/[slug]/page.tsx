import { EventPage } from 'components/eventPage'
import type { Metadata } from 'next'
import { getEventPageSeo } from 'graphql/getters/getEventPageSeo'

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

const Page = ({ params: { slug } }: PageProps) => {
  return <EventPage slug={slug} />
}

export default Page
