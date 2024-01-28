import type { PageLinkFragment } from 'graphql/generated/graphql'
import type { Event } from 'graphql/types/event'
import type { GetServerSidePropsContext } from 'next'
import { getEvents } from 'graphql/getters/getEvents'
import { getEventsMeta } from 'graphql/getters/getEventsMeta'
import { getPages } from 'graphql/getters/getPages'
import { getPagesMeta } from 'graphql/getters/getPagesMeta'
import { slugFormatter } from 'utils/slugFormatter'

const URL = 'https://www.creaorkest.org'
const defaultFirst = 100

type Route = {
  url: string
  lastModified: string
}

function generateSiteMap(routes: Route[]) {
  console.log(routes)
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(({ url, lastModified }) => {
          return `
        <url>
          <loc>${url}</loc>
          <lastmod>${lastModified}</lastmod>
        </url>
      `
        })
        .join('')}
    </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const pagesMeta = await getPagesMeta()
  const eventsMeta = await getEventsMeta()

  const pageCount = pagesMeta.data?.count || 0
  const eventCount = eventsMeta.data?.count || 0

  const pages: (PageLinkFragment | Event)[] = []

  for (let step = 0; step < pageCount; step += defaultFirst) {
    const { data } = await getPages({ skip: step, first: defaultFirst })

    data?.map((item) => {
      if (!item.slug || item.slug === '404') return

      item.slug = slugFormatter({ slug: item.slug })
      pages.push(item)
    })
  }

  for (let step = 0; step < eventCount; step += defaultFirst) {
    const { data } = await getEvents({ skip: step, first: defaultFirst })

    data?.map((item) => {
      if (!item || !item.slug) return

      item.slug = slugFormatter({
        slug: item.slug,
        prefix: '/concerten',
      })
      pages.push(item)
    })
  }

  const routes: Route[] = pages.map(({ slug, _updatedAt }) => ({
    url: `${URL}${slug}`,
    lastModified: new Date(_updatedAt).toISOString(),
  }))

  // // We generate the XML sitemap with the routes data
  const sitemap = generateSiteMap(routes)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
