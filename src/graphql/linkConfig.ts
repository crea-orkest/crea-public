const production: boolean =
  process.env.NEXT_PUBLIC_PRODUCTION === 'true' ? true : false

function getToken() {
  const datoCmsReadOnlyToken = production
    ? process.env['PROD_DATOCMS_READONLY_API_TOKEN']
    : process.env['DEV_DATOCMS_READONLY_API_TOKEN']
  if (!datoCmsReadOnlyToken) {
    throw new Error(
      'DATO_CMS_READ_ONLY_TOKEN environment variable should be set.'
    )
  }
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
