import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`]:
        {
          headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_TOKEN}`,
          },
        },
    },
  ],
  documents: ["./src/graphql/**/*.ts"],
  generates: {
    "./src/graphql/generated/types.ts": {
      plugins: ["typescript", "fragment-matcher", "typescript-operations"],
      config: { withHooks: true },
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
