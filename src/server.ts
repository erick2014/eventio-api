import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getResolversAndSchemas } from "./utils.ts";
import { mergeSchemas } from "@graphql-tools/schema";
import { GraphQLSchema } from "graphql";
import mongoose from "mongoose";

try {
  await mongoose.connect("mongodb://127.0.0.1:2717/eventiodb");

  const schemas: GraphQLSchema[] = await getResolversAndSchemas();
  const server = new ApolloServer({
    schema: mergeSchemas({ schemas }),
  });

  await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
} catch (error) {
  console.log("error initializing server ", error);
}
