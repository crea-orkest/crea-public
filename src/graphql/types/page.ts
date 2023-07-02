import { Scalars } from "../generated/types";
import { Image } from "./image";

export interface Page {
  id: String;
  title: String;
  slug: String;
  headerImage: Image;
  body: Scalars["JSON"]["output"];
}
