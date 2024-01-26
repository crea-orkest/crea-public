import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Event } from 'graphql/types/event'
import { getFutureEvents } from '../../graphql/getters/getFutureEvents'
import { EventListItem } from 'components/eventListItem'

export const FutureEvents = () => {
  const [futureEvents, setFutureEvents] = useState<(Event | undefined)[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getEvents = async () => {
      try {
        setIsLoading(true)
        const { data } = await getFutureEvents({ skip: 0, first: 3 })

        if (data && data.length > 0) {
          setFutureEvents(data)
        }
      } finally {
        setIsLoading(false)
      }
    }

    getEvents()
  }, [])

  if (!isLoading && futureEvents.length === 0) {
    return (
      <>
        <h2>Komende concerten</h2>
        <p>
          Houd de website in de gaten om up to date te blijven over volgende
          concerten.
        </p>
        <Link href="/concerten">Bekijk al onze vorige concerten</Link>
      </>
    )
  }

  if (isLoading) {
    return <p>Aankomende concerten aan het laden...</p>
  }

  return (
    <div>
      {futureEvents.map((event, index) => {
        if (!event?.id) return null
        return (
          <EventListItem
            className="content-layout--small"
            key={event.id}
            data={event}
            size="large"
            isLast={futureEvents.length - 1 === index}
          />
        )
      })}
    </div>
  )
}
