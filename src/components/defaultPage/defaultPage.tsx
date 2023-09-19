import { Navigation } from 'components/navigation'
import React from 'react'
import { getPage } from 'graphql/getters/getPage'
import { notFound } from 'next/navigation'
import styles from './styles.module.scss'

export interface Props {
  slug: string
}

export const DefaultPage = async ({ slug }: Props) => {
  const { data } = await getPage({ slug })
  if (!data) return notFound()

  return (
    <>
      <Navigation />
      <article className={styles.article}>
        <h1>{data.title}</h1>

        <code>
          <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </code>
      </article>
    </>
  )
}
