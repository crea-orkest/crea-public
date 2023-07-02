import React from "react";

import styles from "./styles.module.scss";
import { getEvents } from "../../graphql/getEvents";
import { Event } from "../../graphql/types/event";

export const Events = async () => {
  const { data, loading } = await getEvents({ skip: 0, limit: 3 });

  if (!data && !loading) return null;

  return (
    <section>
      <h2>EVENTS</h2>
      {data.map((event: Event) => (
        <article className={styles.article}>
          <h1>{event.title}</h1>
          <img src={event.image.url} width={20} height={20} />
        </article>
      ))}
    </section>
  );
};
