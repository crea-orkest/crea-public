import type {
  EventPageSeoFragment,
  PageDetailSeoFragment,
} from 'graphql/generated/graphql'

const defaultTitle = 'Het CREA Orkest'

export const metaTitleFormatter = (
  data: PageDetailSeoFragment | EventPageSeoFragment | undefined
) => {
  if (data?.seo?.title) return data.seo.title
  if (data?.title === 'homepage') return defaultTitle
  if (data?.title) return `${defaultTitle} | ${data.title}`

  return defaultTitle
}
