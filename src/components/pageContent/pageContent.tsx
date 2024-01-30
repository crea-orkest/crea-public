import { Fragment } from 'react'
import classNames from 'classnames'
import type { PageDetailFragment } from 'graphql/generated/graphql'
import type { Event } from 'graphql/types/event'
import { ContentField } from 'components/contentField'
import { TwoColumContentField } from 'components/twoColumContentField'
import { Header } from 'components/header'
import styles from './styles.module.scss'

export interface Props {
  sectionClassName?: string
  pageTitle?: string
  items?: Event['content'] | PageDetailFragment['content']
}

export const PageContent = ({ sectionClassName, items, pageTitle }: Props) => {
  if (!items && pageTitle)
    return <Header title={pageTitle} tag="header" className={styles.header} />
  if (!items && !pageTitle) return null

  return items?.map((item, index) => {
    let header = null
    let pageContent = null

    if (index === 0 && item.__typename !== 'HeaderRecord' && pageTitle) {
      header = (
        <Header title={pageTitle} tag="header" className={styles.header} />
      )
    }
    if (item.__typename === 'TwoColumnRecord') {
      pageContent = (
        <section
          className={classNames(styles.defaultSpacing, sectionClassName)}
        >
          <TwoColumContentField item={item} />
        </section>
      )
    }
    if (item.__typename === 'TextBlockRecord') {
      pageContent = (
        <section
          className={classNames(styles.defaultSpacing, sectionClassName)}
        >
          <ContentField data={item.content} />
        </section>
      )
    }
    if (item.__typename === 'HeaderRecord') {
      pageContent = (
        <Header
          className={classNames({
            [`${styles.headerSpacing}`]: index > 0,
            [`${styles.header}`]: index === 0,
          })}
          title={index === 0 ? pageTitle : undefined}
          body={item.body}
          cover={item.cover}
          tag={index > 0 ? 'section' : 'header'}
        />
      )
    }
    return (
      <Fragment key={item.id}>
        {header}
        {pageContent}
      </Fragment>
    )
  })
}
