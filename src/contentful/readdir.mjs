import fs from "node:fs/promises";

export const readdir = async (path) => {
  try {
    const data = await fs.readdir(`./src/contentful/${path}`, {
      encoding: "utf8",
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
