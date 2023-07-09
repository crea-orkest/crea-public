import React from "react";
import { getBlogPosts } from "../../graphql/getBlogPosts";
import { notFound } from "next/navigation";

const Page = async () => {
  const { data, loading } = await getBlogPosts({ limit: 10, skip: 0 });

  if (!data && !loading) return notFound();

  return (
    <main>
      <h1>blog</h1>

      <p>blog posts</p>

      <ul>
        {data.map(({ title, id, slug }) => (
          <li key={id}>
            <a href={`/blog/${slug}`}>{title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
