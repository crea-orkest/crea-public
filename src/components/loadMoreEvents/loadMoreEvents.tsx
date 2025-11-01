import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import type { Event as EventType } from '../../graphql/types/event'
import { getEvents } from '../../graphql/getters/getEvents'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
import { EventListItem } from 'components/eventListItem'
import { Loader } from 'components/icons/loader'

import styles from './styles.module.scss'

export interface Props {
  initialSkip: number
  numberOfEvents: number
}

export const LoadMoreEvents = ({ initialSkip, numberOfEvents }: Props) => {
  const [skip, setSkip] = useState(initialSkip)
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState<(EventType | undefined)[]>([])
  const ref = useRef<HTMLDivElement>(null)
  const [entry] = useIntersectionObserver({
    enabled: Boolean(numberOfEvents),
    ref,
  })

  useEffect(() => {
    const interval = 20
    if (loading) return
    if (!entry?.isIntersecting) return
    if (!numberOfEvents) return
    if (events.length === numberOfEvents - initialSkip) return
    if (skip > numberOfEvents) return

    let cancelled = false
    const raf = requestAnimationFrame(() => {
      if (cancelled) return
      setLoading(true)
      // TODO: abort signal to stop fetching
      getEvents({ skip, first: interval })
        .then(({ data }) => {
          if (!data || cancelled) return
          setEvents((prev) => [...prev, ...data])
          setSkip((prev) => prev + interval)
        })
        .catch(() => {
          if (!cancelled) console.log('TODO: render an error')
        })
        .finally(() => {
          if (!cancelled) setLoading(false)
        })
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
    }
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
      {events.map((event, index) => {
        if (!event?.id) return
        return (
          <EventListItem
            className="content-layout--small"
            key={event.id}
            data={event}
            isLast={events.length - 1 === index}
          />
        )
      })}

      {numberOfEvents ? (
        <div ref={ref}>
          <p className={classNames(styles.loaderText, 'text-small')}>
            {loading && <Loader className={styles.loader} />}
            {Math.min(numberOfEvents, events.length + initialSkip)} van{' '}
            {numberOfEvents} concerten
          </p>
        </div>
      ) : (
        <p className={classNames(styles.loader, 'text-small')}>...</p>
      )}
    </>
  )
}
