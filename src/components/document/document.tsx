import { Pdf } from 'components/icons/pdf'
import type { DocumentFragment } from 'graphql/generated/graphql'
import { formatCloudinaryDocument } from 'graphql/formatters/formatCloudinaryDocument'
import { isOfTypeCloudinaryAsset } from 'graphql/types/image'
import React from 'react'

interface Props {
  record: DocumentFragment
}

export const Document: React.FC<Props> = ({ record }: Props) => {
  if (!record.document?.title) return null
  const asset = formatCloudinaryDocument(
    isOfTypeCloudinaryAsset(record.document?.asset)
      ? record.document?.asset
      : undefined
  )
  if (!asset?.url) return null
  return (
    <p>
      <Pdf />
      <a href={asset.url}>{record.document.title}</a>
    </p>
  )
}
