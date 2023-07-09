import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from "./styles.module.scss";
import { getBlogPost } from "../../graphql/getBlogPost";
import { notFound } from "next/navigation";
import { Events } from "../events/events";

interface Props {
  slug: string;
}

export const BlogPage = async ({ slug }: Props) => {
  const { data, loading } = await getBlogPost({ slug });
  if (!data && !loading) return notFound();
  return (
    <article className={styles.article}>
      <h1>{data.title}</h1>
      {documentToReactComponents(data.body)}
      <Events />
    </article>
  );
};
