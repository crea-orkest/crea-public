import { type NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'

const CMS_WEBHOOK_URL = 'https://webhooks.datocms.com/Vt1R8r6BD5/deploy-results'

// e.g a webhook to `your-website.com/api/revalidate?tag=content&secret=super-secret
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const tag = request.nextUrl.searchParams.get('tag')
  const errorStatus = 'error'
  const successStatus = 'success'

  if (secret !== process.env.SECRET_TOKEN) {
    await fetch(CMS_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: errorStatus }),
    })
    return Response.json(
      { status: errorStatus, message: 'Missing secret' },
      { status: 401 }
    )
  }

  if (!tag) {
    await fetch(CMS_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: errorStatus }),
    })
    return Response.json(
      { status: errorStatus, message: 'Missing tag' },
      { status: 400 }
    )
  }

  try {
    revalidateTag(tag)
    const res = await fetch(CMS_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: successStatus }),
    })

    if (!res.ok) throw new Error('failed response')

    return Response.json({
      revalidated: true,
      now: Date.now(),
      status: successStatus,
    })
  } catch (error) {
    return Response.json({
      revalidated: false,
      status: errorStatus,
      message: error instanceof Error ? error.message : 'no idea',
    })
  }
}

export function GET() {
  return Response.json({ data: 'revalidate endpoint' })
}
