import { DefaultPage } from 'components/defaultPage'
import { Event } from 'components/event'
import { FutureEvents } from 'components/futureEvents'
import { LoadMoreEvents } from 'components/loadMoreEvents'
import { getEvents } from 'graphql/getters/getEvents'
import { getPage } from 'graphql/getters/getPage'

const Page = async () => {
  const pageSlug = 'concerten'
  const first = 2
  const { data: eventData } = await getEvents({ skip: 0, first })
  const { data: pageData } = await getPage({ slug: pageSlug })
  return (
    <main>
      <div className="content-layout">
        <h1>{pageData?.title}</h1>
        <FutureEvents skip={0} first={99} />

        <h2>all concerts</h2>

        {eventData?.map((event) => {
          if (!event?.id) return
          return <Event key={event.id} id={event.id} />
        })}

        <LoadMoreEvents initialSkip={first} />
      </div>

      <DefaultPage slug={pageSlug} />
    </main>
  )
}

export default Page
