import { createClient } from "@hey-api/openapi-ts";

createClient({
  input: "../data/bestopts1.json", // sign up at app.heyapi.dev
  output: "../clients/client1",
});

createClient({
  input: "../data/bestopts2.json", // sign up at app.heyapi.dev
  output: "../clients/client2",
});
