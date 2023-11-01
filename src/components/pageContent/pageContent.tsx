import React from 'react'
import classNames from 'classnames'
import { type Event } from 'graphql/types/event'
import { type PageDetailFragment } from 'graphql/generated/graphql'
import { ContentField } from 'components/contentField'
import { TwoColumContentField } from 'components/twoColumContentField'
import { Header } from 'components/header'
import styles from './styles.module.scss'

export interface Props {
  items: Event['content'] | PageDetailFragment['content']
}

export const PageContent = ({ items }: Props) => {
  return items?.map((item, index) => {
    if (item.__typename === 'TwoColumnRecord') {
      return (
        <section
          key={item.id}
          className={classNames(styles.defaultSpacing, 'content-layout')}
        >
          <TwoColumContentField item={item} />
        </section>
      )
    }
    if (item.__typename === 'TextBlockRecord') {
      return (
        <section
          key={item.id}
          className={classNames(styles.defaultSpacing, 'content-layout')}
        >
          <ContentField data={item.content} />
        </section>
      )
    }
    if (item.__typename === 'HeaderRecord') {
      return (
        <Header
          className={classNames({ [`${styles.headerSpacing}`]: index > 0 })}
          key={item.id}
          data={item}
          tag={index > 0 ? 'section' : 'header'}
        />
      )
    }
    return null
  })
}
