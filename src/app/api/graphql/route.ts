import { NextResponse } from 'next/server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLError, graphql } from 'graphql'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const typeDefs = `
  type Query {
    publicRuntimeConfig: [PublicRuntimeConfig]
  }

  type PublicRuntimeConfig {
    googleMapsApiKey: String!
  }
`

const resolvers = {
  Query: {
    publicRuntimeConfig: () => [
      {
        googleMapsApiKey: String(publicRuntimeConfig.googleMapsApiKey),
      },
    ],
  },
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

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
