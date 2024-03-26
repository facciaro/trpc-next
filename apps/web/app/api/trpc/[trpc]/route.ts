import { AppRouter, appRouter } from "@repo/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (request: Request) => 
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter as AppRouter,
    createContext: () => ({})
  })

  export { handler as GET, handler as POST }