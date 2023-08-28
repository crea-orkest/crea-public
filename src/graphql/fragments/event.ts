import { author } from './author'
import { eventMetadata } from './eventMetadata'
import { gql } from '@urql/core'

import { link } from './link'
import { tag } from './tag'

export const event = gql`
  fragment event on ConcertRecord {
    ...eventMetadata
    _seoMetaTags {
      ...tag
    }
    link {
      ...link
    }
    persons {
      ...author
    }
  }
  ${eventMetadata}
  ${link}
  ${tag}
  ${author}
`
