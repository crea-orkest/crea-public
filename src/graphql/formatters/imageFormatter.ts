import { Asset } from "../generated/types";
import { Image } from "../types/image";

export const imageFormatter = (image?: Asset): Image => {
  if (!image?.url) {
    return;
  }

  return {
    fileName: image.fileName,
    height: image.height,
    title: image.title,
    description: image.description,
    url: image.url,
    width: image.width,
  };
};
