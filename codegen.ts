import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "schema.graphqls",
  generates: {
    "./src/graphql/generated/resolvers.ts": {
      config: {
        useIndexSignature: true,
        defaultMapper: "DeepPartial<T>",
        content: [
          "/* eslint-disable */",
          "import { DeepPartial } from 'ts-essentials';",
        ],
      },
      plugins: ["add", "typescript", "typescript-resolvers"],
    },
  },
}
export default config
