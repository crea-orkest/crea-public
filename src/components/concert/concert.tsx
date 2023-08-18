import { Location } from "components/location/location";
import { getEvent } from "graphql/getters/getEvent";
import React from "react";

export interface Props {
  id: string;
}

export const Concert: React.FC<Props> = async ({ id }) => {
  const { data } = await getEvent({ id });
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
