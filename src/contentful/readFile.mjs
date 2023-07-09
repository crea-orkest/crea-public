import fs from "node:fs/promises";

export const readFile = async (path) => {
  try {
    const data = await fs.readFile(path, {
      encoding: "utf8",
    });
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
};
