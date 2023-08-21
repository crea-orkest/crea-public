import React from "react";
import { Spinner } from "components/spinner";
import { getLocation } from "graphql/getters/getLocation";

export interface Props {
  id: string;
}

export const Location: React.FC<Props> = async ({ id }) => {
  const { data, loading } = await getLocation({ id });
  if (loading) return <Spinner />;
  if (!data?.id) return null;

  return (
    <>
      <span>{data.title}</span>
      <span>{JSON.stringify(data)}</span>
    </>
  );
};
