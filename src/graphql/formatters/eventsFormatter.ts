import { GetEventsQuery } from "../generated/types";
import { Event } from "../types/event";
import { imageFormatter } from "./imageFormatter";

export const eventsFormatter = (data: GetEventsQuery): Event[] =>
  data.eventCollection.items.map((event) => ({
    id: event.sys.id,
    title: event.title,
    image: imageFormatter(event.image),
    description: event.description.json,
    startDate: new Date(event.startDate),
  }));
