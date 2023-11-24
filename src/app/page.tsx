import React from 'react'
import { DefaultPage } from 'components/defaultPage'
import { getPageSeo } from '../graphql/getters/getPageSeo'
import type { Metadata, Viewport } from 'next'
import { viewport } from 'utils/viewport'

const homepageSlug = 'homepage'
export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: homepageSlug })
  return data
}

export function generateViewport(): Viewport {
  return viewport
}

const Page = () => {
  return <DefaultPage slug={homepageSlug} />
}

export default Page
