import { createClient } from "@hey-api/openapi-ts";

createClient({
  input: "../data/bestopts1.json", // sign up at app.heyapi.dev
  output: "../clients/client1",
  plugins: [
    {
      name: "@hey-api/client-fetch",
      runtimeConfigPath: "../../configs/client.config.ts",
    },
  ],
});

createClient({
  input: "../data/bestopts2.json", // sign up at app.heyapi.dev
  output: "../clients/client2",
  plugins: [
    {
      name: "@hey-api/client-fetch",
      runtimeConfigPath: "../../configs/client.config.ts",
    },
  ],
});
