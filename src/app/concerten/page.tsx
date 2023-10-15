import { Event } from 'components/event'
import { FutureEvents } from 'components/futureEvents'
import { LoadMoreEvents } from 'components/loadMoreEvents'
import { getEvents } from 'graphql/getters/getEvents'

const Page = async () => {
  const first = 2
  const { data } = await getEvents({ skip: 0, first })
  return (
    <main>
      <h1>all future concerts</h1>
      <FutureEvents skip={0} first={99} />

      <h1>all concerts</h1>

      {data?.map((event) => {
        if (!event?.id) return
        return <Event key={event.id} id={event.id} />
      })}

      <LoadMoreEvents initialSkip={first} />
    </main>
  )
}

export default Page
