import { Context } from "../context"
import { Resolvers } from "../generated/resolvers"

export const QueryResolver: Resolvers<Context>["Query"] = {
  items: async (_, _args, ctx) => {
    const items = await ctx.prisma.item.findMany()
    return items.map((entity) => ({
      __typename: "Item",
      id: entity.id.toString(),
      name: entity.name,
      description: entity.description,
    }))
  },
}
