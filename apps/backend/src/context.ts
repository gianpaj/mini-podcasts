import { inferAsyncReturnType } from "@trpc/server";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import { getAuth } from "@clerk/fastify";

export function createContext({ req, res }: CreateFastifyContextOptions) {
  const auth = getAuth(req);
  return { auth, req, res };
}

export type Context = inferAsyncReturnType<typeof createContext>;
