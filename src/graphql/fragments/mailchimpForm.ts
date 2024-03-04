import { gql } from '@urql/core'
import { identifiable } from './identifiable'

export const mailchimpForm = gql`
  fragment mailchimpForm on MailchimpFormRecord {
    ...identifiable
    title
  }
  ${identifiable}
`
