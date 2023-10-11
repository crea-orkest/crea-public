import { NextResponse } from 'next/server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLError, graphql } from 'graphql'

// TODO: create a labels solution
const typeDefs = `
  type Query {
    users: [User]
  }

  type User {
    username: String!
    avatar: String!
  }
`

const resolvers = {
  Query: {
    users: () => [
      {
        username: 'notrab',
      },
      {
        username: 'rauchg',
      },
    ],
  },
  User: {
    avatar: (root: { username: string }) =>
      `https://github.com/${root.username}.png`,
  },
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

export function GET(request: Request) {
  NextResponse.json({ name: 'test' })
  return NextResponse.json({
    name: `Hello, from ${request.url} I'm an Edge Function!`,
  })
}

export async function POST(request: Request) {
  const data = await request.json()

  try {
    const result = await graphql({
      schema,
      source: data.query,
    })

    return NextResponse.json(result)
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(new GraphQLError(error.message))
    }
    return NextResponse.json(new GraphQLError('random error'))
  }
}
