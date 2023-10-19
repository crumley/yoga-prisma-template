import * as path from "path"
import * as fs from "fs"
import { createSchema, createYoga } from "graphql-yoga"

import { createContext } from "./context"
import { resolvers } from "./resolvers"

export const createGraphqlServer = () => {
  const yoga = createYoga({
    context: createContext,
    schema: createSchema({
      typeDefs: fs.readFileSync(
        path.join(__dirname, "../../schema.graphqls"),
        "utf-8"
      ),
      resolvers,
    }),
  })

  return yoga
}
