import { initTRPC } from "@trpc/server";
import { appRouter } from "@repo/api";
import { httpBatchLink } from "@trpc/client";
import getBaseUrl from "./getBaseUrl";

const t = initTRPC.context().create();
const createCaller = t.createCallerFactory(appRouter);

export const serverTRPC = createCaller({
  links: [
    httpBatchLink({
      url: getBaseUrl(),
    }),
  ],
});
