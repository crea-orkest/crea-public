import { getUrl } from './getUrl'

const production: boolean = process.env.production === 'true' ? true : false

export const linkConfig = {
  url: getUrl({ env: production ? 'current' : 'dev' }),
  headers: {
    'Content-Language': 'nl-NL',
    'content-type': 'application/json',
    'apollographql-client-name': 'crea-public',
    'apollographql-client-version': 'specific-version', // TODO: comit hash?
  },
  next: { revalidate: 60, tags: ['content'] },
}
