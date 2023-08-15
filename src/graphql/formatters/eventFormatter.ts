import { GetConcertQuery } from "../generated/types";
import { Event } from "../types/event";
import { fileFormatter } from "./fileFormatter";

export const eventFormatter = (data: GetConcertQuery): Event => ({
  id: String(data.concert?.id),
  title: String(data.concert?.title),
  image: data.concert?.poster ? fileFormatter(data.concert.poster) : undefined,
  startDate: new Date(),
});
