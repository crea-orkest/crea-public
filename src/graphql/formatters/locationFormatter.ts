import { Location } from "graphql/types/location";
import { GetLocationQuery } from "../generated/graphql";

export const locationFormatter = (data: GetLocationQuery): Location => ({
  title: data.location?.title || "",
  address: data.location?.addressTitle || "",
  lat: Number(data.location?.address?.latitude),
  lon: Number(data.location?.address?.longitude),
  id: data.location?.id || "",
});
