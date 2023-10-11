import { type NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'

// e.g a webhook to `your-website.com/api/revalidate?tag=content&secret=super-secret
export function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const tag = request.nextUrl.searchParams.get('tag')

  if (secret !== process.env.SECRET_TOKEN) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 })
  }

  if (!tag) {
    return Response.json({ message: 'Missing tag param' }, { status: 400 })
  }

  revalidateTag(tag)

  return Response.json({ revalidated: true, now: Date.now() })
}

export function GET() {
  Response.json({ data: 'revalidate endpoint' })
}
