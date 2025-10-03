import type {
  EventPageSeoFragment,
  PageDetailSeoFragment,
} from '../generated/graphql'

const seperator = '|'

export const metaTitleFormatter = (
  defaultTitle: string,
  data: PageDetailSeoFragment | EventPageSeoFragment | undefined | null
) => {
  if (typeof data?.seo?.title === 'string') return data.seo.title
  if (data?.title === 'Homepage') return defaultTitle
  if (data?.__typename === 'ConcertRecord' && typeof data?.title === 'string')
    return `${data.title} ${seperator} Concerten ${seperator} ${defaultTitle}`
  if (data?.title) return `${data.title} ${seperator} ${defaultTitle}`

  return defaultTitle
}
