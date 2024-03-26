"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { clientTRPC } from "./client";
import getBaseUrl from "./getBaseUrl";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    clientTRPC.createClient({
      links: [
        httpBatchLink({
          url: getBaseUrl(),
        }),
      ],
    }),
  );

  return (
    <clientTRPC.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </clientTRPC.Provider>
  );
}
