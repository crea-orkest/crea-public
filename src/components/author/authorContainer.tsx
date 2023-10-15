import { AuthorView } from './authorView'
import React from 'react'
import { getAuthor } from 'graphql/getters/getAuthor'

export interface Props {
  id: string
}

export const AuthorContainer: React.FC<Props> = async ({ id }) => {
  const { data } = await getAuthor({ id })
  if (!data) return null

  return <AuthorView data={data} />
}
