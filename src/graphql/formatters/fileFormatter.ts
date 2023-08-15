import { FileField } from "../generated/types";
import { Image } from "../types/image";

export const fileFormatter = (image: FileField): Image => ({
  title: String(image.title),
  description: String(image.alt),
  url: image.url,
  width: Number(image.width),
  height: Number(image.height),
});
