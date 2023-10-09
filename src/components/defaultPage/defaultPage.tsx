import { ContentField } from 'components/contentField'
import React from 'react'
import { TwoColumContentField } from 'components/twoColumContentField'
import classNames from 'classnames'
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
    <article className={classNames(styles.article)}>
      <h2>{data.title}</h2>

      {data.content.map((item) => {
        if ('leftContent' in item || 'rightContent' in item) {
          return <TwoColumContentField key={item.id} item={item} />
        }
        if ('content' in item) {
          return <ContentField key={item.id} data={item.content} />
        }
        return null
      })}
    </article>
  )
}
