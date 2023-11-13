import React from 'react'
import type { ImageFragment } from 'graphql/generated/graphql'
import { isOfTypeCloudinaryAsset } from 'graphql/types/image'
import Image from 'next/image'
import { formatCloudinaryImage } from 'graphql/formatters/formatCloudinaryImage'

interface Props {
  record: ImageFragment
}

export const ImageBlock: React.FC<Props> = ({ record }: Props) => {
  if (!record.item?.title) return null
  const asset = formatCloudinaryImage(
    isOfTypeCloudinaryAsset(record.item?.asset) ? record.item?.asset : undefined
  )
  if (!asset?.url) return null
  return (
    <Image
      src={asset.url}
      alt={record.item.title}
      height={asset.height}
      width={asset.width}
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  )
}
