import React from "react";
import { getAuthors } from "../graphql/getAuthors";
import { getBlogPosts } from "../graphql/getBlogPosts";
import { getPages } from "../graphql/getPages";
import { getPage } from "../graphql/getPage";
import { getBlogPost } from "../graphql/getBlogPost";
import { getEvents } from "../graphql/getEvents";

const Page = async () => {
  const data = await getAuthors({ limit: 0, skip: 0 });
  const blogPosts = await getBlogPosts({ limit: 0, skip: 0 });
  const blogPost = await getBlogPost({ slug: "test" });
  const pages = await getPages({ limit: 0, skip: 0 });
  const page = await getPage({ slug: "test" });
  const events = await getEvents({ limit: 0, skip: 0 });

  return (
    <main>
      <h1>Page</h1>
      <p>hello world</p>
      <p>authors</p>
      <code>{JSON.stringify(data)}</code>
      <hr />
      <p>blog posts</p>
      <code>{JSON.stringify(blogPosts)}</code>
      <hr />
      <p>blog post</p>
      <code>{JSON.stringify(blogPost)}</code>
      <hr />
      <p>pages</p>
      <code>{JSON.stringify(pages)}</code>
      <hr />
      <p>page</p>
      <code>{JSON.stringify(page)}</code>
      <hr />
      <p>events</p>
      <code>{JSON.stringify(events)}</code>
      <hr />
    </main>
  );
};

export default Page;
