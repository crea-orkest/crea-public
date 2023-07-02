import type { Image } from "./image";
import type { Scalars } from "../generated/types";

export interface Event {
  id: string;
  title: string;
  image: Image;
  description: Scalars["JSON"]["output"];
  startDate: Date;
}
