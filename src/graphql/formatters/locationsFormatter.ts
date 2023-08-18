import { Location } from "graphql/types/location";
import { GetLocationsQuery } from "../generated/graphql";

export const locationsFormatter = (data: GetLocationsQuery): Location[] =>
  data.allLocations.map((location) => ({
    title: location?.title || "",
    address: location.addressTitle || "",
    lat: Number(location?.address?.latitude),
    lon: Number(location?.address?.longitude),
    id: location?.id || "",
  }));
