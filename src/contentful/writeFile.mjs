import fs from "node:fs/promises";

export const writeFile = async (path, data) => {
  try {
    await fs.writeFile(path, data, {
      encoding: "utf8",
    });

    console.log("success");
  } catch (err) {
    console.log(err);
  }
};
