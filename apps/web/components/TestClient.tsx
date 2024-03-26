"use client";

import { clientTRPC } from "../utils/trpc/client";

const TestClient = () => {
  const homepage = clientTRPC.getHomePage.useQuery();

  return <>Homepage data: {homepage.data}</>;
};

export default TestClient;
