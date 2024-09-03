import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://rickandmortyapi.com/graphql",
  documents: ["graphql/*.ts"],
  generates: {
    "./__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
