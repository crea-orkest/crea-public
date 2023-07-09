import { writeFile } from "./writeFile.mjs";

export const safeAllContentTypes = async (environment) => {
  try {
    const allContentTypes = await environment.getContentTypes();

    allContentTypes.items.map(async (contentType) => {
      await writeFile(
        `./src/contentful/contentType/${contentType.sys.id}.json`,
        JSON.stringify(contentType)
      );
    });
  } catch (error) {
    console.error(error);
  }
};
