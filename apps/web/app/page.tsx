import TestClient from "../components/TestClient";
import { serverTRPC } from "../utils/trpc/serverClient";

export default async function Page(): Promise<JSX.Element> {
  // const message = await serverTRPC.getSecretMessage();

  return (
    <>
      {/* Server: {message} */}
      <TestClient />
    </>
  );
}
