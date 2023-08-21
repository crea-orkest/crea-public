import { Location } from "components/location";
import React from "react";
import { Spinner } from "components/spinner";
import { getEvent } from "graphql/getters/getEvent";

export interface Props {
  id: string;
}

export const Concert: React.FC<Props> = async ({ id }) => {
  const { data, loading } = await getEvent({ id });

  if (loading) return <Spinner />;

  if (!data) return null;

  return (
    <div>
      <h2>{data.title}</h2>
      {data?.locations?.map((item) => (
        <div key={item.id}>
          <Location id={item.id} />
        </div>
      ))}
      <p>{JSON.stringify(data.locations)}</p>
    </div>
  );
};
