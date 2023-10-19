import { Context } from "../context"
import { Resolvers } from "../generated/resolvers"

export const MutationResolver: Resolvers<Context>["Mutation"] = {
  createItem: async (_, args, ctx) => {
    const item = await ctx.prisma.item.create({
      data: { name: args.input.name, description: args.input.description },
    })

    return {
      success: true,
      code: 0,
      node: { __typename: "Item", id: item.id },
    }
  },
}
