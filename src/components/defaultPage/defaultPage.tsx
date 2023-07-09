import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from "./styles.module.scss";
import { getPage } from "../../graphql/getPage";
import { notFound } from "next/navigation";

export const DefaultPage = async ({ slug }) => {
  const { data, loading } = await getPage({ slug });
  if (!data && !loading) return notFound();
  return (
    <article className={styles.article}>
      <h1>{data.title}</h1>
      {documentToReactComponents(data.body)}
    </article>
  );
};
