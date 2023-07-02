import React from "react";

import { BlogPage } from "../../../components/blogPage/blogPage";

const Page = async ({ params: { slug } }) => {
  return <BlogPage slug={slug} />;
};

export default Page;
