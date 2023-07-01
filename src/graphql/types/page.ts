import { Scalars } from "../generated/types";

export interface Page {
  id: string;
  title: string;
  slug: string;
  body: Scalars["JSON"]["output"];
}
