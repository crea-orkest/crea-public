import contentful from "contentful-management";
import { safeAllContentTypes } from "./safeAllContentTypes.mjs";
import { safeAllEntries } from "./safeAllEntries.mjs";
import "dotenv/config";

const accessToken = process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN;
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const environmentId = process.env.CONTENTFUL_ENVIRONMENT;

try {
  const client = contentful.createClient({
    accessToken,
  });
  const space = await client.getSpace(spaceId);
  const environment = await space.getEnvironment(environmentId);

  // await safeAllContentTypes(environment);

  await environment
    .createEntryWithId("page", "422", {
      fields: {
        title: { en: "auto", nl: "auto" },
        slug: { en: "auto", nl: "auto" },
        body: {
          nl: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: "auto generated",
                    nodeType: "text",
                  },
                ],
                nodeType: "paragraph",
              },
            ],
            nodeType: "document",
          },
        },
      },
    })
    .then(async (entry) => await entry.publish());

  await safeAllEntries(environment);

  // to recreate content types:
  // await recreateContentTypes(environment)
} catch (error) {
  console.error(error);
}
