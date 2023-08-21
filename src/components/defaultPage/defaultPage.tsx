import React from "react";
import { Spinner } from "components/spinner";
import { getPage } from "graphql/getters/getPage";
import { notFound } from "next/navigation";
import styles from "./styles.module.scss";

export interface Props {
  slug: string;
}

export const DefaultPage = async ({ slug }: Props) => {
  const { data, loading } = await getPage({ slug });
  if (loading) {
    return <Spinner />;
  }

  if (!data) return notFound();

  return (
    <article className={styles.article}>
      <h1>{data.title}</h1>
      {JSON.stringify(data)}
    </article>
  );
};
