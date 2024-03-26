import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { publicProcedure, router } from "./src/trpc";
import { getHomePage } from "@repo/contentful";

export const appRouter = router({
  getSecretMessage: publicProcedure.query(() => {
    return "you can see this secret message!";
  }),
  getHomePage: publicProcedure.query(async ({}) => {
    const homepage = await getHomePage();
    return homepage;
  }),
});

export type AppRouter = typeof appRouter;

createHTTPServer({
  router: appRouter,
}).listen(4000);
