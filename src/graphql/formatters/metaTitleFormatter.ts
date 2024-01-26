import type {
  EventPageSeoFragment,
  PageDetailSeoFragment,
} from '../generated/graphql'

const seperator = '-'

export const metaTitleFormatter = (
  defaultTitle: string,
  data: PageDetailSeoFragment | EventPageSeoFragment | undefined
) => {
  if (data?.seo?.title) return data.seo.title
  if (data?.title === 'Homepage') return defaultTitle
  if (data?.__typename === 'ConcertRecord')
    return `${defaultTitle} ${seperator} Concerten ${seperator} ${data.title}`
  if (data?.title) return `${defaultTitle} ${seperator} ${data.title}`

  return defaultTitle
}
