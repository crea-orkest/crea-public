import React from "react";

import styles from "./styles.module.scss";
import { getPage } from "graphql/getPage";
import { notFound } from "next/navigation";
import { Events } from "components/events/events";

interface Props {
  slug: string;
}

export const BlogPage = async ({ slug }: Props) => {
  const { data, loading } = await getPage({ slug });
  if (!data || data === undefined || !loading) return notFound();
  return (
    <article className={styles.article}>
      <h1>{data.title}</h1>
      <Events />
    </article>
  );
};
