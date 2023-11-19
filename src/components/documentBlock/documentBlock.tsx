import React from 'react'
import classNames from 'classnames'
import type { DocumentFragment } from 'graphql/generated/graphql'
import { formatCloudinaryDocument } from 'graphql/formatters/formatCloudinaryDocument'
import { isOfTypeCloudinaryAsset } from 'graphql/types/image'
import { Pdf } from 'components/icons/pdf'
import { formatBytes } from 'utils/formatBytes'

import styles from './styles.module.scss'

interface Props {
  record: DocumentFragment
}

export const DocumentBlock: React.FC<Props> = ({ record }: Props) => {
  if (!record.document?.title) return null
  const asset = formatCloudinaryDocument(
    isOfTypeCloudinaryAsset(record.document?.asset)
      ? record.document?.asset
      : undefined
  )
  if (!asset?.url) return null
  return (
    <p className={styles.container}>
      <span className={classNames(styles.title, 'h4')}>
        {record.document.title}
      </span>
      <span className={styles.download}>
        <Pdf />
        <a href={asset.url}>
          Download document {asset.bytes && `(${formatBytes(asset.bytes, 0)})`}
        </a>
      </span>
    </p>
  )
}
