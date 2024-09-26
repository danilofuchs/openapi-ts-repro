import { defineConfig } from "@hey-api/openapi-ts";
export default defineConfig({
  input:
    "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/refs/heads/main/examples/v3.0/api-with-examples.yaml",
  output: {
    path: "src/server",
  },
  client: "@hey-api/client-fetch",
  name: "Service",
  services: {
    asClass: true,
  },
});
