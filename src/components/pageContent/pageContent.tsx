import { ContentField } from 'components/contentField'
import { type Event } from 'graphql/types/event'
import { type PageDetailFragment } from 'graphql/generated/graphql'
import React from 'react'
import { TwoColumContentField } from 'components/twoColumContentField'
import classNames from 'classnames'
import styles from './styles.module.scss'

export interface Props {
  items: Event['content'] | PageDetailFragment['content']
}

export const PageContent = ({ items }: Props) => {
  return items?.map((item) => {
    if ('leftContent' in item || 'rightContent' in item) {
      return (
        <section key={item.id} className={classNames(styles.defaultSpacing)}>
          <TwoColumContentField item={item} />
        </section>
      )
    }
    if ('content' in item) {
      return (
        <section key={item.id} className={classNames(styles.defaultSpacing)}>
          <ContentField data={item.content} />
        </section>
      )
    }
    return null
  })
}
