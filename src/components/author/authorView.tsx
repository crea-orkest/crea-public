import type { Author as AuthorType } from 'graphql/types/author'
import Image from 'next/image'
import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export interface Props {
  data: AuthorType
}

export const AuthorView: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className={classNames(styles.author)}>
      <ul className={classNames(styles.author__metadata)}>
        <li className={classNames(styles.author__name)}>
          <strong>{data.name}</strong>
        </li>
        <li className={classNames(styles.author__description)}>
          {data.description}
        </li>
      </ul>
      {data.image?.url && (
        <Image
          className={classNames(styles.author__profilePicture)}
          src={data.image.url}
          alt={data.image.description}
          height={64}
          width={64}
        />
      )}
    </div>
  )
}
