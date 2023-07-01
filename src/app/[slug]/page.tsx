import React from "react";
import { getPage } from "../../graphql/getPage";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Page = async ({ params: { slug } }) => {
  const { data, loading } = await getPage({ slug });

  if (!data && !loading) return notFound();

  return (
    <main>
      <p>{data.title}</p>
      {documentToReactComponents(data.body)}
    </main>
  );
};

export default Page;
