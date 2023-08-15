import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      [`https://graphql.datocms.com`]: {
        headers: {
          Authorization: `Bearer ${process.env.DATOCMS_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  documents: ["./src/graphql/**/*.ts"],
  generates: {
    "./src/graphql/generated/types.ts": {
      plugins: ["typescript", "fragment-matcher", "typescript-operations"],
      config: {
        withHooks: true,
        scalars: {
          BooleanType: "boolean",
          CustomData: "Record<string, string>",
          Date: "string",
          DateTime: "string",
          FloatType: "number",
          IntType: "number",
          ItemId: "string",
          JsonField: "unknown",
          MetaTagAttributes: "Record<string, string>",
          UploadId: "string",
        },
      },
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
