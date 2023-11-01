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
  data: HeaderFragment
}

export const Header: React.FC<Props> = ({
  className,
  tag = 'header',
  data,
}: Props) => {
  const HeaderTag = tag

  return (
    <HeaderTag
      className={classNames(className, styles.header, 'with-background', {
        [`${styles.withImage}`]: data.cover?.item?.url,
      })}
    >
      <div className={classNames(styles.headerContent, 'content-layout')}>
        <ContentField data={data.body} />
      </div>
      {data.cover?.item?.url && (
        <div className={classNames(styles.headerImageWrapper)}>
          <Image
            className={classNames(styles.headerImage)}
            alt={data.cover.item?.alt || data.cover.item?.title || ''}
            src={data.cover?.item?.url}
            width={data.cover?.item.width || 100}
            height={data.cover?.item.height || 100}
          />
          <div className={classNames(styles.background)} />
        </div>
      )}
    </HeaderTag>
  )
}
