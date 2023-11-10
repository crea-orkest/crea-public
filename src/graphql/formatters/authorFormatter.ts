import type { Author } from '../types/author'
import type { AuthorFragment } from 'graphql/generated/graphql'
import { formatCloudinaryImage } from './formatCloudinaryImage'
import { isOfTypeCloudinaryAsset } from 'graphql/types/image'

export const authorFormatter = (person: AuthorFragment): Author => ({
  id: person.id,
  name: person.name ?? '',
  description: person.role ?? '',
  image: formatCloudinaryImage(
    isOfTypeCloudinaryAsset(person.image) ? person.image : undefined
  ),
})
