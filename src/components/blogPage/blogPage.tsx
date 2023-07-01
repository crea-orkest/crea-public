import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Page } from "../../graphql/types/page";

import styles from "./styles.module.scss";

interface Props {
  data: Page;
}

export const BlogPage = ({ data }: Props) => {
  return (
    <article className={styles.article}>
      <h1>{data.title}</h1>
      {documentToReactComponents(data.body)}
    </article>
  );
};
