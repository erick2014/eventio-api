import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLSchema } from "graphql";

export const getResolversAndSchemas = async () => {
  const modulesFolder = path.join(
    fileURLToPath(import.meta.url),
    "../",
    "modules"
  );
  const folders = fs.readdirSync(modulesFolder);
  const config: GraphQLSchema[] = [];

  for (const folder of folders) {
    try {
      const files = fs.readdirSync(path.join(modulesFolder, folder));
      if (files.length) {
        const { resolvers } = await import(`./modules/${folder}/resolvers.ts`);
        const { typeDefs } = await import(`./modules/${folder}/schema.ts`);
        config.push(makeExecutableSchema({ typeDefs, resolvers }));
      }
    } catch (error) {
      console.log("error importing a resolver or typedef ", error);
    }
  }
  return config;
};
