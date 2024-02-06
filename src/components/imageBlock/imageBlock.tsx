import React from 'react'
import type { ImageFragment } from '../../graphql/generated/graphql'
import { isOfTypeCloudinaryAsset } from '../../graphql/types/image'
import Image from 'next/image'
import { formatCloudinaryImage } from '../../graphql/formatters/formatCloudinaryImage'

import styles from './styles.module.scss'

interface Props {
  record: ImageFragment
}

export const ImageBlock: React.FC<Props> = ({ record }: Props) => {
  if (!record.cloudinaryImage) return null
  const asset = formatCloudinaryImage(
    isOfTypeCloudinaryAsset(record.cloudinaryImage)
      ? record.cloudinaryImage
      : undefined
  )
  if (!asset?.url) return null
  return (
    <Image
      className={styles.image}
      src={asset.url}
      alt={asset.alt}
      height={asset.height}
      width={asset.width}
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  )
}
