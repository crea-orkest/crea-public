import React from "react";
import { getAuthor } from "graphql/getters/getAuthor";

export interface Props {
  id: string | undefined;
}

export const Author: React.FC<Props> = async ({ id }) => {
  if (!id) return null;
  const { data } = await getAuthor({ id });
  if (!data) return null;

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.description}</p>
    </div>
  );
};
