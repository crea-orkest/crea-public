import React from "react";
import { getAuthors } from "graphql/getAuthors";
import { getPages } from "graphql/getPages";
import { getPage } from "graphql/getPage";
import { getEvents } from "graphql/getEvents";
import { getEvent } from "graphql/getEvent";
import { Events } from "components/events/events";

const Page = async () => {
  const data = await getAuthors({ first: 100, skip: 0 });
  const pages = await getPages({ first: 100, skip: 0 });
  const page = await getPage({ slug: "contact" });
  const events = await getEvents({ first: 100, skip: 0 });
  const event = await getEvent({ id: "186970038" });

  return (
    <main>
      <h1>Page</h1>
      <p>hello world</p>
      <p>authors</p>
      <code>{JSON.stringify(data)}</code>
      <hr />
      <p>blog posts</p>
      <code>{JSON.stringify(pages)}</code>
      <hr />
      <p>blog post</p>
      <code>{JSON.stringify(page)}</code>
      <hr />
      <p>events</p>
      <code>{JSON.stringify(events)}</code>
      <Events />
      <hr />
      <p>event</p>
      <code>{JSON.stringify(event)}</code>
      <hr />
    </main>
  );
};

export default Page;
