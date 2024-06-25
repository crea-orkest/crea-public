import type { LocationItemFragment } from 'graphql/generated/graphql'

export interface Location {
  id: string
  title?: string
  address?: string
  lat?: number
  lng?: number
  startTime?: LocationItemFragment['dateTime']
  ticketLink?: LocationItemFragment['ticketLink']
  ticketsText?: LocationItemFragment['ticketsText']
  noTicketsText?: LocationItemFragment['noTicketsText']
  afterTicketsText?: LocationItemFragment['afterTicketsText']
}
