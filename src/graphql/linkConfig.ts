const production: boolean =
  process.env.NEXT_PUBLIC_PRODUCTION === 'true' ? true : true

export const linkConfig = {
  url: 'https://graphql.datocms.com',
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
