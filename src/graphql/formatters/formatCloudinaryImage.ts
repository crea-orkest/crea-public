import type { CloudinaryAsset, Image } from 'graphql/types/image'

export const formatCloudinaryImage = (
  image: CloudinaryAsset | undefined
): Image | undefined => {
  if (!image?.id) return
  if (!image.version) return
  if (!image?.secure_url) return

  return {
    id: `v${image.version}/${image.id}`,
    title: image.alt?.en ?? '',
    description: image.alt?.en ?? '',
    width: image.width,
    height: image.height,
    url: image.secure_url,
  }
}
