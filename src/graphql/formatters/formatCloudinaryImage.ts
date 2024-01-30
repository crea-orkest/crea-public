import type { CloudinaryAsset, Image } from '../types/image'

export const formatCloudinaryImage = (
  asset: CloudinaryAsset | null
): Image | null => {
  if (!asset) return null
  return {
    id: `v${asset.version}/${asset.id}`,
    title: asset.alt?.en ?? '',
    description: asset.alt?.en ?? '',
    width: asset.width,
    height: asset.height,
    url: asset.secure_url,
  }
}
