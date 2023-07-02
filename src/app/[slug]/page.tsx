import React from "react";

import { DefaultPage } from "../../components/defaultPage/defaultPage";

const Page = async ({ params: { slug } }) => {
  return <DefaultPage slug={slug} />;
};

export default Page;
