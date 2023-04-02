import { LoginInput, SignUpInput, User } from "./types";
import UserModel from "../../models/user.ts";

export const resolvers = {
  Query: {
    users: async () => await UserModel.find({}),
    login: async (
      parent: any,
      args: { user: LoginInput }
    ): Promise<User | null> => {
      const recordFound = await UserModel.findOne({
        email: args.user.email,
        password: args.user.password,
      });
      if (!recordFound) {
        return null;
      }
      const newRecord = {
        id: recordFound.id,
        firstName: recordFound.firstName,
        lastName: recordFound.lastName,
        email: recordFound.email,
      };
      return newRecord;
    },
  },
  Mutation: {
    signup: async (parent: any, args: { user: SignUpInput }) => {
      try {
        const userAlreadyExist = await UserModel.findOne({
          email: args.user.email,
        });
        if (userAlreadyExist) {
          return userAlreadyExist;
        }
        const userInstance = new UserModel({ ...args.user });
        const result = await userInstance.save();
        return result;
      } catch (error) {
        console.log("error ", error);
      }
    },
  },
};
