import { GetConcertsQuery } from "../generated/types";
import { Event } from "../types/event";
import { fileFormatter } from "./fileFormatter";

export const eventsFormatter = (data: GetConcertsQuery): Event[] =>
  data.allConcerts.map((event) => ({
    id: String(event.id),
    title: String(event.title),
    image: event.poster ? fileFormatter(event.poster) : undefined,
    startDate: new Date(),
  }));
