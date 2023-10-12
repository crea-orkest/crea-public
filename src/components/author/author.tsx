import Image from 'next/image'
import React from 'react'
import { getAuthor } from 'graphql/getters/getAuthor'

export interface Props {
  id: string
}

export const Author: React.FC<Props> = async ({ id }) => {
  const { data } = await getAuthor({ id })
  if (!data) return null

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.description}</p>
      {data.image?.url && (
        <Image
          src={data.image.url}
          alt={data.image.description}
          height={data.image.height || undefined}
          width={data.image.width || undefined}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      )}
    </div>
  )
}
