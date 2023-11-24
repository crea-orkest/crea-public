import { Event } from 'components/event/event'
import { getEvents } from '../../graphql/getters/getEvents'

export interface Props {
  skip: number
  first: number
}

export const Events = async ({ skip, first }: Props) => {
  const { data } = await getEvents({ skip, first })
  if (!data) return null

  return (
    <section>
      {data.map((event) => {
        if (!event?.id) return
        return <Event key={event.id} id={event.id} />
      })}
    </section>
  )
}
