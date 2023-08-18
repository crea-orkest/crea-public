import React from "react";
import { getAuthors } from "graphql/getters/getAuthors";
import { getPages } from "graphql/getters/getPages";
import { getPage } from "graphql/getters/getPage";
import { getEvents } from "graphql/getters/getEvents";
import { getEvent } from "graphql/getters/getEvent";
import { Events } from "components/events/events";
import { getAuthor } from "graphql/getters/getAuthor";
import { Author } from "components/author/author";
import { Concert } from "components/concert/concert";
import { getLocation } from "graphql/getters/getLocation";
import { getLocations } from "graphql/getters/getLocations";

const Page = async () => {
  const author = await getAuthor({ id: "186234305" });
  const data = await getAuthors({ first: 10, skip: 0 });
  const pages = await getPages({ first: 10, skip: 0 });
  const page = await getPage({ slug: "contact" });
  const events = await getEvents({ first: 10, skip: 0 });
  const event = await getEvent({ id: "186970038" });
  const location = await getLocation({ id: "188451657" });
  const locations = await getLocations({ first: 10, skip: 0 });
  return (
    <main>
      <h1>Page</h1>
      <p>hello world</p>
      <p>author</p>
      <code>{JSON.stringify(author)}</code>
      <Author id={author.data?.id} />
      <hr />
      <p>authors</p>
      <code>{JSON.stringify(data)}</code>
      <hr />
      <p>pages</p>
      <code>{JSON.stringify(pages)}</code>
      <hr />
      <p>page</p>
      <code>{JSON.stringify(page)}</code>
      <hr />
      <p>events</p>
      <code>{JSON.stringify(events)}</code>
      <Events />
      <hr />
      <p>event</p>
      <code>{JSON.stringify(event)}</code>
      <Concert id={"186970038"} />
      <hr />
      <p>location</p>
      <code>{JSON.stringify(location)}</code>
      <hr />

      <p>locations</p>
      <code>{JSON.stringify(locations)}</code>
      <hr />
    </main>
  );
};

export default Page;
