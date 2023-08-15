import React from "react";

import { DefaultPage } from "components/defaultPage/defaultPage";

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = async ({ params: { slug } }: PageProps) => {
  return <DefaultPage slug={slug} />;
};

export default Page;
