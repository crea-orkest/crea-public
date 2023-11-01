import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { type HeaderFragment } from 'graphql/generated/graphql'
import { ContentField } from 'components/contentField'
import Image from 'next/image'

interface Props {
  data: HeaderFragment
}

export const Header: React.FC<Props> = ({ data }: Props) => {
  return (
    <header className={classNames(styles.header)}>
      <ContentField data={data.body} />
      {data.cover?.item?.url && (
        <Image
          alt={data.cover.item?.alt || data.cover.item?.title || ''}
          src={data.cover?.item?.url}
          width={100}
          height={100}
        />
      )}
    </header>
  )
}
