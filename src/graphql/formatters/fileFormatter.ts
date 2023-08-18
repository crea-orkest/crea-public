import { FileFragment } from "graphql/generated/graphql";
import { Image } from "../types/image";

export const fileFormatter = (data: FileFragment): Image | undefined => {
  if (!data) return;

  return {
    id: data.id,
    title: data?.title || "",
    description: data?.alt || "",
    url: data.url,
    width: Number(data?.width),
    height: Number(data?.height),
  };
};
