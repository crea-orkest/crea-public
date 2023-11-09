import React from 'react'
import type { Metadata, Viewport } from 'next'
import { getPageSeo } from 'graphql/getters/getPageSeo'
import { ConcertsPage } from 'components/concertsPage'
import { viewport } from 'utils/viewport'

const pageSlug = 'concerten'
export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: pageSlug })
  return data
}

export function generateViewport(): Viewport {
  return viewport
}

const Page = () => {
  return <ConcertsPage />
}

export default Page
