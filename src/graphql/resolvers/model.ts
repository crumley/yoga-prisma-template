import { Item } from "@prisma/client"
import { Context } from "../context"
import { Resolvers } from "../generated/resolvers"

const getItem = async (ctx: Context, id?: string): Promise<Item | null> => {
  if (id) {
    return ctx.prisma.item.findUnique({ where: { id: parseInt(id, 10) } })
  }

  return null
}

export const ItemResolver: Resolvers<Context>["Item"] = {
  id: ({ id }) => id,
  name: ({ id }, _args, ctx) =>
    getItem(ctx, id).then((item) => item?.name ?? null),
  description: ({ id }, _args, ctx) =>
    getItem(ctx, id).then((item) => item?.description ?? null),
}
