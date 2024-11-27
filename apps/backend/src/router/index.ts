import { initTRPC, TRPCError } from "@trpc/server";
import { z } from "zod";
import { Context } from "../context";
import { db } from "../db";

const t = initTRPC.context<Context>().create();

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.auth.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      auth: ctx.auth,
    },
  });
});

const protectedProcedure = t.procedure.use(isAuthed);

export const appRouter = t.router({
  getPodcasts: protectedProcedure.query(async ({ ctx }) => {
    return db.getPodcasts(ctx.auth.userId);
  }),
  createPodcast: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        imageUrl: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return db.createPodcast({
        ...input,
        authorId: ctx.auth.userId,
      });
    }),
});

export type AppRouter = typeof appRouter;
