import type {
  EventPageSeoFragment,
  PageDetailSeoFragment,
} from '../generated/graphql'

const seperator = '|'

export const metaTitleFormatter = (
  defaultTitle: string,
  data: PageDetailSeoFragment | EventPageSeoFragment | undefined
) => {
  if (data?.seo?.title) return data.seo.title
  if (data?.title === 'Homepage') return defaultTitle
  if (data?.__typename === 'ConcertRecord')
    return `${data.title} ${seperator} Concerten ${seperator} ${defaultTitle}`
  if (data?.title) return `${data.title} ${seperator} ${defaultTitle}`

  return defaultTitle
}
