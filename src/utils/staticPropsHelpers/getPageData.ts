import { getEventPage } from 'graphql/getters/getEventPage'
import { getEventPageSeo } from 'graphql/getters/getEventPageSeo'
import { getGeneralInfo } from 'graphql/getters/getGeneralInfo'
import { getPage } from 'graphql/getters/getPage'
import { getPageSeo } from 'graphql/getters/getPageSeo'
import { getSiteMetadata } from 'graphql/getters/getSiteMetadata'

export async function getPageData(slug: string) {
  const { data: pageData } = await getPage({ slug })
  const { metadata } = await getSiteMetadata()
  const { data: pageSeo } = await getPageSeo({ slug }, metadata)
  const { data: generalData } = await getGeneralInfo()

  return {
    pageData: pageData ?? null,
    pageSeo: pageSeo ?? null,
    generalInfo: generalData?.general,
  }
}

export async function getEventData(slug: string) {
  const { data: eventData } = await getEventPage({ slug })
  const { metadata } = await getSiteMetadata()
  const { data: eventSeo } = await getEventPageSeo({ slug }, metadata)
  const { data: generalData } = await getGeneralInfo()

  return {
    eventData: eventData ?? null,
    eventSeo: eventSeo ?? null,
    generalInfo: generalData?.general ?? null,
  }
}
