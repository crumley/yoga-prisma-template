import { Context } from "../context"
import { Resolvers } from "../generated/resolvers"
import { QueryResolver } from "./query"
import { MutationResolver } from "./mutations"
import { ItemResolver } from "./model"

export const resolvers: Resolvers<Context> = {
  Query: QueryResolver,
  Item: ItemResolver,
  Mutation: MutationResolver,
}
