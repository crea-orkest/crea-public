'use client'
import { EventListItem } from 'components/eventListItem'
import type { Event as EventType } from '../../graphql/types/event'
import React from 'react'
import { getEvents } from '../../graphql/getters/getEvents'
import { useEventsMeta } from 'hooks/useEventsMeta'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'

export interface Props {
  initialSkip: number
}

export const LoadMoreEvents = ({ initialSkip }: Props) => {
  const [skip, setSkip] = React.useState(initialSkip)
  const [loading, setLoading] = React.useState(false)
  const [events, setEvents] = React.useState<(EventType | undefined)[]>([])
  const ref = React.useRef<HTMLDivElement>(null)
  const { numberOfEvents } = useEventsMeta()
  const [entry] = useIntersectionObserver({
    enabled: Boolean(numberOfEvents),
    ref,
  })

  React.useEffect(() => {
    const interval = 10
    if (loading) return
    if (!entry?.isIntersecting) return
    if (!numberOfEvents) return
    if (events.length === numberOfEvents - initialSkip) return
    if (skip > numberOfEvents) return
    setLoading(true)
    // TODO: abort signal to stop fetching
    getEvents({ skip, first: interval })
      .then(({ data }) => {
        if (!data) return
        setEvents((prev) => [...prev, ...data])
        setSkip((prev) => {
          return prev + interval
        })
      })
      .catch(() => {
        console.log('TODO: render an error')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [
    loading,
    skip,
    numberOfEvents,
    entry?.isIntersecting,
    events.length,
    initialSkip,
  ])

  return (
    <>
      {events.map((event) => {
        if (!event?.id) return
        return <EventListItem key={event.id} data={event} />
      })}

      {numberOfEvents ? (
        <div ref={ref}>
          <p className="text-small">
            {/* TODO: simplify/fix this logic */}
            {events.length + initialSkip} van {numberOfEvents} concerten
          </p>
        </div>
      ) : (
        <p className="text-small">...</p>
      )}
    </>
  )
}
