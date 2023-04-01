import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getResolversAndSchemas } from "./utils.ts";
import { mergeSchemas } from "@graphql-tools/schema";

const schemas: any = await getResolversAndSchemas();
const server = new ApolloServer({
  schema: mergeSchemas({ schemas }),
});

await startStandaloneServer(server, {
  listen: { port: 4000 },
});
