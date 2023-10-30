import { DefaultPage } from 'components/defaultPage'
import { Event } from 'components/event'
import { FutureEvents } from 'components/futureEvents'
import { LoadMoreEvents } from 'components/loadMoreEvents'
import { getEvents } from 'graphql/getters/getEvents'

const Page = async () => {
  const first = 2
  const { data: eventData } = await getEvents({ skip: 0, first })

  return (
    <>
      <div className="content-layout">
        <FutureEvents skip={0} first={99} />

        <h2>Alle concerten</h2>

        {eventData?.map((event) => {
          if (!event?.id) return
          return <Event key={event.id} id={event.id} />
        })}

        <LoadMoreEvents initialSkip={first} />
      </div>

      <DefaultPage slug="concerten" />
    </>
  )
}

export default Page
