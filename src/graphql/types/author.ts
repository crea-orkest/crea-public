import type { Image } from './image'

export interface Author {
  id: string
  name: string
  description: string
  image?: Image
}
