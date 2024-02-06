import classNames from 'classnames'
import type { DocumentFragment } from '../../graphql/generated/graphql'
import { formatCloudinaryDocument } from '../../graphql/formatters/formatCloudinaryDocument'
import { isOfTypeCloudinaryAsset } from '../../graphql/types/image'
import { Button } from 'components/button'
import { ArrowDown } from 'components/icons/arrow-down'
import { formatBytes } from 'utils/formatBytes'

import styles from './styles.module.scss'

interface Props {
  record: DocumentFragment
}

export const DocumentBlock = ({ record }: Props) => {
  if (!record.cloudinaryDocument) return null
  const asset = formatCloudinaryDocument(
    isOfTypeCloudinaryAsset(record.cloudinaryDocument)
      ? record.cloudinaryDocument
      : undefined
  )
  if (!asset?.url) return null
  return (
    <p className={styles.root}>
      <span className={classNames(styles.title, 'h4')}>{asset.alt}</span>
      <span className={styles.download}>
        <Button
          href={asset.url}
          download
          target="_blank"
          leftIcon={<ArrowDown />}
          suffix={asset.bytes ? `(${formatBytes(asset.bytes, 0)})` : ''}
        >
          Download document
        </Button>
      </span>
    </p>
  )
}
