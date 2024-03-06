import { createTRPCRouter, privateProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  getProfile: privateProcedure.query(({ ctx }) => {
    return ctx.db.profiles.findFirst({
      where: {
        id: ctx.user.id,
      },
    });
  }),
});
