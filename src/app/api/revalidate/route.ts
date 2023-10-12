import { type NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'

const CMS_WEBHOOK_URL = 'https://webhooks.datocms.com/Vt1R8r6BD5/deploy-results'

// e.g a webhook to `your-website.com/api/revalidate?tag=content&secret=super-secret
export function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const tag = request.nextUrl.searchParams.get('tag')

  if (secret !== process.env.SECRET_TOKEN) {
    const status = 'error'
    fetch(CMS_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.parse(status),
    })
    return Response.json({ status }, { status: 401 })
  }

  if (!tag) {
    const status = 'Missing tag param'
    fetch(CMS_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.parse(status),
    })
    return Response.json({ status }, { status: 400 })
  }

  const status = 'success'
  fetch(CMS_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.parse(status),
  })

  revalidateTag(tag)

  return Response.json({ revalidated: true, now: Date.now() })
}

export function GET() {
  Response.json({ data: 'revalidate endpoint' })
}
