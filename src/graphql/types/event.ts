import type { Image } from "./image";

interface Location {
  id: string;
}

export interface Event {
  id: string;
  title: string;
  image: Image | undefined;
  locations: Location[] | undefined;
}
