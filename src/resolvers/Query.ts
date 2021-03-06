import { getUserId, Context } from '../utils'

export const Query = {

  users(parent, args, ctx: Context) {
    return ctx.prisma.users()
  },

  me(parent, args, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id })
  },
}
