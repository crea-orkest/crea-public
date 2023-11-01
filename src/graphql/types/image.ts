import type { Scalars } from 'graphql/generated/graphql'

interface CloudinaryUser {
  type?: 'string' | null
  id?: 'string' | null
}

interface CloudinaryDescription {
  en?: string | null
}

export interface CloudinaryImage {
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

export const isOfTypeCloudinaryImage = (
  cloudinaryImage?: unknown
): cloudinaryImage is CloudinaryImage => {
  if (!cloudinaryImage) return false
  if (typeof cloudinaryImage !== 'object') return false

  if (
    'resource_type' in cloudinaryImage &&
    'type' in cloudinaryImage &&
    'width' in cloudinaryImage &&
    'height' in cloudinaryImage &&
    'id' in cloudinaryImage &&
    'format' in cloudinaryImage &&
    'secure_url' in cloudinaryImage &&
    'version' in cloudinaryImage
  )
    return true

  return false
}
