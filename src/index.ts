import { createGraphqlServer } from "./graphql"

const graphqlServer = createGraphqlServer()
const server = Bun.serve({fetch: graphqlServer})

console.info(
  `Server is running on ${new URL(
    graphqlServer.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`
  )}`
)