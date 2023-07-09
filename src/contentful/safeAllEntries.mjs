import { writeFile } from "./writeFile.mjs";

export const safeAllEntries = async (environment) => {
  try {
    const entries = await environment.getEntries();

    entries.items.map(async (entry) => {
      await writeFile(
        `./src/contentful/entries/${entry.sys.id}.json`,
        JSON.stringify(entry)
      );
    });
  } catch (error) {
    console.error(error);
  }
};
