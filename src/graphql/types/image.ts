import type { Scalars } from 'graphql/generated/graphql'

interface CloudinaryUser {
  type?: 'string' | null
  id?: 'string' | null
}

interface CloudinaryDescription {
  en?: string | null
}

export interface CloudinaryAsset {
  bytes?: number
  created_at?: Scalars['DateTime'] | null
  created_by?: CloudinaryUser | null
  duration?: string | null
  format?: string
  width?: number
  height?: number
  metadata?: unknown[]
  public_id?: string
  id?: string
  resource_type?: string
  secure_url?: string
  tags?: []
  type?: string
  uploaded_by?: null
  url?: string
  version?: number
  alt?: CloudinaryDescription
}

export interface Image {
  id: string
  title: string
  description: string
  width?: number
  height?: number
  url: string
}

export const isOfTypeCloudinaryAsset = (
  asset?: unknown
): asset is CloudinaryAsset => {
  if (!asset) return false
  if (typeof asset !== 'object') return false

  if (
    'resource_type' in asset &&
    'type' in asset &&
    'width' in asset &&
    'height' in asset &&
    'id' in asset &&
    'format' in asset &&
    'secure_url' in asset &&
    'version' in asset
  )
    return true

  return false
}
