import createClient from "openapi-fetch";
import { paths } from "./spec";

export function createOpenCXClient({ apiKey }: { apiKey: string }) {
  const client = createClient<paths>({ baseUrl: "https://api.open.cx/" });

  client.use({
    onRequest(options) {
      options.request.headers.set("Authorization", `Bearer ${apiKey}`);
    },
  });

  return client;
}
