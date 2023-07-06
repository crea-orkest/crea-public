import { readdir } from "./readdir.mjs";
import { readFile } from "./readFile.mjs";
import { createContentTypeWithId } from "./createContentTypeWithId.mjs";

export const recreateContentTypes = async (environment) => {
  const contentTypes = await readdir("contentType");

  contentTypes.map(async (fileName) => {
    try {
      const file = await readFile(`./src/contentful/contentType/${fileName}`);

      await createContentTypeWithId({
        environment,
        name: file.sys.id,
        fields: file.fields,
      });
    } catch (error) {
      console.error(error);
    }
  });
};
