import React from "react";
import { getBlogPost } from "../../../graphql/getBlogPost";
import { notFound } from "next/navigation";
import { BlogPage } from "../../../components/blogPage/blogPage";

const Page = async ({ params: { slug } }) => {
  const { data, loading } = await getBlogPost({ slug });
  if (!data && !loading) return notFound();
  return <BlogPage data={data} />;
};

export default Page;
