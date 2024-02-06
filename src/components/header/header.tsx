import type { ElementType } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { isEmptyDocument } from 'datocms-structured-text-utils'
import type { HeaderFragment } from '../../graphql/generated/graphql'
import type { Image as CoverImage } from '../../graphql/types/image'
import { ContentField } from 'components/contentField'

import styles from './styles.module.scss'

interface Props {
  className?: string
  tag?: ElementType
  title?: string
  body?: HeaderFragment['body']
  cover?: CoverImage
}

export const Header = ({
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
        [`${styles.withImage}`]: cover?.url,
        [`${styles.withBody}`]: !isEmptyDocument(body),
      })}
    >
      <div className={classNames(styles.headerContent, 'content-layout')}>
        {title && (
          <h1
            className={classNames({
              'sr-only': body || (!body && cover?.url),
            })}
          >
            {title}
          </h1>
        )}
        <ContentField data={body} />
      </div>
      {cover?.url && (
        <div className={classNames(styles.headerImageWrapper)}>
          <Image
            className={classNames(styles.headerImage)}
            alt={cover.alt || ''}
            src={cover.url}
            width={cover.width || 100}
            height={cover.height || 100}
          />
          <div className={classNames(styles.background)} />
        </div>
      )}
    </HeaderTag>
  )
}
