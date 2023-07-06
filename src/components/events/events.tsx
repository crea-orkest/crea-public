import React from "react";

import Image from "next/image";
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
        <article key={event.title} className={styles.article}>
          <h1>{event.title}</h1>
          <Image
            src={event.image.url}
            width={20}
            height={20}
            alt={event.image.description}
          />
        </article>
      ))}
    </section>
  );
};
