import { type Metadata } from 'graphql/formatters/metadataFormatter'
import { type Event } from 'graphql/types/event'
import {
  type GetPageQuery,
  type GetGeneralInfoQuery,
} from 'graphql/generated/graphql'
import { getEventPage } from 'graphql/getters/getEventPage'
import { getEventPageSeo } from 'graphql/getters/getEventPageSeo'
import { getGeneralInfo } from 'graphql/getters/getGeneralInfo'
import { getPage } from 'graphql/getters/getPage'
import { getPageSeo } from 'graphql/getters/getPageSeo'
import { getSiteMetadata } from 'graphql/getters/getSiteMetadata'

export async function getPageData(slug: string): Promise<{
  pageData: GetPageQuery['page'] | null
  pageSeo: Metadata | null
  generalInfo: GetGeneralInfoQuery['general'] | null
}> {
  console.log('Getting page data for slug:', slug)
  const { data: pageData } = await getPage({ slug })
  const { metadata } = await getSiteMetadata()
  const { data: pageSeo } = await getPageSeo({ slug }, metadata)
  const { data: generalData } = await getGeneralInfo()

  return {
    pageData: pageData ?? null,
    pageSeo: pageSeo ?? null,
    generalInfo: generalData?.general ?? null,
  }
}

export async function getEventData(slug: string): Promise<{
  eventData: Event | null
  eventSeo: Metadata | null
  generalInfo: GetGeneralInfoQuery['general'] | null
}> {
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
