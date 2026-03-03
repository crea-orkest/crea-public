import { getUrl } from './getUrl'

const production: boolean =
  process.env.NEXT_PUBLIC_PRODUCTION === 'true' ? true : false

export const linkConfig = {
  url: getUrl(),
  headers: {
    'Content-Language': 'nl-NL',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${
      production
        ? process.env.PROD_DATOCMS_READONLY_API_TOKEN
        : process.env.DEV_DATOCMS_READONLY_API_TOKEN
    }`,
    'X-Environment': 'main',
    'X-Exclude-Invalid': 'true',
  },
  next: { revalidate: 60, tags: ['content'] },
}
