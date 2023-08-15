import type { Image } from "./image";

export interface Event {
  id: string;
  title: string;
  image: Image | undefined;
  startDate: Date;
}
