import React from 'react'
import type { ElementType } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { type HeaderFragment } from 'graphql/generated/graphql'
import { ContentField } from 'components/contentField'
import Image from 'next/image'

interface Props {
  className?: string
  tag?: ElementType
  title?: string
  body?: HeaderFragment['body']
  cover?: HeaderFragment['cover']
}

export const Header: React.FC<Props> = ({
  title,
  className,
  tag = 'header',
  body,
  cover,
}: Props) => {
  const HeaderTag = tag

  return (
    <HeaderTag
      className={classNames(className, styles.header, 'with-background', {
        [`${styles.withImage}`]: cover?.item?.url,
      })}
    >
      <div className={classNames(styles.headerContent, 'content-layout')}>
        {title && <h1 className={classNames({ 'sr-only': body })}>{title}</h1>}
        <ContentField data={body} />
      </div>
      {cover?.item?.url && (
        <div className={classNames(styles.headerImageWrapper)}>
          <Image
            className={classNames(styles.headerImage)}
            alt={cover.item?.alt || cover.item?.title || ''}
            src={cover?.item?.url}
            width={cover?.item.width || 100}
            height={cover?.item.height || 100}
          />
          <div className={classNames(styles.background)} />
        </div>
      )}
    </HeaderTag>
  )
}
