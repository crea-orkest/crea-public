import React from 'react'
import type { ElementType } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { type HeaderFragment } from 'graphql/generated/graphql'
import { ContentField } from 'components/contentField'
import Image from 'next/image'
import { formatCloudinaryImage } from 'graphql/formatters/formatCloudinaryImage'
import { isOfTypeCloudinaryAsset } from 'graphql/types/image'

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

  const asset = formatCloudinaryImage(
    isOfTypeCloudinaryAsset(cover?.asset) ? cover?.asset : undefined
  )

  return (
    <HeaderTag
      className={classNames(className, styles.header, 'with-background', {
        [`${styles.withImage}`]: asset?.url,
      })}
    >
      <div className={classNames(styles.headerContent, 'content-layout')}>
        {title && <h1 className={classNames({ 'sr-only': body })}>{title}</h1>}
        <ContentField data={body} />
      </div>
      {asset?.url && (
        <div className={classNames(styles.headerImageWrapper)}>
          <Image
            className={classNames(styles.headerImage)}
            alt={cover?.title || asset.title || ''}
            src={asset.url}
            width={asset.width || 100}
            height={asset.height || 100}
          />
          <div className={classNames(styles.background)} />
        </div>
      )}
    </HeaderTag>
  )
}
