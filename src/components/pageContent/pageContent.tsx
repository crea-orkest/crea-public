import classNames from 'classnames'
import { type Event } from 'graphql/types/event'
import { type PageDetailFragment } from 'graphql/generated/graphql'
import { ContentField } from 'components/contentField'
import { TwoColumContentField } from 'components/twoColumContentField'
import { Header } from 'components/header'
import styles from './styles.module.scss'

export interface Props {
  pageTitle?: string
  items: Event['content'] | PageDetailFragment['content']
}

export const PageContent = ({ items, pageTitle }: Props) => {
  return items?.map((item, index) => {
    let header = null
    let pageContent = null

    if (index === 0 && item.__typename !== 'HeaderRecord') {
      header = (
        <Header key={`${item.id}-header`} title={pageTitle} tag="header" />
      )
    }
    if (item.__typename === 'TwoColumnRecord') {
      pageContent = (
        <section
          key={item.id}
          className={classNames(styles.defaultSpacing, 'content-layout')}
        >
          <TwoColumContentField item={item} />
        </section>
      )
    }
    if (item.__typename === 'TextBlockRecord') {
      pageContent = (
        <section
          key={item.id}
          className={classNames(styles.defaultSpacing, 'content-layout')}
        >
          <ContentField data={item.content} />
        </section>
      )
    }
    if (item.__typename === 'HeaderRecord') {
      pageContent = (
        <Header
          className={classNames({ [`${styles.headerSpacing}`]: index > 0 })}
          key={item.id}
          title={index === 0 ? pageTitle : undefined}
          body={item.body}
          cover={item.cover}
          tag={index > 0 ? 'section' : 'header'}
        />
      )
    }
    return (
      <>
        {header}
        {pageContent}
      </>
    )
  })
}
