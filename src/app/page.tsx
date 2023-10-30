import { DefaultPage } from 'components/defaultPage'
import React from 'react'
import { getPageSeo } from 'graphql/getters/getPageSeo'
import type { Metadata, Viewport } from 'next'

const homepageSlug = 'homepage'
export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: homepageSlug })
  return data
}

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}

const Page = () => {
  return <DefaultPage slug={homepageSlug} />
}

export default Page
