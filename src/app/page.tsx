import { DefaultPage } from 'components/defaultPage'
import type { Metadata } from 'next'
import React from 'react'
import { getPageSeo } from 'graphql/getters/getPageSeo'

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: 'homepage' })

  return data
}

const Page = () => {
  return <DefaultPage slug="homepage" />
}

export default Page
