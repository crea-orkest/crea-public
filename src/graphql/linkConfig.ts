const production: boolean =
  process.env.NEXT_PUBLIC_PRODUCTION === 'true' ? true : false

function getToken() {
  const datoCmsReadOnlyToken = production
    ? process.env['NEXT_PUBLIC_PROD_DATOCMS_READONLY_API_TOKEN']
    : process.env['NEXT_PUBLIC_DEV_DATOCMS_READONLY_API_TOKEN']
  return datoCmsReadOnlyToken
}

export const linkConfig = {
  url: 'https://graphql.datocms.com',
  headers: {
    'Content-Language': 'nl-NL',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${getToken()}`,
    'X-Environment': 'main',
    'X-Exclude-Invalid': 'true',
  },
  next: { revalidate: 60, tags: ['content'] },
}
